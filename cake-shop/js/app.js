/* =========================
   CEK LOGIN
========================= */

if (localStorage.getItem('login') !== 'true') {
  window.location.href = 'login.html';
}

/* =========================
   DATA PRODUK
========================= */

const products = [

  {
    name:'Tiramisu Cake',
    price:55000,
    image:'assets/images/tiramisu.jpeg',
    desc:'Cake premium lembut',
    rating:'⭐⭐⭐⭐⭐'
  },

  {
    name:'Birthday Cake',
    price:50000,
    image:'assets/images/birthday.jpeg',
    desc:'Cake ulang tahun premium',
    rating:'⭐⭐⭐⭐'
  },

  {
    name:'Donut',
    price:10000,
    image:'assets/images/donut.jpeg',
    desc:'Donut topping premium',
    rating:'⭐⭐⭐⭐⭐'
  },

  {
    name:'Nastar Cake',
    price:30000,
    image:'assets/images/nastar.jpeg',
    desc:'Nastar isi nanas',
    rating:'⭐⭐⭐⭐⭐'
  },

  {
    name:'Strawberry Cake',
    price:45000,
    image:'assets/images/strawberry.jpeg',
    desc:'Cake strawberry fresh',
    rating:'⭐⭐⭐⭐⭐'
  },

  {
    name:'Ice Cream',
    price:35000,
    image:'assets/images/icecream.jpeg',
    desc:'Ice cream vanilla',
    rating:'⭐⭐⭐⭐⭐'
  }

];

/* LOGIN */

const form =
document.getElementById('loginForm');

if(form){

form.addEventListener('submit',function(e){

e.preventDefault();

const username =
document.getElementById('username').value;

const password =
document.getElementById('password').value;

if(username === 'Jisoo'
&& password === '12345'){

localStorage.setItem('login','true');

window.location.href='index.html';

}else{

alert('Login gagal');

}

});

}

/* LOAD PRODUK */

const productContainer =
document.getElementById('products');

if(productContainer){

products.forEach((item,index)=>{

productContainer.innerHTML += `

<div class="product-card">

<img src="${item.image}">

<h3>${item.name}</h3>

<p class="harga">
Rp ${item.price.toLocaleString()}
</p>

<p class="rating">
${item.rating}
</p>

<div class="btn-group">

<button onclick="detailProduct(${index})">
Detail
</button>

<button onclick="addCart(${index})">
Tambah
</button>

</div>

</div>

`;

});

}

/* DETAIL */

function detailProduct(index){

document.getElementById('modal')
.style.display='flex';

document.getElementById('detailNama')
.innerHTML=products[index].name;

document.getElementById('detailDesc')
.innerHTML=products[index].desc;

document.getElementById('detailHarga')
.innerHTML='Rp '+
products[index].price.toLocaleString();

document.getElementById('detailRating')
.innerHTML=products[index].rating;

}

/* CLOSE MODAL */

function closeModal(){

document.getElementById('modal')
.style.display='none';

}

/* CART */

let cart=[];

let total=0;

function addCart(index){

cart.push(products[index]);

total += products[index].price;

renderCart();

}

function renderCart(){

let html='';

cart.forEach((item,i)=>{

html += `

<div class="cart-item">

<h4>${item.name}</h4>

<p>
Rp ${item.price.toLocaleString()}
</p>

<button onclick="hapusItem(${i})">
Hapus
</button>

</div>

`;

});

document.getElementById('cartItems')
.innerHTML=html;

document.getElementById('subtotal')
.innerHTML='Rp '+total.toLocaleString();

document.getElementById('total')
.innerHTML='Rp '+total.toLocaleString();

document.getElementById('jumlahItem')
.innerHTML=cart.length+' Item';

}

function hapusItem(index){

total -= cart[index].price;

cart.splice(index,1);

renderCart();

}

/* CHECKOUT */

function checkout(){

if(cart.length < 1){

alert('Keranjang kosong');

return;

}

alert('Pembayaran berhasil');

cart=[];

total=0;

renderCart();

}

/* LOGOUT */

function logout(){

localStorage.removeItem('login');

window.location.href='login.html';

}

/* SEARCH */

const search =
document.getElementById('search');

if(search){

search.addEventListener('keyup',function(){

const value =
this.value.toLowerCase();

const cards =
document.querySelectorAll('.product-card');

cards.forEach(card=>{

if(card.innerText
.toLowerCase()
.includes(value)){

card.style.display='block';

}else{

card.style.display='none';

}

});

});

}