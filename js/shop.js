// Header
$(".more").mouseover(function(){
    $(".tick").removeClass('fa-chevron-up')
    $(".tick").addClass('fa-chevron-down')
});
$(".more").mouseleave(function(){
    $(".tick").removeClass('fa-chevron-down')
    $(".tick").addClass('fa-chevron-up')
});
$(".logo").on('click',function(){
    window.location='./index.html'
});
$(".fa-user1").on('click', function () {
    window.location = './account.html'
});
//Search Bar
$(".fa-magnifying-glass1").on('click',function(){
    $("#searchBar").css({
        display:'flex'
    })
});
$(".closing i").on('click',function(){
    $("#searchBar").css({
        display:'none'
    })
});
// SideBar
$("#moreItems").on('click',function(){
    $("#sideNav").css({
        display:'none'
    })
    $(".moreItem").css({
        display:'flex'
    })
});
$("#back i").on('click',function(){
    $(".moreItem").css({
        display:'none'
    })
    $("#sideNav").css({
        display:'flex'
    })
});
$(".fa-bars").on('click',function(){
    $(".side").css({
        display:'flex'
    })
});
$("#close i").on('click',function(){
    $(".side").css({
        display:'none'
    })
});
$(".sidebarBtn").on('click',function(){
    window.location='./account.html'
});
//Title
$(".linked").on('click',function(){
    window.location='./index.html'
});

//Products
$(".white").on('click', function () {
    $(".product-4").css({
        backgroundImage: "url('./images/20-1.jpg')"
    })
});
$(".yellow").on('click', function () {
    $(".product-4").css({
        backgroundImage: "url('./images/19-3.jpg')"
    })
});
$(".orange").on('click', function () {
    $(".product-4").css({
        backgroundImage: "url('./images/19-1.jpg')"
    })
});
$(".black").on('click', function () {
    $(".product-11").css({
        backgroundImage: "url('./images/15-1.jpg')"
    })
});
$(".gray").on('click', function () {
    $(".product-11").css({
        backgroundImage: "url('./images/15-2.jpg')"
    })
});
$(".loadmore").on('click', function () {
    $(".section-2").css({
        display:"flex"
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#black").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".blacked").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#gray").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".grayed").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#red").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".reded").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#yellow").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".yellowed").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#beige").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".beiged").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#green").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".greened").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#white").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".whited").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#pink").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".pinked").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$(".accessoriesp").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".accessories").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$(".designerp").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".designer").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$(".clothingp").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".clothing").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$(".hatsp").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".hats").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$(".shoesp").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".shoes").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#xl").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".xl").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#m").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".m").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#s").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".s").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#l").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".l").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#Serena").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".serena").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#Cornila").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".cornila").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#RosyFashion").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".rosyfashion").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#Florial").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".florial").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});
$("#Fashion").on('click',function(){
    $(".product").css({
        display:'none'
    })
    $(".fashion").css({
        display:'flex'
    })
    $(".loadmore").css({
        display:"none"
    })
});

// Footer
$(".bgpost").on('click',function(){
    window.location='./blog.html'
});

// Products Data 
$('.fa-magnifying-glass-2').on('click',function(){
    sessionStorage.setItem('pr-name',this.dataset.name)
    sessionStorage.setItem('pr-price',this.dataset.price)
    sessionStorage.setItem('pr-img1',this.dataset.img1)
    sessionStorage.setItem('pr-img2',this.dataset.img2)
    window.location='./productsexample.html'
});

$('.bpic').on('click',function(){
    sessionStorage.setItem('pr-name',this.dataset.name)
    sessionStorage.setItem('pr-price',this.dataset.price)
    sessionStorage.setItem('pr-img1',this.dataset.img1)
    sessionStorage.setItem('pr-img2',this.dataset.img2)
    window.location='./productsexample.html'
});


// Wishlist
$(".wlist").on('click', function () {
   window.location='./wishlist.html'
});


if(localStorage.getItem('item')){
var newarr=JSON.parse(localStorage.getItem('item'))
var arr =[]
}
else{
    var newarr = []
    var arr=[]
}

if (sessionStorage.getItem('login') == 'true') {
    $('.heart-1').on('click', function () {
        var name = this.dataset.name;
        var price = this.dataset.price;
        var img = this.dataset.img1;
        arr.push(name, price, img)
        newarr.push(arr);
        localStorage.setItem('item', JSON.stringify(newarr));
        window.location='./wishlist.html'
    });
}
if (sessionStorage.getItem('login') !== 'true') {
    $('.heart-1').on('click', function () {
       alert('Please Log In to Save Changes!')
    });
}

$(".shoplist").on('click', function () {
    window.location='./shoplist.html'
 });
 

 if (localStorage.getItem('shop')) {
    var newarr1 = JSON.parse(localStorage.getItem('shop'))
    var arr1 = []
}
else {
    var newarr1 = []
    var arr1 = []
}

if (sessionStorage.getItem('login') == 'true') {
    $('.fa-basket-shopping').on('click', function () {
        var name = this.dataset.name;
        var price = this.dataset.price;
        var img = this.dataset.img1;
        arr1.push(name, price, img)
        newarr1.push(arr1);
        localStorage.setItem('shop', JSON.stringify(newarr1));
        window.location = './shoplist.html'
    });
}
if (sessionStorage.getItem('login') !== 'true') {
    $('.fa-basket-shopping').on('click', function () {
        alert('Please Log In to Save Changes!')
    });
}