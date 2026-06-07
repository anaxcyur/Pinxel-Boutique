const allProducts = [
    // TOPS
    { name: "Babydoll top", category: "Tops", color: "Pink", price: 1199.00, img: "tops/1.png" },
    { name: "Puff Sleeve Doll Top", category: "Tops",color: "Pink",  price: 959.00, img: "tops/2.png" },
    { name: "Sando Hidden Bra", category: "Tops", color: "Red", price: 469.00, img: "tops/3.png" },
    { name: "Berry Corset Cotton Top", category: "Tops", color: "White", price: 569.00, img: "tops/4.png" },
    { name: "Red Fitted Tube Top", category: "Tops", color: "Red", price: 359.00, img: "tops/5.png" },
    { name: "Blue Black Striped Office Style", category: "Tops", color: "Blue", price: 999.00, img: "tops/6.png" },
    { name: "Jersey Mesh Fitted Black", category: "Tops", color: "Black", price: 799.00, img: "tops/7.png" },
    { name: "White Star Mesh Jersey Crop Top", category: "Tops", color: "White", price: 779.00, img: "tops/8.png" },
    { name: "Pink Eagle Mesh Jersey Crop Top", category: "Tops", color: "Pink", price: 789.00, img: "tops/9.png" },
    { name: "Bee Colar Top", category: "Tops", color: "Yellow", price: 559.00, img: "tops/10.png" },
    { name: "Black Pink Polo Pearl Top", category: "Tops", color: "Pink", price: 900.00, img: "tops/11.png" },
    { name: "Pink Ribbon Polo", category: "Tops", color: "Pink", price: 599.00, img: "tops/12.png" },  
    { name: "Ribbed Pink Tank Top", category: "Tops", color: "Pink", price: 850.00, img: "tops/13.png" },
    { name: "Pink Stars Tank Top", category: "Tops", color: "Pink", price: 699.00, img: "tops/14.png" },
    { name: "Pink Statement Tank Top", category: "Tops", color: "Pink", price: 799.00, img: "tops/15.png" },
    { name: "Star Nips Fitted Top", category: "Tops", color: "Blue", price: 599.00, img: "tops/16.png" },
    { name: "Brown Characters Fitted Top", category: "Tops", color: "Brown", price: 499.00, img: "tops/17.png" },
    { name: "LA/SEOUL Red Fitted Top", category: "Tops", color: "Red", price: 599.00, img: "tops/18.png" },
    { name: "Kawaii Girl Pink Fitted Top", category: "Tops", color: "Pink", price: 689.00, img: "tops/19.png" },
    { name: "Yellow Statement Shirt", category: "Tops", color: "Yellow", price: 499.00, img: "tops/20.png" },
    { name: "Furry Pink Tank Top", category: "Tops", color: "Pink", price: 1499.00, img: "sources/arr1_1.png" },
    { name: "Pink Tube With Neck Wrap", category: "Tops", color: "Pink", price: 1499.00, img: "sources/arr2_2.png" },
    { name: "White Tank Top", category: "Tops", color: "White", price: 1099.00, img: "sources/arr3_3.png" },
    { name: "Furr Pink Cardigan", category: "Tops", color: "Pink", price: 1199.00, img: "sources/cardigan1.png" },
    // SHORTS/SKIRTS
    { name: "Denim Star Shorts", category: "Shorts/Skirts", color: "Blue", price: 399.00, img: "shorts-skirts/1.png" },
    { name: "Denim Star Skirt", category: "Shorts/Skirts", color: "Blue", price: 599.00, img: "shorts-skirts/2.png" },
    { name: "Two Colored Star Denim Skirt", category: "Shorts/Skirts", color: "Blue", price: 699.00, img: "shorts-skirts/3.png" },
    { name: "Pink Denim Star Shorts", category: "Shorts/Skirts", color: "Pink", price: 699.00, img: "shorts-skirts/4.png" },
    { name: "Camo Pink Shorts", category: "Shorts/Skirts", color: "Pink", price: 899.00, img: "shorts-skirts/5.png" },
    { name: "Ice Cream Toned Knitted Shorts", category: "Shorts/Skirts", color: "Brown", price: 899.00, img: "shorts-skirts/6.png" },
    { name: "Dangled Heart Rhinestoned Heart Black Denim Shorts", category: "Shorts/Skirts", color: "Black", price: 999.00, img: "shorts-skirts/7.png" },
    { name: "Tiger Ruffled Black Pink Skirt", category: "Shorts/Skirts", color: "Black", price: 999.00, img: "shorts-skirts/8.png" },
    { name: "Ruffled Pink Skirt", category: "Shorts/Skirts", color: "Pink", price: 999.00, img: "shorts-skirts/9.png" },
    { name: "Tiger Print Pink Skirt", category: "Shorts/Skirts", color: "Pink", price: 699.00, img: "shorts-skirts/10.png" },
    { name: "Floral Pink Brown Summer Shorts", category: "Shorts/Skirts", color: "Brown", price: 659.00, img: "shorts-skirts/11.png" },
    { name: "Summer Blue Hawaii Shorts", category: "Shorts/Skirts", color: "Blue", price: 499.00, img: "shorts-skirts/12.png" },
    { name: "Cammo Gun Brown Shorts", category: "Shorts/Skirts", color: "Brown", price: 359.00, img: "shorts-skirts/13.png" },
    { name: "Dangled Tail Pink Cammo Skirt", category: "Shorts/Skirts", color: "Brown", price: 1099.00, img: "shorts-skirts/14.png" },
    { name: "F*CK Statement Skirt", category: "Shorts/Skirts", color: "Black", price: 799.00, img: "shorts-skirts/15.png" },
    { name: "Race Style Denim Skirt", category: "Shorts/Skirts", color: "Black", price: 999.00, img: "shorts-skirts/16.png" },
    { name: "Big Star Belt Denim Skirt", category: "Shorts/Skirts", color: "Black", price: 649.00, img: "shorts-skirts/17.png" },
    { name: "Cross Embroided Denim Shorts", category: "Shorts/Skirts", color: "Black", price: 699.00, img: "shorts-skirts/18.png" },
    { name: "Fallen Angel Denim Shorts", category: "Shorts/Skirts", color: "Blue", price: 699.00, img: "shorts-skirts/19.png" },
    { name: "Cross Denim Shorts", category: "Shorts/Skirts", color: "Blue", price: 949.00, img: "shorts-skirts/20.png" },
    // DRESSES
    { name: "Balloon Halter Pink Dress", category: "Dresses", color: "Pink", price: 1999.00, img: "dresses/1.png" },
    { name: "Layered Pink Ribbon Dress", category: "Dresses", color: "Pink", price: 1599.00, img: "dresses/2.png" },
    { name: "Black Pink Bow Dress", category: "Dresses", color: "Black", price: 1699.00, img: "dresses/3.png" },
    { name: "Double Bow  Gingham Dress", category: "Dresses", color: "Brown", price: 1699.00, img: "dresses/4.png" },
    { name: "Lace Puff Black Dress", category: "Dresses", color: "Black", price: 1899.00, img: "dresses/5.png" },
    { name: "Button Down Striped Blue Puff Dress", category: "Dresses", color: "Blue", price: 1899.00, img: "dresses/6.png" },
    { name: "Off Shoulder Blue/Black Dress", category: "Dresses", color: "Black", price: 1999.00, img: "dresses/7.png" },
    { name: "Tie Up Gingham Black Dress", category: "Dresses", color: "Black", price: 1989.00, img: "dresses/8.png" },
    { name: "Tie Up Stripe Black Dress", category: "Dresses", color: "Black", price: 1999.00, img: "dresses/9.png" },
    { name: "Middle Rose Collar Dress", category: "Dresses", color: "Brown", price: 1699.00, img: "dresses/10.png" },
    { name: "Red Gingham Ribbon Dress", category: "Dresses", color: "Red", price: 1659.00, img: "dresses/11.png" },
    { name: "LA Car Brown Fitted Dress", category: "Dresses", color: "Brown", price: 1499.00, img: "dresses/12.png" },
    { name: "Cherries Laced Fitted Dress", category: "Dresses", color: "Red", price: 1359.00, img: "dresses/13.png" },
    { name: "Guaya Brasil Fitted Dress", category: "Dresses", color: "Yellow", price: 1099.00, img: "dresses/14.png" },
    { name: "Pink Racing Fitted Dress", category: "Dresses", color: "Pink", price: 2099.00, img: "dresses/15.png" },
    { name: "Cow Hooded Pink Fitted Dress", category: "Dresses", color: "Pink", price: 1999.00, img: "dresses/16.png" },
    { name: "Black Pink Tennis Dress", category: "Dresses", color: "Black", price: 1649.00, img: "dresses/17.png" },
    { name: "Addidas Petal Tennis Dress", category: "Dresses", color: "Pink", price: 1699.00, img: "dresses/18.png" },
    { name: "Polka Black Ruffle Dress", category: "Dresses", color: "Black", price: 1699.00, img: "dresses/19.png" },
    { name: "Long Sleeve Black Colar Dress", category: "Dresses", color: "Black", price: 999.00, img: "dresses/20.png" },
    // SHOES
    { name: "Light Pink White Star Rubber Shoes", category: "Shoes", color: "White", price: 2199.00, img: "shoes/1.png" },
    { name: "White Star Combat Boots", category: "Shoes", color: "White", price: 3599.00, img: "shoes/2.png" },
    { name: "Pink Ribbon Combat Boots", category: "Shoes", color: "Pink", price: 2699.00, img: "shoes/3.png" },
    { name: "Pink Platform Sandals", category: "Shoes", color: "Pink", price: 1699.00, img: "shoes/4.png" },
    { name: "Pink Gingham Heart Platform Sandals", category: "Shoes", color: "Pink", price: 1899.00, img: "shoes/5.png" },
    { name: "Blue Denim Platform Sandals", category: "Shoes", color: "Blue", price: 1999.00, img: "shoes/6.png" },
    { name: "Two Toned Blue Denim Platform Sandals", category: "Shoes", color: "Blue", price: 2199.00, img: "shoes/7.png" },
    { name: "Blue Denim Platform Wedge", category: "Shoes", color: "Blue", price: 1599.00, img: "shoes/8.png" },
    { name: "Fairy Lace Green Wedge Sandals", category: "Shoes", color: "Green", price: 2999.00, img: "shoes/9.png" },
    { name: "Fairy Lace Orange High Heels", category: "Shoes", color: "Orange", price: 1699.00, img: "shoes/10.png" },
    { name: "Sunflower Red Gingham High Heels", category: "Shoes", color: "Red", price: 1659.00, img: "shoes/11.png" },
    { name: "Heart Gingham Yellow High Heels", category: "Shoes", color: "Yellow", price: 1999.00, img: "shoes/12.png" },
    { name: "Flower Black High Heels", category: "Shoes", color: "Black", price: 1359.00, img: "shoes/13.png" },
    { name: "Black Checkered High Heels", category: "Shoes", color: "Black", price: 1999.00, img: "shoes/14.png" },
    { name: "Zebra Print High Heels", category: "Shoes", color: "Black", price: 2099.00, img: "shoes/15.png" },
    { name: "Mosaic High Heels", category: "Shoes", color: "Blue", price: 1999.00, img: "shoes/16.png" },
    { name: "Flower Print Green High Boots", category: "Shoes", color: "Green", price: 3649.00, img: "shoes/17.png" },
    { name: "Starry Night High Heels Boots", category: "Shoes", color: "Blue", price: 2699.00, img: "shoes/18.png" },
    { name: "Fluffy Pink Slippers", category: "Shoes", color: "Pink", price: 699.00, img: "shoes/19.png" },
    { name: "White Bunny Slippers", category: "Shoes", color: "White", price: 699.00, img: "shoes/20.png" }
];

