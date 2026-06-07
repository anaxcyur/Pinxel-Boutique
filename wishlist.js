document.addEventListener('DOMContentLoaded', () => {
    renderWishlist();
});

function getWishlist() {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
}

function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function renderWishlist() {
    const wishlist = getWishlist();
    const container = document.getElementById('wishlist-items-container');
    const titleCount = document.getElementById('wishlist-count-title');

    if (!container) return; 

    if (titleCount) {
        titleCount.innerText = `WISHLIST ITEMS | ${wishlist.length} ITEM(S)`;
    }

    if (wishlist.length === 0) {
        container.innerHTML = "<p style='padding: 20px;'>Your wishlist is currently empty.</p>";
        return;
    }

    container.innerHTML = wishlist.map((item, index) => `
        <div class="wishlist-item" style="position: relative; z-index: 1;">
            <div class="item-img-wrapper">
                <img src="sources/heart-colored.png" class="corner-heart-icon" alt="Favorited" onclick="removeFromWishlist(${index})">
                <img src="${item.img}" class="item-main-img" alt="${item.name}">
            </div>
            <div class="item-details">
                <div class="item-header">
                    <h2>${item.name}</h2>
                    <button class="remove-btn" onclick="removeFromWishlist(${index})">&times;</button>
                </div>
                <p class="attribute">Color: ${item.color || 'Default'}</p>
                <p class="attribute">Size: ${item.size || 'Standard'}</p>
                <p class="item-price">PHP ${Number(item.price).toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                
                <div class="item-footer" style="position: relative; z-index: 999;">
                    <button class="btn-add-bag-from-wish" onclick="moveToCart(${index})" style="position: relative; z-index: 1000; cursor: pointer;">
                        ADD TO SHOPPING BAG
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function removeFromWishlist(index) {
    let wishlist = getWishlist();
    wishlist.splice(index, 1);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    renderWishlist(); 
}

function moveToCart(index) {
    let wishlist = getWishlist();
    const targetItem = wishlist[index];
    if (!targetItem) return;

    const modalOverlay = document.getElementById('cute-confirm-modal');
    const modalMessage = document.getElementById('cute-modal-message');
    const modalTitle = document.getElementById('cute-modal-title');
    const btnYes = document.getElementById('cute-modal-yes');
    const btnNo = document.getElementById('cute-modal-no');

    if (!modalOverlay) return;

    if (btnYes) btnYes.innerText = "Add to Cart";
    if (btnNo) btnNo.innerText = "No, wait";

    if (modalTitle) {
        modalTitle.innerText = "Add to Cart?";
    }
    if (modalMessage) {
        modalMessage.innerText = `Love this item? Click below to add "${targetItem.name}" to your cart`;
    }

    modalOverlay.classList.add('show');

    const closeOverlay = () => modalOverlay.classList.remove('show');
    
    if (btnNo) {
        btnNo.onclick = () => {
            closeOverlay(); 
        };
    }

    if (btnYes) {
        btnYes.onclick = () => {
            closeOverlay(); 
            
            let cart = getCart();
            const cartItem = {
                name: targetItem.name.trim(),
                price: Number(targetItem.price),
                img: targetItem.img,
                color: targetItem.color,
                size: targetItem.size,
                quantity: 1
            };

            const existingIndex = cart.findIndex(item => 
                item.name === cartItem.name && 
                item.size === cartItem.size
            );

            if (existingIndex > -1) {
                cart[existingIndex].quantity += 1;
            } else {
                cart.push(cartItem);
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            wishlist.splice(index, 1);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            
            renderWishlist();
            
            setTimeout(() => {
                if (modalTitle) modalTitle.innerText = "Added to Cart!";
                if (modalMessage) modalMessage.innerText = "Item added. Would you like to view your shopping bag now?";
                if (btnYes) btnYes.innerText = "Go to Cart";
                if (btnNo) btnNo.innerText = "Keep Looking";
                
                modalOverlay.classList.add('show');
                
                if (btnNo) btnNo.onclick = () => closeOverlay();
                if (btnYes) {
                    btnYes.onclick = () => {
                        window.location.href = 'cart.html';
                    };
                }
            }, 400);
        };
    }
}