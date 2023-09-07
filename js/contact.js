// Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBWy9M7jwSnw8WfVUIq4QZZ7Jm7mhxhcMg",
    authDomain: "shopping-site-80694.firebaseapp.com",
    databaseURL: "https://shopping-site-80694-default-rtdb.firebaseio.com",
    projectId: "shopping-site-80694",
    storageBucket: "shopping-site-80694.appspot.com",
    messagingSenderId: "1096254100797",
    appId: "1:1096254100797:web:ddafcb5e21ea0f677e6154"
  };

// Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

//Contact Details
var db = firebase.database().ref("/messages");


$('.sendMessage').click(function () {
    var senderemail = $('.email').val();
    var sendername = $('.name').val();
    var senderphone = $('.phone').val();
    var sendermessage = $('.message').val();

    db.push({
            email: senderemail,
            name: sendername,
            phoneNumber: senderphone,
            message: sendermessage,
        }
    );
   
});

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
// Footer
$(".bgpost").on('click',function(){
    window.location='./blog.html'
});


// Wishlist
$(".wlist").on('click', function () {
   window.location='./wishlist.html'
});
$(".shoplist").on('click', function () {
    window.location='./shoplist.html'
 });
 