// --- MAIN PRODUCT DISPLAY LOGIC ---
let currentProduct = null;

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productNameFromUrl = params.get('name');

    currentProduct = allProducts.find(p => p.name === productNameFromUrl);

    if (currentProduct) {
        document.getElementById('product-name').innerText = currentProduct.name;
        document.getElementById('product-price').innerText = `₱ ${currentProduct.price.toFixed(2)}`;
        document.getElementById('main-product-img').src = currentProduct.img;

        const colorNameDisplay = document.getElementById('product-color-name');
        if (colorNameDisplay) colorNameDisplay.innerText = currentProduct.color;

        const colorBox = document.getElementById('product-color-box');
        if (colorBox) {
            colorBox.style.backgroundColor = currentProduct.color;
            if (currentProduct.color.toLowerCase() === 'white') {
                colorBox.style.border = "1px solid #ddd";
            } else {
                colorBox.style.border = "none";
            }
        }
    } else {
        document.getElementById('product-name').innerText = productNameFromUrl || "Product Name";
        document.getElementById('product-price').innerText = params.get('price') ? `₱ ${Number(params.get('price')).toFixed(2)}` : "₱ 0.00";
        document.getElementById('main-product-img').src = params.get('image') || "placeholder.jpg";
    }

    // --- SIZE GENERATION ---
    const sizeContainer = document.getElementById('size-options-container');

    if (currentProduct && sizeContainer) {
        let sizes = [];

        if (currentProduct.category === "Shoes") {
            sizes = ['35', '36', '37', '38', '39'];
        } else {
            sizes = ['XS', 'S', 'M', 'L', 'XL'];
        }

        sizeContainer.innerHTML = sizes.map(size => `
            <button class="size-btn" onclick="selectSize(this)">${size}</button>
        `).join('');
    }

    // TOGGLE SELECTION OR UNCLICK LOGIC
    window.selectSize = (btn) => {
        if (btn.classList.contains('active')) {
            btn.classList.remove('active');
        } else {
            document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        }
    };

    const recGrid = document.getElementById('recommendations-grid');

    function loadRecommendations() {
        if (!recGrid || allProducts.length === 0) return;

        const newTops = allProducts.filter(p => p.category === "Tops").slice(-4);
        const newShortsSkirts = allProducts.filter(p => p.category === "Shorts/Skirts").slice(-4);
        const newDresses = allProducts.filter(p => p.category === "Dresses").slice(-4);
        const newShoes = allProducts.filter(p => p.category === "Shoes").slice(-4);
        const dynamicArrivalsList = [...newTops, ...newShortsSkirts, ...newDresses, ...newShoes];

        const activeName = currentProduct ? currentProduct.name : productNameFromUrl;
        const filteredArrivals = dynamicArrivalsList.filter(item => item.name !== activeName);
        const generalPool = allProducts.filter(item => item.name !== activeName);

        let finalRecommendations = [...filteredArrivals];
        
        const shuffledGeneral = generalPool.sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < shuffledGeneral.length; i++) {
            if (finalRecommendations.length >= 10) break;
            if (!finalRecommendations.some(existing => existing.name === shuffledGeneral[i].name)) {
                finalRecommendations.push(shuffledGeneral[i]);
            }
        }

        const selectedRecommendations = finalRecommendations.slice(0, 10);

        recGrid.innerHTML = selectedRecommendations.map(item => `
            <div class="product-card" onclick="location.href='shop-detail.html?name=${encodeURIComponent(item.name)}&price=${item.price}&image=${encodeURIComponent(item.img)}'">
                <div class="image-container">
                    <img src="${item.img}" alt="${item.name}">
                </div>
                <div class="product-info">
                    <span class="category-label">${item.category}</span>
                    <h3>${item.name}</h3>
                    <div class="price-row">
                        <span class="price">₱ ${item.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    loadRecommendations();

    //SCROLL BUTTONS
    const leftBtn = document.querySelector('.scroll-btn.left');
    const rightBtn = document.querySelector('.scroll-btn.right');

    if (rightBtn) {
        rightBtn.onclick = () => {
            recGrid.scrollBy({ left: 350, behavior: 'smooth' });
        };
    }

    if (leftBtn) {
        leftBtn.onclick = () => {
            recGrid.scrollBy({ left: -350, behavior: 'smooth' });
        };
    }
});

//  POPUP NOTIFICATION 
function showToast(message, destination = null) {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    
    let actionBtnHtml = '';
    if (destination === 'cart') {
        actionBtnHtml = `<button class="toast-action-btn" onclick="window.location.href='cart.html'">View Cart</button>`;
    } else if (destination === 'wishlist') {
        actionBtnHtml = `<button class="toast-action-btn" onclick="window.location.href='wishlist.html'">View Wishlist</button>`;
    }

    toast.innerHTML = `
        <span class="toast-message">${message}</span>
        ${actionBtnHtml}
    `;

    container.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 50);
    setTimeout(() => {
        toast.classList.remove('show');
        toast.style.transform = 'translateX(50px)';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

//ADD TO CART FUNCTIONALITY
document.getElementById('btn-add-cart').addEventListener('click', () => {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        alert("Please log in to your account first before adding items to your cart!");
        window.location.href = `login.html?redirectTo=${encodeURIComponent(window.location.pathname + window.location.search)}`;
        return;
    }

    const selectedSize = document.querySelector('.size-btn.active')?.innerText;
    
    if (!selectedSize) {
        showToast("Please select a size first!");
        return;
    }

    if (!currentProduct) {
        showToast("Product details missing.");
        return;
    }

    const cartItem = {
        name: currentProduct.name.trim(), 
        price: currentProduct.price,
        img: currentProduct.img,
        color: currentProduct.color,
        size: selectedSize,
        quantity: 1
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
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
    showToast("Added to cart!", "cart");
});

const heartIcon = document.querySelector('.heart-icon-img');

if (heartIcon) {
    heartIcon.addEventListener('click', () => {
        if (localStorage.getItem('isLoggedIn') !== 'true') {
            alert("Please log in to your account first before saving favorites!");
            window.location.href = `login.html?redirectTo=${encodeURIComponent(window.location.pathname + window.location.search)}`;
            return;
        }

        const selectedSize = document.querySelector('.size-btn.active')?.innerText;
    
        if (!selectedSize) {
            showToast("Please select a size first!");
            return;
        }

        if (!currentProduct) {
            showToast("Product details missing.");
            return;
        }

        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const existingIndex = wishlist.findIndex(item => item.name === currentProduct.name);

        if (existingIndex > -1) {
            wishlist.splice(existingIndex, 1);
            heartIcon.src = "sources/heart-colored.png"; 
            heartIcon.classList.remove('active');
            showToast("Removed from wishlist");
        } else {
            const wishItem = {
                name: currentProduct.name.trim(),
                price: currentProduct.price,
                img: currentProduct.img,
                color: currentProduct.color,
                size: selectedSize
            };
            
            wishlist.push(wishItem);
            heartIcon.src = "sources/heart-colored.png";
            heartIcon.classList.add('active');
            showToast("Added to wishlist!", "wishlist");
        }

        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    });
}