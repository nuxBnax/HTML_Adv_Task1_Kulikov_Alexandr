import { showProductQuantity, deleteProductFromCart, productInCart, preResultSum, blockScroll } from "./others.js";
// const url1 = "./data.json";

// async function fetchData(url) {
//     try {
//         const responce = await fetch(url);
//         const data = await responce.json();
//         return data;
//     } catch (error) {
//         console.log(error.message);
//     }
// }

console.log('shopping до асинх функции');

document.addEventListener("DOMContentLoaded", async () => {

    deleteProductFromCart();
    
    // function displayShoppingCart() {
    //     const shoppingCart = document.querySelector('.shopping__head');
    //     data.forEach(el => {
    //         const product = JSON.parse(localStorage.getItem(el.id));

    //         if (el.id === Number(product.id)) {
    //             shoppingCart.insertAdjacentHTML("afterend", `
    //         <div class="shopping__product">
    //             <div class="shopping__card">
    //                 <a href="./single.html">
    //                     <img class="shopping__img" src="${el.img}">
    //                 </a>
    //                 <div class="card__details">
    //                     <h2 class="card__title">${el.title}</h2>
    //                     <h3 class="card__parametr">Color: <span class="card__span">${el.color}</span></h3>
    //                     <h3 class="card__parametr">Size: <span class="card__span">${el.size}</span></h3>
    //                 </div>
    //             </div>
    //             <div class="shopping__card-tbl">
    //                 <h3 class="card__parametr">$ ${el.price}</h3>
    //             </div>
    //             <div class="shopping__card-tbl">
    //                 <input id="${el.id}" class="shopping__card__quantity" value="1" type="number" min="1">
    //             </div>
    //             <div class="shopping__card-tbl">
    //                 <h3 class="card__parametr">${(el.shipping > 0) ? el.shipping : "FREE"}</h3>
    //             </div>
    //             <div class="shopping__card-tbl subtotal">
    //                 <h3 class="card__parametr ">$ <span class="subtotal"></span></h3>
    //             </div>
    //             <div class="shopping__card-tbl ">
    //                 <a id="${el.id}" class="box__delete_btn" href="#"><img src="./img/shopping/shop_close.jpg"></a>
    //             </div>
    //         </div>
    //         `)
    //             console.log(el.id + " id в json", Number(product.id) + " в хранилище");
    //         }
    //     });
    // }
    // displayShoppingCart();

    // const closeBtns = document.querySelectorAll('.box__delete_btn');
    // closeBtns.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         e.preventDefault();
    //         const productId = el.getAttribute("id");
    //         localStorage.removeItem(productId);
    //         console.log(productId);
    //         alert(`Товар ${el.id} был удален из корзины`);
    //         window.location.reload();
    //     });
    // });
    console.log('shopping внутри асинх функции');

});
    productInCart();
    blockScroll();
    preResultSum();
    showProductQuantity();
    
console.log('shopping после асинх функции');

