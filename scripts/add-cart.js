import {products} from './products.js';
import {cart, removeFromCart, calculateCartQuantity, updateQuantity} from './cart.js';

export function realCartSummary() {
  
  let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    cartSummaryHTML += `
      <div class="cart-dropdown-item-box 
        js-cart-item-dropdown-container-${matchingProduct.id}">
        <div class="cart-dropdown-item">
          <div class="cart-dropdown-item-img">
            <img src="${matchingProduct.image}">
          </div>
          <div class="cart-dropdown-item-text">
            <h3>${matchingProduct.name}</h3>
            <p>$30.00</p>
          </div>
        </div>
        <div class="cart-dropdown-inner">
          <div class="tabel-text-btn">
            <div class="grid">
              <button class="btn btn-minus js-decrement" data-product-id="${matchingProduct.id}">
                <i class="fas fa-minus"></i>                
              </button>
              <div class="column js-product-qty-${matchingProduct.id} product-qty">${cartItem.quantity}</div>
              <button class="btn btn-plus js-increment" data-product-id="${matchingProduct.id}">
                <i class="fas fa-plus"></i>  
              </button>
            </div>
          </div>
          <div class="cart-dropdown-inner-btn">
            <a class="delete-link js-delete-link" data-product-id="${matchingProduct.id}">
              <span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 6V13.5C3.75 15.1569 5.09315 16.5 6.75 16.5H11.25C12.9069 16.5 14.25 15.1569 14.25 13.5V6M10.5 8.25V12.75M7.5 8.25L7.5 12.75M12 3.75L10.9453 2.16795C10.6671 1.75065 10.1988 1.5 9.69722 1.5H8.30278C7.80125 1.5 7.3329 1.75065 7.0547 2.16795L6 3.75M12 3.75H6M12 3.75H15.75M6 3.75H2.25" stroke="#F01543" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </a>
            </span>
          </div>
        </div>
      </div>`;
  });

  document.querySelector('.js-cart-dropdown')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {

      
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        removeFromCart(productId);      
        
        const container = document.querySelector(`.js-cart-item-dropdown-container-${productId}`);
        container.remove();

        updateCartQuantity();
        
      });
    });

  updateCartQuantity();

  function updateCartQuantity() {

    const cartQuantity = calculateCartQuantity();
  
    const content = document.querySelector('.js-cart-content');
  
    content.dataset.text = cartQuantity;
  }



  const decrements = document.querySelectorAll('.js-decrement');
  decrements.forEach(function(el) {
    el.addEventListener('click', function(e) {
      //const content = el.innerHTML;
      //console.log(content);
      const productId = el.dataset.productId;
      var quantity = parseInt(document.querySelector(`.js-product-qty-${productId}`).innerHTML);
      if (quantity > 1) {
        quantity--;        
      }
      //console.log(quantity);
       const newQuantity = document.querySelector(`.js-product-qty-${productId}`).innerHTML = quantity;
      //Update Cart local storage.
      
      updateQuantity(productId, newQuantity);

      updateCartQuantity();
      
    });
  });


  const increments = document.querySelectorAll('.js-increment');
  increments.forEach(function(el) {
    el.addEventListener('click', function(e) {
      //const content = el.innerHTML;
      //console.log(content);
      const productId = el.dataset.productId;
      var quantity = parseInt(document.querySelector(`.js-product-qty-${productId}`).innerHTML);
      if (quantity < 10) {
        quantity++;        
      }
      //console.log(quantity);
      const newQuantity = document.querySelector(`.js-product-qty-${productId}`).innerHTML = quantity;
      //Update Cart local storage.

      updateQuantity(productId, newQuantity);

      updateCartQuantity();
      
    });
  });
  

}

