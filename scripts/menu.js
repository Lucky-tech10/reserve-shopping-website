import {products} from './products.js';
import {cart, addToCart, calculateCartQuantity} from './cart.js';
import { realCartSummary} from './add-cart.js';


realCartSummary();


let productsHTML = '';

products.forEach((product) => {
  productsHTML += `
    <div class="shaf-item mb-4 col-lg-4 col-md-6 featured-item-mt">
      <div class="featured-item">
        <div class="featured-item-img-populer w-full">
          <img src="${product.img}">
        </div>
        <div class="featured-item-img">
          <img src="${product.image}">
          <div class="featured-item-img-overlay">
            <div class="featured-item-img-over-text">
              <div class="left-text">
                <div class="icon">
                  <span></span>
                </div>
              </div>
              <div class="right-text">
                <h5>20% Off</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="featured-item-text">
          <div class="text-item">
            <div class="left">
              <h3>$18</h3>
            </div>
            <div class="right">
              <div class="icon">
                <span><img src="/asset/php/star.jpeg" alt=""></span>
              </div>
              <h5> 4.7(2.5K)</h5>
            </div>
          </div>
          <div class="text-item-center">
            <h3><a href="#all-food">${product.name}</a>
            </h3>
          </div>
          <div class="text-item-center-item-box">
            <div class="text-item-center-item">
              <div class="icon">
                <span></span>
              </div>
              <div class="text">
                <h5>4 Piece Chicken</h5>
              </div>
            </div>
            <div class="text-item-center-item">
              <div class="icon">
                <span></span>
              </div>
              <div class="text">
                <h5>Spicy Sauce</h5>
              </div>
            </div>
            <div class="product-spacer d-flex"></div>
            <div class="added-to-cart js-added-to-cart-${product.id}">
              <img src="asset/php/checkmark.png">
              Added
            </div>
            <div class="featured-item-btn">
              <button class="main-btn-three js-add-to-cart" data-product-id="${product.id}">
                <span><img src="asset/php/add-to-cart-icon.jpeg"></span>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>`
});

document.querySelector('.js-products-row')
  .innerHTML = productsHTML;

function updateCartQuantity() {

  const cartQuantity = calculateCartQuantity();

  const content = document.querySelector('.js-cart-content');

  content.dataset.text = cartQuantity;
}

updateCartQuantity();

document.querySelectorAll('.js-add-to-cart')
  .forEach((button) => {
    let addedMessageTimeoutId;

    button.addEventListener('click', () => {
      // const productId = button.dataset.productId;
      const {productId} = button.dataset;

      addToCart(productId);

      updateCartQuantity();

      const addedMessage = document.querySelector(
        `.js-added-to-cart-${productId}`
      );
      
      addedMessage.classList.add('added-to-cart-visible');

      setTimeout(() => {
        // Check if a previous timeoutId exists. If it does,
        // we will stop it.
        if (addedMessageTimeoutId) {
          clearTimeout(addedMessageTimeoutId);
        }
  
        const timeoutId = setTimeout(() => {
          addedMessage.classList.remove('added-to-cart-visible');
        }, 2000);
  
        // Save the timeoutId so we can stop it later.
        addedMessageTimeoutId = timeoutId;
      });
      
    });
  });