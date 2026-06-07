document.addEventListener('DOMContentLoaded', () => {
    
    renderCart();

    const cartContainer = document.querySelector('.cart-items');
    // FOR REMOVING
    if (cartContainer) {
        cartContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('remove-btn')) {
                const index = e.target.dataset.index;
                removeItem(index);
            }
        });
    // CHANGING NG QUANTITY
        cartContainer.addEventListener('change', (e) => {
            if (e.target.tagName === 'SELECT') {
                const index = e.target.dataset.index;
                const newQty = parseInt(e.target.value);
                updateQuantity(index, newQty);
            }
        });
    }
    // CHECKOUT DIRECT TO CHECKOUT.HTML
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const cart = getCart();
            if (cart.length === 0) {
                alert("Your cart is currently empty! Add items before checking out. ✨");
                return;
            }
            window.location.href = "checkout.html";
        });
    }
});
// DATABASE RENDERING
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function renderCart() {
    const cart = getCart();
    const container = document.querySelector('.cart-items');
    
    if (!container) return;

    if (cart.length === 0) {
        container.innerHTML = "<p style='padding: 20px;'>Your cart is currently empty.</p>";
        updateSummary(0, 0);
        return;
    }

    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="item-img">
                <img src="${item.img}" alt="${item.name}">
            </div>
            <div class="item-details">
                <div class="item-header">
                    <h2>${item.name}</h2>
                    <button class="remove-btn" data-index="${index}">&times;</button>
                </div>
                <p>Color: ${item.color || 'Default'}</p>
                <p>Size: ${item.size || 'Standard'}</p>
                <p class="item-price">PHP ${Number(item.price).toLocaleString(undefined, {minimumFractionDigits: 2})}</p>
                
                <div class="item-footer">
                    <div class="quantity-selector">
                        <label>QUANTITY</label>
                        <select data-index="${index}">
                            ${[1,2,3,4,5,6,7,8,9,10].map(num => `
                                <option value="${num}" ${item.quantity == num ? 'selected' : ''}>${num}</option>
                            `).join('')}
                        </select>
                    </div>
                    <p class="subtotal-text">SUBTOTAL: <span>PHP ${(item.price * item.quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}</span></p>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity)), 0);
    updateSummary(total, cart.length);
}

function updateQuantity(index, qty) {
    let cart = getCart();
    cart[index].quantity = qty;
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function removeItem(index) {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function updateSummary(total, count = 0) {
    const vat = total * 0.12; 
    
    // Update Title
    const summaryTitle = document.querySelector('.summary-card h3');
    if (summaryTitle) {
        summaryTitle.innerText = `ORDER SUMMARY | ${count} ITEM(S)`;
    }

    const subtotalEl = document.querySelector('.subtotal-value');
    const totalEl = document.querySelector('.total-value');
    const vatEl = document.querySelector('.vat-note');

    if (subtotalEl) subtotalEl.innerText = `PHP ${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    if (totalEl) totalEl.innerText = `PHP ${total.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    
    if (vatEl) {
        vatEl.innerText = `VAT included: PHP ${vat.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
    }
}