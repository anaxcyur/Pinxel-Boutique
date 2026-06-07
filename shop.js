const products = [
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

const featuredNewItems = [
    "Light Pink White Star Rubber Shoes",
    "Babydoll top",
    "Furry Pink Tank Top",
    "Pink Tube With Neck Wrap",
    "White Tank Top",
    "Furr Pink Cardigan"
];

function getDefaultArrangement() {
    const newItems = products.filter(p => featuredNewItems.includes(p.name));
    const standardItems = products.filter(p => !featuredNewItems.includes(p.name));

    newItems.sort((a, b) => featuredNewItems.indexOf(a.name) - featuredNewItems.indexOf(b.name));
    standardItems.sort((a, b) => a.name.localeCompare(b.name));

    return [...newItems, ...standardItems];
}

let filteredList = getDefaultArrangement();
let temporaryFilters = {
    categories: [],
    colors: [],
    sort: 'default'
};
const itemsPerPage = 20;
let currentPage = 1;

function toggleFilterMenu() {
    const sidebar = document.getElementById('filter-sidebar');
    if (sidebar) sidebar.classList.toggle('active');
}

function showSubMenu(type) {
    const title = document.getElementById('sub-menu-title');
    const list = document.getElementById('sub-menu-list');
    if (!list) return;
    list.innerHTML = ""; 

    if (type === 'categories') {
        if (title) title.innerText = "Categories";
        ["Tops", "Shorts/Skirts", "Dresses", "Shoes"].forEach(item => {
            const isChecked = temporaryFilters.categories.includes(item) ? "checked" : "";
            list.innerHTML += `
                <label class="filter-item">
                    <input type="checkbox" value="${item}" ${isChecked} onchange="updateTempFilter('categories', '${item}')">
                    ${item}
                </label>`;
        });
    } else if (type === 'colors') {
        if (title) title.innerText = "Colors";
        ["Pink", "White", "Black", "Blue", "Brown", "Red", "Yellow", "Green", "Orange"].forEach(item => {
            const isChecked = temporaryFilters.colors.includes(item) ? "checked" : "";
            list.innerHTML += `
                <label class="filter-item">
                    <input type="checkbox" ${isChecked} onchange="updateTempFilter('colors', '${item}')">
                    ${item}
                </label>`;
        });
    } else if (type === 'sort') {
        if (title) title.innerText = "Sort";
        const sorts = [
            { id: 'default', label: 'Default (New First)' },
            { id: 'az', label: 'Alphabetical (A-Z)' },
            { id: 'za', label: 'Alphabetical (Z-A)' },
            { id: 'priceLow', label: 'Price (Low to High)' },
            { id: 'priceHigh', label: 'Price (High to Low)' },
            { id: 'newArrival', label: 'New Arrivals' }
        ];
        sorts.forEach(s => {
            const isChecked = temporaryFilters.sort === s.id ? "checked" : "";
            list.innerHTML += `
                <label class="filter-item">
                    <input type="radio" name="sort-group" ${isChecked} onchange="updateTempFilter('sort', '${s.id}')">
                    ${s.label}
                </label>`;
        });
    }
}

function updateTempFilter(type, value) {
    if (type === 'sort') {
        temporaryFilters.sort = value;
        return;
    }

    const index = temporaryFilters[type].indexOf(value);
    if (index > -1) {
        temporaryFilters[type].splice(index, 1);
    } else {
        temporaryFilters[type].push(value);
    }
}

function applyFilters(shouldToggleSidebar = true) {
    let results = [...products];

    if (temporaryFilters.sort === 'newArrival') {
        results = results.filter(p => featuredNewItems.includes(p.name));
    }

    if (temporaryFilters.categories.length > 0) {
        results = results.filter(p => temporaryFilters.categories.includes(p.category));
    }

    if (temporaryFilters.colors.length > 0) {
        results = results.filter(p => temporaryFilters.colors.includes(p.color));
    }

    if (temporaryFilters.sort === 'default') {
        const newPart = results.filter(p => featuredNewItems.includes(p.name))
                               .sort((a, b) => featuredNewItems.indexOf(a.name) - featuredNewItems.indexOf(b.name));
        const regularPart = results.filter(p => !featuredNewItems.includes(p.name))
                                   .sort((a, b) => a.name.localeCompare(b.name));
        results = [...newPart, ...regularPart];
    } else {
        if (temporaryFilters.sort === 'az') results.sort((a, b) => a.name.localeCompare(b.name));
        if (temporaryFilters.sort === 'za') results.sort((a, b) => b.name.localeCompare(a.name));
        if (temporaryFilters.sort === 'priceLow') results.sort((a, b) => a.price - b.price);
        if (temporaryFilters.sort === 'priceHigh') results.sort((a, b) => b.price - a.price);
    }

    filteredList = results;
    currentPage = 1;
    displayProducts(filteredList, currentPage);

    const targetCategory = temporaryFilters.categories.length === 1 ? temporaryFilters.categories[0] : 'ALL PRODUCTS';
    updateBannerHeading(targetCategory);
    
    if (shouldToggleSidebar) {
        toggleFilterMenu();
    }
}

function clearFilters() {
    temporaryFilters = { categories: [], colors: [], sort: 'default' };
    filteredList = getDefaultArrangement();
    currentPage = 1;
    displayProducts(filteredList, currentPage);
    showSubMenu('categories');
    updateBannerHeading('ALL PRODUCTS');

    const sidebar = document.getElementById('filter-sidebar');
    if (sidebar) {
        sidebar.classList.remove('active');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category'); 
    const sortParam = urlParams.get('sort');
    
    if (category) {
        if (!temporaryFilters.categories.includes(category)) {
            temporaryFilters.categories.push(category);
        }
        showSubMenu('categories');
        applyFilters(false); 
    } else if (sortParam === 'newArrival') {
        temporaryFilters.sort = 'newArrival';
        applyFilters(false); 
    } else {
        displayProducts(filteredList, currentPage);
        showSubMenu('categories');
    }

    displayNewArrivals();
});

function displayProducts(productsToProject, page = 1) {
    const grid = document.querySelector('.products-grid');
    if (!grid) return;
    grid.innerHTML = ""; 

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedItems = productsToProject.slice(startIndex, endIndex);

    if (paginatedItems.length === 0) {
        grid.innerHTML = "<p style='grid-column: 1/-1; text-align: center; font-family: sans-serif;'>No products found matching these filters.</p>";
    }

    paginatedItems.forEach(product => {
        grid.innerHTML += createProductCard(product);
    });
    renderPagination(productsToProject.length);
}

function renderPagination(totalItems) {
    const container = document.getElementById('pagination-numbers');
    if (!container) return;
    container.innerHTML = "";

    const pageCount = Math.ceil(totalItems / itemsPerPage);
    if (pageCount <= 1) return;

    const prevBtn = document.createElement('button');
    prevBtn.innerHTML = "&lt;";
    prevBtn.className = 'page-btn arrow';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        currentPage--;
        displayProducts(filteredList, currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    container.appendChild(prevBtn);

    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(pageCount, startPage + 2);
    if (endPage - startPage < 2) startPage = Math.max(1, endPage - 2);

    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.innerText = i;
        pageBtn.className = (i === currentPage) ? 'page-btn active' : 'page-btn';
        pageBtn.onclick = () => {
            currentPage = i;
            displayProducts(filteredList, currentPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        container.appendChild(pageBtn);
    }

    const nextBtn = document.createElement('button');
    nextBtn.innerHTML = "&gt;";
    nextBtn.className = 'page-btn arrow';
    nextBtn.disabled = currentPage === pageCount;
    nextBtn.onclick = () => {
        currentPage++;
        displayProducts(filteredList, currentPage);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    container.appendChild(nextBtn);
}

function updateBannerHeading(categoryName) {
    const bannerTitle = document.getElementById('dynamic-banner-title');
    if (!bannerTitle) return;

    if (!categoryName || categoryName.trim() === '' || categoryName.toLowerCase() === 'all') {
        bannerTitle.textContent = 'ALL PRODUCTS';
    } else {
        bannerTitle.textContent = categoryName.toUpperCase();
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const activeCategory = urlParams.get('category');
    updateBannerHeading(activeCategory);
});
function displayNewArrivals() {
    const arrivalsGrid = document.querySelector('.new-arrivals-grid');
    if (!arrivalsGrid) return; 
    
    arrivalsGrid.innerHTML = "";

    const newTops = products.filter(p => p.category === "Tops").slice(-4);
    const newShortsSkirts = products.filter(p => p.category === "Shorts/Skirts").slice(-4);
    const newDresses = products.filter(p => p.category === "Dresses").slice(-4);
    const newShoes = products.filter(p => p.category === "Shoes").slice(-4);

    const newArrivalsList = [...newTops, ...newShortsSkirts, ...newDresses, ...newShoes];

    newArrivalsList.forEach(product => {
        arrivalsGrid.innerHTML += createProductCard(product);
    });
}

function createProductCard(product) {
    const isNewArrival = featuredNewItems.includes(product.name);
    const arrivalBadge = isNewArrival ? `<span class="badge new-arrival-badge">New</span>` : '';
    
    const sizeString = product.sizes ? product.sizes.join(',') : '';

    return `
        <div class="product-card" onclick="goToDetail('${product.name}', '${product.price}', '${product.img}', '${sizeString}')">
            <div class="image-container">
                ${arrivalBadge}
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="category-label">${product.category}</span>
                <h3>${product.name}</h3>
                <div class="price-row">
                    <span class="price">₱ ${Number(product.price).toFixed(2)}</span>
                </div>
            </div>
        </div>
    `;
}

function goToDetail(name, price, image, sizes) {    
    const url = `shop-detail.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&image=${encodeURIComponent(image)}&sizes=${encodeURIComponent(sizes)}`;
    window.location.href = url;
}