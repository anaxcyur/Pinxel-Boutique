import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, update, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC80cIJgUiSzT0mAkanVK-X0jW-EhhYvM4",
    authDomain: "pinxelboutique.firebaseapp.com",
    projectId: "pinxelboutique",
    storageBucket: "pinxelboutique.firebasestorage.app",
    messagingSenderId: "206364783679",
    appId: "1:206364783679:web:9f014e61374f5f10f3748a",
    databaseURL: "https://pinxelboutique-default-rtdb.asia-southeast1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

let currentUserData = null;
let addressesArray = [];

function renderProfileNavbar(isLoggedIn) {
    const authSection = document.getElementById('auth-section');
    if (!authSection) return;

    if (isLoggedIn) {
        authSection.innerHTML = `
            <div class="logged-in-icons">
                <div class="icon-circle" id="navCartBtn"><img src="sources/cart.png" alt="Cart"></div>
                <div class="icon-circle" id="navWishBtn"><img src="sources/heart.png" alt="Wish"></div>
                <div class="icon-circle" id="navProfileBtn"><img src="sources/user.png" alt="User"></div>
            </div>
        `;
        document.getElementById('navCartBtn')?.addEventListener('click', () => location.href = 'cart.html');
        document.getElementById('navWishBtn')?.addEventListener('click', () => location.href = 'wishlist.html');
        document.getElementById('navProfileBtn')?.addEventListener('click', () => location.href = 'profile.html');
    } else {
        authSection.innerHTML = `<button class="btn-login-nav" id="navLoginBtn">Login/Sign-Up</button>`;
        document.getElementById('navLoginBtn')?.addEventListener('click', () => location.href = 'login.html');
    }
}

function populateUI() {
    if (!currentUserData) return;

    const authenticatedEmail = auth.currentUser ? auth.currentUser.email : (currentUserData.email || "-");
    document.getElementById('view-email').textContent = authenticatedEmail;
    
    document.getElementById('view-birthday').textContent = currentUserData.birthday || "-";
    document.getElementById('view-zip').textContent = currentUserData.zip || "-";
    document.getElementById('view-gender').textContent = currentUserData.gender || "-";
    
    document.getElementById('profName').value = currentUserData.name || "";
    document.getElementById('profBirthday').value = currentUserData.birthday || "";
    document.getElementById('profGender').value = currentUserData.gender || "";

    if (currentUserData.addresses && Array.isArray(currentUserData.addresses)) {
        addressesArray = currentUserData.addresses;
    } else if (currentUserData.address) {
        addressesArray = [{
            street: currentUserData.address,
            city: currentUserData.city || "",
            zipCode: currentUserData.zip || ""
        }];
    } else {
        addressesArray = [];
    }
    renderSavedAddressesList();
}

