export function productInCart() {
    const basketEl = document.querySelector('.basketbutton-scroll')

    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(item));
        console.log(product.id + ' товар добавлен в корзину вверху');

        basketEl.insertAdjacentHTML("afterbegin", `
        <a class="box__link" href="./single.html">
            <div class="box__product">
                <img class="box__img" src="${product.img}" alt="">
                <div class="box__mini">
                     <h4 class="box__product__name">${product.title}</h4>
                     <img src="./img/header/header_box_stars.jpg" alt="">
                     <h4 class="box__name__quantity">1 x &#36 ${product.price}</h4>
                </div>
                <form action="delete_item">
                    <button id="${product.id}" class="box__delete_btn">
                        <img class="box__img2" src="./img/header/header_box_close.png" alt="close">
                    </button>
                </form>
            </div>
        </a>
        <div class="box__line"></div>
        `)
    }
}

export function deleteProductFromCart() {
    const closeBtns = document.querySelectorAll('.box__delete_btn');
    closeBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = el.getAttribute("id");
            localStorage.removeItem(productId);
            window.location.reload();
        });
    });
}

export function preResultSum() {
    const totalSumEl = document.querySelector('.sum');
    let totalSum = 0;

    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(item));
        totalSum += product.price * product.quantity;
    }
    totalSumEl.textContent = `$ ${totalSum}`;
}
export function subTotal() {
    let sum = 0;
    const totalSum = document.querySelector('.sub-total');
    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(item));
        sum = sum + product.price * product.quantity;
    }
    totalSum.textContent = `$ ${sum}`;
}

export function grandTotal() {
    let sum = 0;
    const totalSum = document.querySelector('.filling-form__span');
    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(item));
        sum = sum + product.shipping + product.price * product.quantity;
    }
    totalSum.textContent = `$ ${sum}`;
}

export function displayShoppingCart() {
    const shoppingCart = document.querySelector('.shopping__head');
    for (let i = 0; i < localStorage.length; i++) {
        const item = localStorage.key(i);
        const product = JSON.parse(localStorage.getItem(item));
        shoppingCart.insertAdjacentHTML("afterend", `
        <div class="shopping__product">
            <div class="shopping__card">
                <a href="./single.html">
                    <img class="shopping__img" src="${product.img}">
                </a>
                <div class="card__details">
                    <h2 class="card__title">${product.title}</h2>
                    <h3 class="card__parametr">Color: <span class="card__span">${product.color}</span></h3>
                    <h3 class="card__parametr">Size: <span class="card__span">${product.size}</span></h3>
                </div>
            </div>
            <div class="shopping__card-tbl">
                <h3 class="card__parametr">$ ${product.price}</h3>
            </div>
            <div class="shopping__card-tbl">
                <input id="${product.id}" class="shopping__card__quantity" value="${product.quantity}" type="number" min="1">
            </div>
            <div class="shopping__card-tbl">
                <h3 class="card__parametr">${(product.shipping > 0) ? product.shipping : "FREE"}</h3>
            </div>
            <div class="shopping__card-tbl subtotal">
                <h3 class="card__parametr ">$ <span class="subtotal">${product.price * product.quantity}</span></h3>
            </div>
            <div class="shopping__card-tbl ">
                <a id="${product.id}" class="delete_btn" href="#"><img src="./img/shopping/shop_close.jpg"></a>
            </div>
        </div>
        `)
    }
}

export function showProductQuantity() {
    const containerForCounter = document.querySelector('.box__product-cnt');
    const productCounter = document.querySelector('.box__count');
    const basketEl = document.querySelector('.basketbutton-box')
    if (localStorage.length === 0) {
        containerForCounter.classList.add("d-none");
        basketEl.insertAdjacentHTML("afterbegin", `
        <h4 class="box__product__name"> ! Your cart is Empty!</h4>
        <br>
        <div class="box__line"></div>
        `)
        console.log('Корзина пуста');
    } else if (localStorage.length > 0) {
        productCounter.textContent = localStorage.length;
    }
}

export function productQauntityCatch() {
    const productQuantity = document.querySelectorAll('.shopping__card__quantity');
    productQuantity.forEach(elem => {
        elem.addEventListener('input', (e) => {
            e.preventDefault();
            for (let i = 0; i < localStorage.length; i++) {
                const item = localStorage.key(i);
                const product = JSON.parse(localStorage.getItem(item));
                if (elem.id === item) {
                    // console.log(product.quantity);
                    product.quantity = elem.value;
                    elem.textContent = elem.value;
                    // console.log(product.quantity);
                    // console.log(product);
                    localStorage.setItem(item, JSON.stringify(product))
                    // console.log(elem.id + ' id элемента на который кликнули', item + ' ключ в localstogage');
                    window.location.reload();
                }
            }
        });
    });

}

export function deleteProductFromShoppingCart() {
    const closeBtns = document.querySelectorAll('.delete_btn');
    closeBtns.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const productId = el.getAttribute("id");
            localStorage.removeItem(productId);
            window.location.reload();
        });
    });
}

export function blockScroll() {
    const boxEl = document.querySelector('.basketbutton-scroll');
    if (localStorage.length > 3) {
        boxEl.style.height = "300px";
        boxEl.style.overflowY = "scroll";
        boxEl.style.scrollbarColor = "#f16d7f #fbfbfb";
        boxEl.style.scrollbarWidth = "thin";
    }
}