import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getDatabase, ref, set, push, get, update } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

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

let activeUser = null;
let cartItems = [];
let userAddressesList = [];

function setupAddressSelector(addresses) {
    const deliverySection = document.querySelector('.checkout-section');
    if (!deliverySection) return;

    const oldGroup = document.getElementById('addressSelectGroup');
    if (oldGroup) oldGroup.remove();

    if (!addresses || addresses.length === 0) return;

    const selectHTML = `
        <div class="form-group" id="addressSelectGroup" style="margin-bottom: 20px;">
            <label for="savedAddressesDropdown" style="color: #ff6b8b; font-weight: 600; display: block; margin-bottom: 8px;">Use a Saved Address Book Entry</label>
            <select id="savedAddressesDropdown" style="width: 100%; padding: 12px; border: 1px solid #ffc0d0; border-radius: 8px; font-family: 'Poppins', sans-serif; background-color: #fff;">
                <option value="new">-- Type a New Address Below --</option>
                ${addresses.map((addr, idx) => `
                    <option value="${idx}">${addr.street}, ${addr.city} (${addr.zipCode || addr.zip || ''})</option>
                `).join('')}
            </select>
        </div>
    `;

    const heading = deliverySection.querySelector('.section-heading') || deliverySection.firstElementChild;
    heading.insertAdjacentHTML('afterend', selectHTML);

    document.getElementById('savedAddressesDropdown').addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === "new") {
            document.getElementById('shippingAddress').value = "";
            document.getElementById('shippingCity').value = "";
            document.getElementById('postalCode').value = "";
        } else {
            const selected = addresses[val];
            document.getElementById('shippingAddress').value = selected.street || "";
            document.getElementById('shippingCity').value = selected.city || "";
            document.getElementById('postalCode').value = selected.zipCode || selected.zip || "";
        }
    });
}

async function syncLiveProfileAndAddresses(uid) {
    try {
        const snapshot = await get(ref(database, `users/${uid}`));
        if (snapshot.exists()) {
            const userData = snapshot.val();
            if (userData.name) document.getElementById('fullName').value = userData.name;

            if (userData.addresses && Array.isArray(userData.addresses)) {
                userAddressesList = userData.addresses;
            } else if (userData.address) {
                userAddressesList = [{
                    street: userData.address,
                    city: userData.city || "",
                    zipCode: userData.zip || ""
                }];
            } else {
                userAddressesList = [];
            }
            setupAddressSelector(userAddressesList);
        }
    } catch (err) {
        console.error("Error syncing live profile components:", err);
    }
}

function loadCartSummary() {
    const rawCart = localStorage.getItem('cart'); 
    const listContainer = document.getElementById('summaryItemList');
    
    if (!rawCart || JSON.parse(rawCart).length === 0) {
        cartItems = [{
            id: "prod_bee_top",
            name: "Bee Colar Top",
            price: 559.00,
            size: "XL",
            color: "Yellow",
            img: "image_47d7d9.png", 
            quantity: 1
        }];
    } else {
        cartItems = JSON.parse(rawCart);
    }

    listContainer.innerHTML = "";
    let subtotal = 0;

    cartItems.forEach(item => {
        subtotal += (Number(item.price) * Number(item.quantity));
        listContainer.insertAdjacentHTML('beforeend', `
            <div class="summary-item" style="display:flex; gap:10px; margin-bottom:10px;">
                <img src="${item.img || ''}" alt="${item.name}" style="width:50px; height:50px; object-fit:cover;" onerror="this.style.display='none'">
                <div>
                    <div style="font-weight:600;">${item.name}</div>
                    <div style="font-size:0.8rem; color:#555;">Size: ${item.size || 'M'} | Qty: ${item.quantity}</div>
                </div>
                <div style="margin-left:auto; font-weight:600;">PHP ${Number(item.price).toFixed(2)}</div>
            </div>
        `);
    });

    const shippingFee = 50.00;
    const grandTotal = subtotal + shippingFee;
    document.getElementById('subtotalAmount').textContent = `PHP ${subtotal.toFixed(2)}`;
    document.getElementById('shippingAmount').textContent = `PHP ${shippingFee.toFixed(2)}`;
    document.getElementById('grandTotalAmount').textContent = `PHP ${grandTotal.toFixed(2)}`;
}