let cartSummaryHTML = '';

  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });

    cartSummaryHTML += `
    <tr class="js-cart-item-dropdown-container-${matchingProduct.id}">
      <td class="details-control">
        <input class="form-check-input" type="checkbox" id="checkboxNoLabel-0" aria-label="..." value="">
      </td>
      <td>
        <div class="tabel-item">
          <div class="tabel-img">
            <img src="/asset/php/eggplant.png">
          </div>
        </div>
      </td>
      <td>
        <div class="tabel-text">
          <h5>${matchingProduct.name}</h5>
          <a href="#"><span>Size :</span> Small</a>
          <p><span>Addon :</span>Soft Drinks (+$30)</p>
        </div>
      </td>
      <td>
        <div class="tabel-text">
          <h6>$120</h6>
        </div>
      </td>
      <td>
        <div class="tabel-text-btn">
          <div class="grid">
            <button class="btn btn-minus js-decrement" data-product-id="${matchingProduct.id}">
              <i class="fas fa-minus"></i>              
            </button>
            <div class="column js-product-qty-${matchingProduct.id} product-qty">${cartItem.quantity}</div>
            <button class="btn btn-plus js-increment" data-product-id="${matchingProduct.id}">
              <i class="fas fa-plus"></i>
            </button>
          </div>
        </div>
      </td>
      <td>
        <div class="tabel-text">
          <h6>$120</h6>
        </div>
      </td>
      <td>
        <div class="tabel-modal-btn">
          <button type="button" class="view-btn">
            <span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.1303 14.1469C22.2899 12.9268 22.2899 11.0732 21.1303 9.8531C19.1745 7.79533 15.8155 5 12 5C8.18448 5 4.82549 7.79533 2.86971 9.8531C1.7101 11.0732 1.7101 12.9268 2.86971 14.1469C4.82549 16.2047 8.18448 19 12 19C15.8155 19 19.1745 16.2047 21.1303 14.1469ZM12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white"></path></svg>
            </span>
            View
          </button>
          <a class="delete-link js-delete-link" data-product-id="${matchingProduct.id}">
            <span><svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.834 0.890599C6.20493 0.334202 6.8294 0 7.4981 0H9.35737C10.0261 0 10.6505 0.334202 11.0215 0.8906L11.9277 2.25H15.6777C16.0919 2.25 16.4277 2.58579 16.4277 3C16.4277 3.41421 16.0919 3.75 15.6777 3.75H1.17773C0.763521 3.75 0.427734 3.41421 0.427734 3C0.427734 2.58579 0.763521 2.25 1.17773 2.25H4.92773L5.834 0.890599ZM11.4277 20H5.42773C3.2186 20 1.42773 18.2091 1.42773 16V5H15.4277V16C15.4277 18.2091 13.6369 20 11.4277 20ZM6.42773 8.25C6.84195 8.25 7.17773 8.58579 7.17773 9V16C7.17773 16.4142 6.84195 16.75 6.42773 16.75C6.01352 16.75 5.67773 16.4142 5.67773 16L5.67773 9C5.67773 8.58579 6.01352 8.25 6.42773 8.25ZM10.4277 8.25C10.8419 8.25 11.1777 8.58579 11.1777 9V16C11.1777 16.4142 10.8419 16.75 10.4277 16.75C10.0135 16.75 9.67774 16.4142 9.67773 16V9C9.67773 8.58579 10.0135 8.25 10.4277 8.25Z" fill="white"></path></svg></span>
          </a>
        </div>
      </td>
    </tr>`;
  });

  document.querySelector('.js-cart-dropdown')
    .innerHTML = cartSummaryHTML;

  document.querySelectorAll('.js-delete-link')
    .forEach((link) => {

      
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        removeFromCart(productId);      
        
        const container = document.querySelector(`.js-cart-item-dropdown-container-${productId}`);
        container.remove();

        updateCartQuantity();
        
      });
    });

  updateCartQuantity();

  function updateCartQuantity() {

    const cartQuantity = calculateCartQuantity();
  
    const content = document.querySelector('.js-cart-content');
  
    content.dataset.text = cartQuantity;
  }



  const decrements = document.querySelectorAll('.js-decrement');
  decrements.forEach(function(el) {
    el.addEventListener('click', function(e) {
      //const content = el.innerHTML;
      //console.log(content);
      const productId = el.dataset.productId;
      var quantity = parseInt(document.querySelector(`.js-product-qty-${productId}`).innerHTML);
      if (quantity > 1) {
        quantity--;        
      }
      //console.log(quantity);
       const newQuantity = document.querySelector(`.js-product-qty-${productId}`).innerHTML = quantity;
      //Update Cart local storage.
      
      updateQuantity(productId, newQuantity);

      updateCartQuantity();
      
    });
  });


  const increments = document.querySelectorAll('.js-increment');
  increments.forEach(function(el) {
    el.addEventListener('click', function(e) {
      //const content = el.innerHTML;
      //console.log(content);
      const productId = el.dataset.productId;
      var quantity = parseInt(document.querySelector(`.js-product-qty-${productId}`).innerHTML);
      if (quantity < 10) {
        quantity++;        
      }
      //console.log(quantity);
      const newQuantity = document.querySelector(`.js-product-qty-${productId}`).innerHTML = quantity;
      //Update Cart local storage.

      updateQuantity(productId, newQuantity);

      updateCartQuantity();
      
    });
  });