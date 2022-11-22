let carts = document.querySelectorAll("button")

let products = [
    {
        name: 'Trà Phúc Bồn Tử',
        tag: '9',
        price: 45,
        inCart: 0
    },
    {
        name: 'Trà Phúc Bồn Tử',
        tag: '5',
        price: 35,
        inCart: 0
    },
    {
        name: 'Trà Phúc Bồn Tử',
        tag: '6',
        price: 25,
        inCart: 0
    },
    {
        name: 'Trà Phúc Bồn Tử',
        tag: '7',
        price: 50,
        inCart: 0
    },
    {
        name: 'Trà Phúc Bồn',
        tag: '8',
        price: 30,
        inCart: 0
    },
    {
        name: 'Trà Phúc Bồn Tử',
        tag: '6',
        price: 25,
        inCart: 0
    },
    {
        name: 'Trà Phúc Bồn Tử',
        tag: '5',
        price: 35,
        inCart: 0
    },
    {
        name: 'Trà Sữa Dưa Lưới',
        tag: '111',
        price:45,
        inCart:0
    },
    {
        name: 'Trà Sữa Hương Nho',
        tag: '112',
        price: 35,
        inCart:0
    },
    {
        name:'Trà Sữa Hương Táo',
        tag: '113',
        price: 25,
        inCart: 0
    }
]

for( let i = 0; i < carts.length; i++){
     carts[i].addEventListener('click' , () => {
        cartNumber(products[i]);
        totalCost(products[i]);
     })
}  

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumber');

    if(productNumbers){
        document.querySelector('.count_item').textContent = productNumbers;
    }
}
//// check out /////

/// check out ////
function cartNumber(product){
    let productNumbers = localStorage.getItem('cartNumber');
    productNumbers = parseInt(productNumbers);

    if(productNumbers){
        localStorage.setItem('cartNumber', productNumbers + 1);
        document.querySelector('.count_item').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumber', 1);
        document.querySelector('.count_item').textContent = 1;
    }
    setItems(product)
}
function setItems(product){
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);

    if(cartItems != null){
        if(cartItems[product.tag] == undefined){
           cartItems = {
              ...cartItems,
              [product.tag]: product
           }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
           [product.tag]: product
        }
    }
    localStorage.setItem("productsIncart", JSON.stringify(cartItems));
}
function totalCost(product){
    let cartCost = localStorage.getItem('totalCost');
    
    if(cartCost != null){
       cartCost = parseInt(cartCost);
       localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem("totalCost", product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    const sumCart = Object.values(cartItems).reduce((total, item) => {
        return total + (item.price * +item.inCart)
    }, 0);

    console.log(cartItems);
    if(cartItems && productContainer){
       productContainer.innerHTML = '';
       Object.values(cartItems).map((item, index) => {
         productContainer.innerHTML +=`
          <div class="product">
               <td><ion-icon onclick="removeCartItem(${index})" id="deleta" class="cart-close" name="close-circle-outline"></ion-icon></td>
               <td><img src="/images/${item.tag}.webp" alt=""></td>
               <td><span>${item.name}</span></td>
               <td><div class="prices">${item.price}</div></td>
               <td><div class"quantity">
               <span><input onchange="inputchange(${item.tag}, ${index})" type='number' min="0" value='${item.inCart}'></span>
               </div></td>
               <td><div class="toatl">
                   ${item.inCart * item.price},000₫
               </div></td>
          </div>
         `
       });
       productContainer.innerHTML += `
       <div style="width: 100%;height: 20vh;" class="wrap-continued">
       <div class="shopping-cart-title-total">
           <div class="table-total">
               <table class="table">
                   <tbody>
                       <tr>
                           <td class="total-text">Tổng tiền</td>
                           <td class="total-right">${sumCart},000₫</td>
                       </tr>
                   </tbody>
               </table>
           </div>
           <div class="cart-btn">
               <div class="continue-buy">
                   <ion-icon name="arrow-undo-circle-outline"></ion-icon>
                   <a href="/HTML/product.html">Tiếp tục mua hàng</a>
               </div>
               <div class="btn-checkout">
                   <ion-icon name="checkmark-done-outline"></ion-icon>
                   <a href="/HTML/checkout.html">Tiến hành thanh toán</a>
               </div>
           </div>
       </div>
   </div>
       `
    }
}
// input cardNumber ////
function inputchange(e, i){
    var cartItems = document.querySelectorAll(".product input")
    let products = Object.values(JSON.parse(localStorage.getItem("productsIncart")));
    if(cartItems[i].value == 0) {
        products = products.filter((item, index) => {
            return index != i;
        })
    } else {
        products[i].inCart  = cartItems[i].value;
    }
    localStorage.setItem("productsIncart", JSON.stringify(products));
    window.location.reload();
}
/// remove //////
if(document.readyState == 'loading'){
document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}
function ready(){
   var removeCart = document.getElementsByClassName('cart-close');
   console.log(removeCart)
   for(var i = 0; i < removeCart.length; i++){
    var button = removeCart[i];
    button.addEventListener('click', removeCartItem);
   }
}

function removeCartItem(i){
    let products = Object.values(JSON.parse(localStorage.getItem("productsIncart")));
    products = products.filter((item, index) => {
        return index != i;
    })
    localStorage.setItem("productsIncart", JSON.stringify(products));
    window.location.reload();
}
displayCart();
onLoadCartNumbers();
//// cart shop ////
// tabs-menu //
let tabs = document.querySelectorAll('.tabs_item'),
    Contents = document.querySelectorAll('.tabs_content');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        Contents.forEach((content) => {
            content.classList.remove('is-active');
        });
        tabs.forEach((tab) => {
            tab.classList.remove('active')
        });
        Contents[index].classList.add('is-active');
        tabs[index].classList.add('active')
    })
})
/////// shopping cart/////////
