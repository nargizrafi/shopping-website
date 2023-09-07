if(sessionStorage.getItem('pr-name')!==null){
    $('.pr-name').text(sessionStorage.getItem('pr-name'))
    $('.pr-price').text(sessionStorage.getItem('pr-price'))
    $('.img1').attr('src', sessionStorage.getItem('pr-img1'))
    $('.img2').attr('src', sessionStorage.getItem('pr-img2'))
}
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

    $('.addwishlist').on('click', function () {
        var name = $('.pr-name').text()
        var price = $('.pr-price').text()
        var img = $('.img1').attr('src')
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
        localStorage.setItem('item', JSON.stringify(newarr1));
        window.location = './shoplist.html'
    });
    $('.addcart').on('click', function () {
        var name = $('.pr-name').text()
        var price = $('.pr-price').text()
        var img = $('.img1').attr('src')
        arr1.push(name, price, img)
        newarr1.push(arr1);
        localStorage.setItem('shop', JSON.stringify(newarr1));
        window.location='./wishlist.html'
    });
}
if (sessionStorage.getItem('login') !== 'true') {
    $('.fa-basket-shopping').on('click', function () {
        alert('Please Log In to Save Changes!')
    });
}


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

//Products - Count

var count = $('.count').text()
 $(".plus").on('click',function(){
    ++count
    $('.count').text(count)
});
var count = $('.count').text()
$(".minus").on('click',function(){
    --count
    $('.count').text(count)
    if(count==0){
    $(".minus").on('click',function(){
        count=0
        $('.count').text(count)
    }); 
}  
}); 

//Description and Review
$(".ds").on('click',function(){
    $(".description").css({
        display:'flex'
    })
    $(".review").css({
        display:'none'
    })
    $(this).css({
        color: "black",
        borderBottom: "1px solid black"
    })
    $(".rv").css({
        color: "#818181",
        borderBottom: "1px solid rgba(128, 128, 128, 0.388)"
    })
});
$(".rv").on('click',function(){
    $(".review").css({
        display:'flex'
    })
    $(".description").css({
        display:'none'
    })
    $(this).css({
        color: "black",
        borderBottom: "1px solid black"
    })
    $(".ds").css({
        color: "#818181",
        borderBottom: "1px solid rgba(128, 128, 128, 0.388)"
    })
});
$("#closer").on('click',function(){
    $(".abr").css({
        display:'none'
    })
});
$(".writerev").on('click',function(){
    $(".abr").css({
        display:'flex'
    })
});
// Footer
$(".bgpost").on('click',function(){
    window.location='./blog.html'
});

// Reviews - Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCq22q8kwO0lBDdr563LNURYnr6snoC4K0",
    authDomain: "shopping-comment.firebaseapp.com",
    projectId: "shopping-comment",
    storageBucket: "shopping-comment.appspot.com",
    messagingSenderId: "856657795178",
    appId: "1:856657795178:web:5f340a3ab14a0976d09213"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);


//Reviews
var db = firebase.database().ref()
const database = firebase.database();
const reviewsRef = database.ref("reviews");


$('.rsubmit').click(function () {
    var senderemail = $('.email').val();
    var sendername = $('.name').val();
    var reviews = $('textarea').val();

    reviewsRef.push({
        email: senderemail,
        name: sendername,
        review: reviews,
    }
    );
});

reviewsRef.on('child_added', function (snapshot) {
    const reviews = snapshot.val();
    var reviewed = $('<div class="reviewed" style="padding-bottom:10px; border-bottom:1px solid gray"></div>')
    var fullc = reviewed.html(`<h4 style="color:black">${reviews.name}</h4><p>${reviews.review}</p>`)
     $('.reviews').append(fullc)
   
});


$(".shoplist").on('click', function () {
    window.location='./shoplist.html'
 });
 
