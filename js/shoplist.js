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
 

 // Products Data 
if(localStorage.getItem('shop')){
    var counter=0
    var arr=JSON.parse(localStorage.getItem('shop'))
    for(let i=0;i<arr.length;i++){
        var section = $('<div class="prs" style="display: flex; align-items: center; justify-content: space-between ; height: 60px;width: 97%;"></div>')
      section.addClass('new' + counter)
      var xcon = $(' <i class="fa-solid fa-xmark delete" style="cursor: pointer; font-size:1.2em"></i>')
      xcon.addClass('newcon')
      xcon.attr('data-count', counter)
      section.append(xcon)
      var imgs = $('<img src="" width="40px" height="40px">')
      imgs.attr('src',arr[i][2])
      section.append(imgs)
      var h6 = $('<h6>').text(arr[i][0])
      section.append(h6)
    var p1 = $('<h6>').text(arr[i][1])
     section.append(p1)
    $('.container').append(section)
      counter++
    }
  }
  else{
    var counter = 0
    var arr =[]
  }
  $(document).on('click', '.newcon', function () {
    var count = this.dataset.count
    console.log(arr.splice(count,1))
     localStorage.setItem('shop',JSON.stringify(arr))
    $('.new' + count).remove()
})

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

// Details
var db = firebase.database().ref("/orders");


$('.order').click(function () {
    var senderemail = $('#email').val();
    var sendername = $('#name').val();
    var senderphone = $('#phone').val();
    var sendercountry = $('#country').val();
    var senderpc = $('#postcode').val();
    var sendercity = $('#city').val();
    var senderstreet = $('#street').val();
    var company = $('#company').val();
    var order = $('h6').text()
    db.push({
        email: senderemail,
        name: sendername,
        phoneNumber: senderphone,
        country: sendercountry,
        city: sendercity,
        street: senderstreet,
        postcode: senderpc,
        company: company,
        ordername: order
    }
    );
    $('#email').val('');
    $('#name').val('');
    $('#phone').val('');
    $('#country').val('');
    $('#postcode').val('');
    $('#city').val('');
    $('#street').val('');
    $('#company').val('');
});
