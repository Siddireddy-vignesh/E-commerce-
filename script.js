function addToCartFromDOM(productElement) {
    const name = productElement.querySelector(".product-name").textContent;
    const price = parseFloat(productElement.querySelector(".product-price").textContent);
  
    const product = { name, price };
  
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${name} added to cart!`);
  }
  
  // Attach event listeners after DOM is ready
  window.onload = () => {
    const buttons = document.querySelectorAll(".add-to-cart");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const productElement = button.closest(".product");
        addToCartFromDOM(productElement);
      });
    });
  };
  