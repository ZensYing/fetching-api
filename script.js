fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(products => {
        const container = document.getElementById('product');
        container.innerHTML = '';

        products.forEach(product => {
            const productHTML = `
                <div class="product-item" data-id="${product.id}">
                    <img src="${product.image}" alt="${product.title}" class="product-image">
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-price">$${product.price}</p>
                </div>
            `;
            container.innerHTML += productHTML;
        });

        // Adding click event listeners to each product item
        document.querySelectorAll('.product-item').forEach(item => {
            item.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const product = products.find(p => p.id == productId);
                displayProductDetails(product);
            });
        });
    })
    .catch(error => console.error('Error fetching products:', error));

function displayProductDetails(product) {
    const modalContent = `
        <div class="modal-content">
            <span class="close-button">&times;</span>
            <img src="${product.image}" alt="${product.title}" class="product-detail-image">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="product-price">$${product.price}</p>
        </div>
    `;
    const modal = document.getElementById('product-modal');
    modal.innerHTML = modalContent;
    modal.style.display = "block";

    // Close modal
    modal.querySelector('.close-button').addEventListener('click', () => {
        modal.style.display = "none";
    });
}
// get 1 user from the api
fetch('https://fakestoreapi.com/users/1')
    .then(res => res.json())
    .then(user => {
        const userContainer = document.getElementById('user');
        userContainer.innerHTML = '';

        const userHTML = `
            <div class="user-item">
                    <h2>${user.username}</h2>
            </div>
        `
        userContainer.innerHTML += userHTML;

})


const boxes = document.querySelectorAll('.box-large > div:not(.box-left):not(.box-right)');
let currentIndex = 0;

function showBox(index) {
    boxes.forEach((box, i) => {
        if(i === index) {
            box.style.display = 'block';
        } else {
            box.style.display = 'none';
        }
    });
}

document.querySelector('.box-left').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + boxes.length) % boxes.length;
    showBox(currentIndex);
});

document.querySelector('.box-right').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % boxes.length;
    showBox(currentIndex);
});

// Initialize the slideshow by showing the first box
showBox(currentIndex);