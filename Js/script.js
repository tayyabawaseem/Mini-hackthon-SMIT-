const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


/* Carousel Start  */

let currentIndex = 0;
  
const carousel = document.querySelector('.carousel');
const totalProducts = document.querySelectorAll('.product').length;
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function updateCarousel() {
  const offset = -currentIndex * 33.33; 
  carousel.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = totalProducts - 3; 
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalProducts - 3) {
    currentIndex++;
  } else {
    currentIndex = 0; 
  }
  updateCarousel();
});

updateCarousel();
/* Carousel End */


const cart = [];
const cartCountElement = document.querySelector('.cart-count');
const cartItemsElement = document.getElementById('cartItems');
const totalAmountElement = document.getElementById('totalAmount');

// Add to cart
document.querySelectorAll('.shop-now').forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = {
      name: button.closest('.product').querySelector('h3').textContent,
      price: Math.floor(Math.random() * 100) + 10, // Random price for example
      quantity: 1,
    };

    const existingProduct = cart.find(item => item.name === product.name);
    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push(product);
    }

    updateCartCount();
    alert(`${product.name} added to cart!`);
  });
});

// Update cart count
function updateCartCount() {
  cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
}

// Open cart modal
function openCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = "block"; // Show the modal
  updateCartModal();
}

// Close cart modal
function closeCart() {
  const modal = document.getElementById("cartModal");
  modal.style.display = "none"; // Hide the modal
}

// Update cart modal content
function updateCartModal() {
  cartItemsElement.innerHTML = '';
  let totalAmount = 0;

  cart.forEach((item, index) => {
    const itemElement = document.createElement('tr');
    itemElement.innerHTML = `
      <td>${item.name}</td>
      <td>$${item.price}</td>
      <td>
        <button class="increment" onclick="incrementQuantity(${index})">+</button>
        <button class="decrement" onclick="decrementQuantity(${index})">-</button>
        <button class="delete" onclick="deleteItem(${index})">Delete</button>
      </td>
    `;
    cartItemsElement.appendChild(itemElement);
    totalAmount += item.price * item.quantity;
  });

  totalAmountElement.textContent = totalAmount.toFixed(2);
}

// Increment quantity
function incrementQuantity(index) {
  cart[index].quantity++;
  updateCartModal();
  updateCartCount();
}

// Decrement quantity
function decrementQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity--;
  } else {
    cart.splice(index, 1);
  }
  updateCartModal();
  updateCartCount();
}

// Delete item from cart
function deleteItem(index) {
  cart.splice(index, 1);
  updateCartModal();
  updateCartCount();
}

// Buy Now functionality
function buyNow() {
  alert('Thank you for your purchase!');
  cart.length = 0;
  updateCartCount();
  closeCart();
}
