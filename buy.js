
import { showProductQuantity, productInCart, deleteProductFromCart, preResultSum, displayShoppingCart, productQauntityCatch, deleteProductFromShoppingCart, subTotal, grandTotal,blockScroll } from "./others.js";
const url1 = "./data.json";
async function fetchData(url) {
    try {
        const responce = await fetch(url);
        const data = await responce.json();
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
console.log('buy до асинх функции');
document.addEventListener("DOMContentLoaded", async () => {
    const data = await fetchData(url1);

    // function productInCart() {
    //     const basketEl = document.querySelector('.basketbutton-box')

    //     data.forEach(el => {
    //         const product = JSON.parse(localStorage.getItem(el.id));
    //         console.log(Number(product.id) + ' товар добавлен в корзинук вверху');
    //         if (el.id === Number(product.id)) {
    //             basketEl.insertAdjacentHTML("afterbegin", `
    //         <a class="box__link" href="./single.html">
    //             <div class="box__product">
    //                 <img class="box__img" src="${el.img}" alt="">
    //                 <div class="box__mini">
    //                      <h4 class="box__product__name">${el.title}</h4>
    //                      <img src="./img/header/header_box_stars.jpg" alt="">
    //                      <h4 class="box__name__quantity">1 x &#36 ${el.price}</h4>
    //                 </div>
    //                 <form action="delete_item">
    //                     <button id="${el.id}" class="box__delete_btn">
    //                         <img class="box__img2" src="./img/header/header_box_close.png" alt="close">
    //                     </button>
    //                 </form>
    //             </div>
    //         </a>
    //         <div class="box__line"></div>
    //         `)
    //         }
    //     })
    // }

    // console.log('buy внутри асинх функции');

    

    // function deleteProductFromCart() {
    //     const closeBtns = document.querySelectorAll('.box__delete_btn');
    //     closeBtns.forEach(el => {
    //         el.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             const productId = el.getAttribute("id");
    //             localStorage.removeItem(productId);
    //             console.log(productId);
    //             // alert(`Товар ${el.id} был удален из корзины`);    
    //             window.location.reload();
    //         });
    //     });
    // }



    // const containerForCounter = document.querySelector('.box__product-cnt');
    // const productCounter = document.querySelector('.box__count');
    // if (localStorage.length === 0) {
    //     containerForCounter.classList.add("d-none");;
    // } else if (localStorage.length > 0) {
    //     productCounter.textContent = localStorage.length;
    // }

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

    displayShoppingCart();
    
    productQauntityCatch();
    // function preResultSum() {
    //     const totalSumEl = document.querySelector('.sum');
    //     let totalSum = 0;
    //     data.forEach(el => {
    //         const product = JSON.parse(localStorage.getItem(el.id));
    //         console.log(Number(product.id) + ' Предварительная сумма');
    //         if (el.id === Number(product.id)) {
    //             totalSum += el.price;
    //         }
    //     });
    //     totalSumEl.textContent = `$ ${totalSum}`;
    // }
    deleteProductFromShoppingCart();

});
productInCart();
blockScroll();
deleteProductFromCart();
// function showProductQuantity() {
//     const containerForCounter = document.querySelector('.box__product-cnt');
//     const productCounter = document.querySelector('.box__count');
//     if (localStorage.length === 0) {
//         containerForCounter.classList.add("d-none");
//         console.log("Товара в корзине нет");
//     } else if (localStorage.length > 0) {
//         productCounter.textContent = localStorage.length;
//         console.log("Показываю количество товара");
//     }

// }
showProductQuantity();

// function showEmptyCart() {
//     const basketEl = document.querySelector('.basketbutton-box')

//     if (localStorage.length === 0) {
//         basketEl.insertAdjacentHTML("afterbegin", `
//     <h4 class="box__product__name"> ! Your cart is Empty!</h4>
//     <br>
//     <div class="box__line"></div>
//     `)
//     }
// }
// showEmptyCart();

// function grandTotal() {
//     let sum = 0;
//     const totalSum = document.querySelector('.filling-form__span');
//     data.forEach(el => {
//         const product = JSON.parse(localStorage.getItem(el.id));
//         if (el.id === Number(product.id)) {
//             sum += el.price + el.shipping;
//         }
//     });
//     totalSum.textContent = `$ ${sum}`;
// }
preResultSum();
// grandTotal();
subTotal();
grandTotal();
console.log('buy после асинх функции');

