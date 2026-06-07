document.addEventListener("DOMContentLoaded", function() {
    renderNavbar();

    window.addEventListener('storage', (event) => {
        if (event.key === 'isLoggedIn') {
            renderNavbar();
        }
    });
    let lastState = localStorage.getItem('isLoggedIn');
    setInterval(() => {
        let currentState = localStorage.getItem('isLoggedIn');
        if (currentState !== lastState) {
            lastState = currentState;
            renderNavbar();
        }
    }, 500);
});

function renderNavbar() {
    const authSection = document.getElementById('auth-section');
    if (!authSection) return;

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn) {
        authSection.innerHTML = `
            <div class="logged-in-icons">
                <div class="icon-circle" onclick="location.href='cart.html'"><img src="sources/cart.png" alt="Cart"></div>
                <div class="icon-circle" onclick="location.href='wishlist.html'"><img src="sources/heart.png" alt="Wish"></div>
                <div class="icon-circle" onclick="location.href='profile.html'"><img src="sources/user.png" alt="User"></div>
            </div>
        `;
    } else {
        authSection.innerHTML = `
            <button class="btn-login-nav" onclick="location.href='login.html'">Login/Sign-Up</button>
        `;
    }
}