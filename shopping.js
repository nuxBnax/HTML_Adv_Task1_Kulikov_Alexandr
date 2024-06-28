import { showProductQuantity, deleteProductFromCart, productInCart, preResultSum, blockScroll } from "./others.js";

document.addEventListener("DOMContentLoaded", async () => {
    deleteProductFromCart();
});

productInCart();
blockScroll();
preResultSum();
showProductQuantity();