function renderSavedAddressesList() {
    const listContainer = document.getElementById('saved-addresses-list-container');
    if (!listContainer) return;

    if (addressesArray.length === 0) {
        listContainer.innerHTML = `<p style="color:#aa9da1; font-style:italic;">No addresses saved in your registry card yet.</p>`;
        return;
    }

    listContainer.innerHTML = addressesArray.map((addr, index) => `
        <div style="background: #fff; border: 1px solid #ffc0d0; padding:15px; border-radius:12px; display:flex; justify-content:space-between; align-items:center;">
            <div>
                <strong style="color:#524B4B; font-size:1rem;">📍 Address Entry #${index + 1}</strong>
                <p style="margin:4px 0 0 0; font-size:0.9rem; color:#666;">
                    ${addr.street}, ${addr.city}, Post Code: ${addr.zipCode}
                </p>
            </div>
            <button class="delete-addr-btn" data-index="${index}" style="background:none; border:none; color:#ff6b8b; font-weight:bold; font-size:1.2rem; cursor:pointer;">
                &times;
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.delete-addr-btn').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const targetIndex = parseInt(e.target.getAttribute('data-index'));
            addressesArray.splice(targetIndex, 1);
            
            const userId = auth.currentUser ? auth.currentUser.uid : currentUserData.uid;
            await update(ref(database, `users/${userId}`), {
                addresses: addressesArray
            });
            currentUserData.addresses = addressesArray;
            localStorage.setItem('currentUser', JSON.stringify(currentUserData));
            renderSavedAddressesList();
        });
    });
}

async function appendNewAddress() {
    if (!auth.currentUser) {
        alert("Session error. Please re-login.");
        return;
    }

    const street = document.getElementById('profAddress').value.trim();
    const city = document.getElementById('profCity').value.trim();
    const zipCode = document.getElementById('profZip').value.trim();

    if (!street || !city || !zipCode) {
        alert("Please completely fill out all address entry blocks.");
        return;
    }

    const newAddressObj = { street, city, zipCode };
    addressesArray.push(newAddressObj);

    const userId = auth.currentUser.uid;

    try {
        await update(ref(database, 'users/' + userId), {
            addresses: addressesArray,
            address: street, 
            city: city, 
            zip: zipCode 
        });

        if (!currentUserData) currentUserData = {};
        currentUserData.addresses = addressesArray;
        currentUserData.address = street;
        currentUserData.city = city;
        currentUserData.zip = zipCode;

        localStorage.setItem('currentUser', JSON.stringify(currentUserData));
        alert("New delivery address added successfully! 🏠");
        
        document.getElementById('profAddress').value = "";
        document.getElementById('profCity').value = "";
        document.getElementById('profZip').value = "";

        populateUI();
    } catch (error) {
        alert("Registry Update Error: " + error.message);
    }
}

async function fetchPurchaseHistory(userId) {
    const historyContainer = document.getElementById('purchase-history-view');
    if (!historyContainer) return;

    try {
        const ordersSnapshot = await get(ref(database, 'orders'));
        if (!ordersSnapshot.exists()) {
            showEmptyHistory();
            return;
        }

        const allOrders = ordersSnapshot.val();
        const userOrders = Object.entries(allOrders)
            .map(([id, data]) => ({ id, ...data }))
            .filter(order => order.userId === userId);

        if (userOrders.length === 0) {
            showEmptyHistory();
            return;
        }

        historyContainer.innerHTML = '<h2>PURCHASE HISTORY</h2>';
        userOrders.reverse().forEach(order => {
            const orderDate = new Date(order.timestamp);
            const deliveryDate = new Date(orderDate);
            deliveryDate.setDate(deliveryDate.getDate() + 7);

            let itemsHTML = '';
            if (Array.isArray(order.items)) {
                order.items.forEach(item => {
                    itemsHTML += `
                        <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-top: 5px; color: #524B4B;">
                            <span>• ${item.name} (${item.size || 'M'}) x${item.quantity}</span>
                            <span>PHP ${(Number(item.price) * Number(item.quantity)).toFixed(2)}</span>
                        </div>
                    `;
                });
            }

            historyContainer.insertAdjacentHTML('beforeend', `
                <div class="receipt-card" style="background:#fff; border:1px solid #ffc0d0; padding:20px; border-radius:15px; margin-bottom:20px; box-shadow:0 4px 10px rgba(0,0,0,0.02);">
                    <div style="display:flex; justify-content:space-between; border-bottom:1.5px dashed #ffc0d0; padding-bottom:10px; margin-bottom:10px;">
                        <div>
                            <strong style="color:#000;">Order ID: ${order.id.slice(-8).toUpperCase()}</strong>
                            <div style="font-size:0.8rem; color:#888;">Placed on: ${orderDate.toLocaleDateString()}</div>
                        </div>
                        <span style="background:#ffc0d0; color:#fff; padding:4px 12px; border-radius:50px; font-size:0.8rem; font-weight:bold; height:fit-content;">
                            ${order.orderStatus || 'In Transit'}
                        </span>
                    </div>
                    <div style="margin-bottom:10px;">
                        ${itemsHTML}
                    </div>
                    <div style="font-size:0.85rem; border-top:1px solid #f2f2f2; padding-top:10px; margin-bottom:12px; color:#666;">
                        <div><strong>Payment:</strong> ${order.paymentMethod}</div>
                        <div><strong>Ship To:</strong> ${order.shippingAddress?.street || order.shippingAddress || ''}, ${order.shippingAddress?.city || ''}</div>
                    </div>
                    <div style="display:flex; justify-content:space-between; align-items:center; background:#fff5f7; padding:10px 15px; border-radius:8px;">
                        <div>
                            <span style="font-size:0.8rem; color:#ff6b8b; display:block; font-weight:600;"><i class="fa-solid fa-truck-fast"></i> EXPECTED DELIVERY BY:</span>
                            <strong style="color:#524B4B; font-size:0.9rem;">${deliveryDate.toLocaleDateString()} (Within 7 Days)</strong>
                        </div>
                        <strong>${order.orderTotal}</strong>
                    </div>
                </div>
            `);
        });
    } catch (error) {
        console.error(error);
    }
}

function showEmptyHistory() {
    const historyContainer = document.getElementById('purchase-history-view');
    if (!historyContainer) return;
    historyContainer.innerHTML = `
        <h2>PURCHASE HISTORY</h2>
        <div class="empty-history-box" style="text-align:center; padding:20px 0;">
            <i class="fa-solid fa-bag-shopping" style="font-size:2rem; margin-bottom:10px; color:#ffc0d0;"></i>
            <p>No recent purchases found on this membership account.</p>
        </div>
    `;
}

function handleTabSwitching() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetPanelId = item.getAttribute('data-target');
            if (!targetPanelId) return; 
            document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            document.querySelectorAll('.content-panel').forEach(panel => panel.classList.remove('active'));
            document.getElementById(targetPanelId)?.classList.add('active');
        });
    });
}
function isOldEnough(birthDateString) {
    if (!birthDateString) return false;
    const today = new Date();
    const birthDate = new Date(birthDateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age >= 18;
}
async function saveProfileData() {
    if (!auth.currentUser) return;
    
    const birthdayInput = document.getElementById('profBirthday').value;

    if (birthdayInput && !isOldEnough(birthdayInput)) {
        alert("Update Failed: You must be 18 years or older to maintain an active membership profile at Pinxel Boutique.");
        return;
    }
    
    const userId = auth.currentUser.uid;
    const updatedPayload = {
        ...currentUserData,
        uid: userId,
        email: auth.currentUser.email,
        name: document.getElementById('profName').value.trim(),
        birthday: birthdayInput,
        gender: document.getElementById('profGender').value
    };
    try {
        await update(ref(database, 'users/' + userId), updatedPayload);
        currentUserData = updatedPayload;
        localStorage.setItem('currentUser', JSON.stringify(updatedPayload));
        alert("Profile details updated successfully! ✨");
        populateUI();
    } catch (error) {
        alert("Update Error: " + error.message);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.replace("login.html");
        return;
    }
    handleTabSwitching();

    onAuthStateChanged(auth, async (user) => {
        if (user) {
            renderProfileNavbar(true);
            const snapshot = await get(ref(database, 'users/' + user.uid));
            if (snapshot.exists()) {
                currentUserData = snapshot.val();
            } else {
                currentUserData = JSON.parse(localStorage.getItem('currentUser')) || { uid: user.uid, email: user.email };
            }
            currentUserData.uid = user.uid;
            
            populateUI();
            fetchPurchaseHistory(user.uid);
        } else {
            window.location.replace("login.html");
        }
    });

    document.getElementById('saveProfileBtn')?.addEventListener('click', saveProfileData);
    document.getElementById('saveAddressBtn')?.addEventListener('click', appendNewAddress);
    document.getElementById('sidebarLogoutBtn')?.addEventListener('click', () => {
        signOut(auth).then(() => { localStorage.clear(); window.location.replace("login.html"); });
    });
});s