// TRIGGER ON CHECKOUT BUTTON CLICK
function openBillingModalCard() {
    const name = document.getElementById('fullName').value.trim();
    const address = document.getElementById('shippingAddress').value.trim();
    const city = document.getElementById('shippingCity').value.trim();
    const zip = document.getElementById('postalCode').value.trim();
    const checkedRadio = document.querySelector('input[name="paymentType"]:checked');

    if (!name || !address || !city || !zip) {
        alert("Please complete all shipping information fields before making a payment.");
        return;
    }

    const paymentMethod = checkedRadio ? checkedRadio.value : "GCash";
    
    const overlay = document.getElementById('paymentModalOverlay');
    const header = document.getElementById('modalHeaderLayout');
    const fieldsContainer = document.getElementById('modalFieldsContainer');

    fieldsContainer.innerHTML = ""; 

    if (paymentMethod === "GCash") {
        header.innerHTML = `
            <h3 style="margin: 0; color: #007dfe;">GCash Checkout Secure Portal</h3>
            <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #666;">Enter your GCash registered phone account number</p>
        `;
        fieldsContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 5px;">
                <label style="font-size: 0.85rem; font-weight: bold; color: #333;">Mobile Number</label>
                <input type="text" id="modalGcashPhone" placeholder="0917XXXXXXX" maxlength="11" style="padding: 12px; border: 1.5px solid #007dfe; border-radius: 8px; font-size: 1rem;">
            </div>
        `;
    } else if (paymentMethod === "Card") {
        header.innerHTML = `
            <div style="font-size: 2rem; color: #ff6b8b; margin-bottom: 5px;"><i class="fa-solid fa-credit-card"></i></div>
            <h3 style="margin: 0; color: #333;">Secure Credit / Debit Card</h3>
            <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #666;">Your payment credentials are fully encrypted</p>
        `;
        fieldsContainer.innerHTML = `
            <div style="display: flex; flex-direction: column; gap: 5px; width: 100%; box-sizing: border-box;">
                <label style="font-size: 0.85rem; font-weight: bold; color: #333;">Card Number</label>
                <input type="text" id="modalCardNum" placeholder="1234 5678 1234 5678" maxlength="19" style="width: 100%; padding: 12px; border: 1.5px solid #ffc0d0; border-radius: 8px; font-size: 1rem; box-sizing: border-box;">
            </div>
            <div style="display: flex; gap: 15px; width: 100%; box-sizing: border-box;">
                <div style="flex: 1; display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 0.85rem; font-weight: bold; color: #333;">Expiry Date</label>
                    <input type="text" id="modalCardExpiry" placeholder="MM/YY" maxlength="5" style="width: 100%; padding: 12px; border: 1.5px solid #ffc0d0; border-radius: 8px; font-size: 1rem; text-align: center; box-sizing: border-box;">
                </div>
                <div style="flex: 1; display: flex; flex-direction: column; gap: 5px;">
                    <label style="font-size: 0.85rem; font-weight: bold; color: #333;">CVV Security</label>
                    <input type="password" id="modalCardCvv" placeholder="***" maxlength="3" style="width: 100%; padding: 12px; border: 1.5px solid #ffc0d0; border-radius: 8px; font-size: 1rem; text-align: center; box-sizing: border-box;">
                </div>
            </div>
        `;
    } else if (paymentMethod === "COD" || paymentMethod.includes("Cash on Delivery")) {
        header.innerHTML = `
            <div style="font-size: 2.5rem; color: #ff6b8b; margin-bottom: 5px;">🛍️</div>
            <h3 style="margin: 0; color: #333; font-family: 'Poppins', sans-serif;">Cash on Delivery Confirmation</h3>
            <p style="margin: 5px 0 0 0; font-size: 0.85rem; color: #666;">You will pay for your order upon delivery receipt</p>
        `;
        fieldsContainer.innerHTML = `
            <div style="background-color: rgba(255, 192, 208, 0.1); border: 1px dashed #ffc0d0; border-radius: 8px; padding: 15px; text-align: center;">
                <p style="margin: 0; font-size: 0.95rem; color: #524B4B; font-weight: 500; line-height: 1.5;">
                    Please prepare the exact amount statement listed under your grand total summary when our logistics courier updates your transit tracking route.
                </p>
            </div>
        `;
    }

    overlay.style.display = "flex";
}

// VALIDATE INPUTS AND COMMENCE ACTUAL REALTIME DATABASE UPLOAD
async function validateAndFinalizePayment() {
    const checkedRadio = document.querySelector('input[name="paymentType"]:checked');
    const paymentMethod = checkedRadio ? checkedRadio.value : "GCash";
    
    let paymentDetails = "None";

    if (paymentMethod === "GCash") {
        const phoneInput = document.getElementById('modalGcashPhone');
        const phone = phoneInput ? phoneInput.value.trim() : "";
        if (phone.length < 11) {
            alert("Please provide a valid 11-digit GCash mobile tracking route number.");
            return;
        }
        paymentDetails = `GCash Account: ${phone}`;
    } else if (paymentMethod === "Card") {
        const cardNumInput = document.getElementById('modalCardNum');
        const expiryInput = document.getElementById('modalCardExpiry');
        const cvvInput = document.getElementById('modalCardCvv');

        const cardNum = cardNumInput ? cardNumInput.value.trim() : "";
        const expiry = expiryInput ? expiryInput.value.trim() : "";
        const cvv = cvvInput ? cvvInput.value.trim() : "";

        if (cardNum.length < 15 || expiry.length < 5 || cvv.length < 3) {
            alert("Card Authorization Error: Please fill complete credential sets.");
            return;
        }
        paymentDetails = `Card Ends In: ************${cardNum.slice(-4)}`;
    } else {
        paymentDetails = "Collect payment at doorstep";
    }

    const modalOverlay = document.getElementById('paymentModalOverlay');
    if (modalOverlay) modalOverlay.style.display = "none";

    const name = document.getElementById('fullName').value.trim();
    const email = activeUser ? activeUser.email : document.getElementById('emailAddress').value.trim();
    const address = document.getElementById('shippingAddress').value.trim();
    const city = document.getElementById('shippingCity').value.trim();
    const zip = document.getElementById('postalCode').value.trim();

    const currentAddressPayload = { street: address, city: city, zipCode: zip };
    if (activeUser) {
        const exists = userAddressesList.some(a => 
            a.street.toLowerCase() === address.toLowerCase() && 
            a.city.toLowerCase() === city.toLowerCase()
        );
        
        if (!exists) {
            userAddressesList.push(currentAddressPayload);
        }

        await update(ref(database, `users/${activeUser.uid}`), {
            name: name,
            addresses: userAddressesList,
            address: address, 
            city: city, 
            zip: zip 
        });
    }

    const orderPayload = {
        userId: activeUser ? activeUser.uid : "guest_checkout",
        customerName: name,
        customerEmail: email,
        shippingAddress: currentAddressPayload,
        paymentMethod: paymentMethod,
        paymentDetails: paymentDetails,
        items: cartItems,
        orderTotal: document.getElementById('grandTotalAmount').textContent,
        orderStatus: "In Transit",
        timestamp: new Date().toISOString()
    };

    try {
        const newOrderRef = push(ref(database, 'orders'));
        await set(newOrderRef, orderPayload);
        alert(" Order placed successfully! Check your transaction data inside your profile.");
        localStorage.removeItem('cart');
        window.location.href = "profile.html"; 
    } catch (error) {
        alert("Failed to submit order entry: " + error.message);
    }
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        activeUser = user;
        localStorage.setItem('isLoggedIn', 'true');
        
        const emailField = document.getElementById('emailAddress');
        if (emailField) {
            emailField.value = user.email;
            emailField.disabled = true;
            emailField.style.background = "#f4f4f4";
            emailField.style.cursor = "not-allowed";
        }
        
        syncLiveProfileAndAddresses(user.uid);
    } else {
        localStorage.setItem('isLoggedIn', 'false');
        window.location.replace("login.html");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    loadCartSummary();

    document.getElementById('placeOrderBtn')?.addEventListener('click', openBillingModalCard);
    
    document.getElementById('closePaymentModalBtn')?.addEventListener('click', () => {
        document.getElementById('paymentModalOverlay').style.display = "none";
    });
    
    document.getElementById('confirmPaymentBtn')?.addEventListener('click', validateAndFinalizePayment);
});

document.addEventListener("DOMContentLoaded", () => {
    const paymentRadios = document.querySelectorAll('input[name="paymentType"]');
    
    function updatePaymentOptionBorders() {
        paymentRadios.forEach(radio => {
            const optionWrapper = radio.closest('.payment-option-wrapper') || radio.parentElement;
            
            if (radio.checked) {
                optionWrapper.style.borderColor = "#f6a9bc";
                optionWrapper.style.backgroundColor = "rgba(255, 192, 208, 0.05)"; 
            } else {
                optionWrapper.style.borderColor = "#e4e4e4"; 
                optionWrapper.style.backgroundColor = "transparent";
            }
        });
    }

    updatePaymentOptionBorders();

    paymentRadios.forEach(radio => {
        radio.addEventListener('change', updatePaymentOptionBorders);
    });
});