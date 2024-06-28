
import { showProductQuantity, productInCart, deleteProductFromCart, preResultSum, displayShoppingCart, productQauntityCatch, deleteProductFromShoppingCart, subTotal, grandTotal,blockScroll } from "./others.js";

document.addEventListener("DOMContentLoaded", async () => {
    displayShoppingCart();
    productQauntityCatch();
    deleteProductFromShoppingCart();

});

productInCart();
blockScroll();
deleteProductFromCart();
showProductQuantity();
preResultSum();
subTotal();
grandTotal();

