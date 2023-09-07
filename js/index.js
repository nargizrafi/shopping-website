// Header
$(".more").mouseover(function () {
    $(".tick").removeClass('fa-chevron-up')
    $(".tick").addClass('fa-chevron-down')
});
$(".more").mouseleave(function () {
    $(".tick").removeClass('fa-chevron-down')
    $(".tick").addClass('fa-chevron-up')
});
$(".logo").on('click', function () {
    window.location = './index.html'
});
$(".fa-user1").on('click', function () {
    window.location = './account.html'
});
//Search Bar
$(".fa-magnifying-glass1").on('click', function () {
    $("#searchBar").css({
        display: 'flex'
    })
});
$(".closing i").on('click', function () {
    $("#searchBar").css({
        display: 'none'
    })
});
// SideBar
$("#moreItems").on('click', function () {
    $("#sideNav").css({
        display: 'none'
    })
    $(".moreItem").css({
        display: 'flex'
    })
});
$("#back i").on('click', function () {
    $(".moreItem").css({
        display: 'none'
    })
    $("#sideNav").css({
        display: 'flex'
    })
});
$(".fa-bars").on('click', function () {
    $(".side").css({
        display: 'flex'
    })
});
$("#close i").on('click', function () {
    $(".side").css({
        display: 'none'
    })
});
$(".sidebarBtn").on('click', function () {
    window.location = './account.html'
});

//Banners
$(".shopBtn").on('click', function () {
    window.location = './shop.html'
});
$(".clothing").on('click', function () {
    window.location = './shop.html'
});
$(".designer").on('click', function () {
    window.location = './shop.html'
});

// Discounts - Timer

var days = 13
var hours = 23
var minutes = 59
var seconds = 59

var x = setInterval(function () {
    $(".days").text(days)
    $(".hours").text(hours)
    $(".minutes").text(minutes)
    $(".seconds").text(seconds)
    seconds--
    if (seconds == 0) {
        minutes--
        seconds = 60
    }
    if (minutes == 0) {
        hours--
        minutes = 59
    }
    if (hours == 0) {
        days--
        hours = 23
    }
    if (days == 0) {
        clearInterval(x)
    }
}, 1000)

// Discount
var y = setInterval(function () {
    $(".fa-plus").css({
        boxShadow: "0px 0px 10px black"
    })
}, 600)
var y = setInterval(function () {
    $(".fa-plus").css({
        boxShadow: "0px 0px 3px gray"
    })
}, 1200)

// Dress Pop-Up

$(document).on('click', '.fa-plus', function () {
    $(".bpic").css({
        display: "flex"
    });
    $(this).removeClass('fa-plus').addClass('fa-minus');
});
$(document).on('click', '.fa-minus', function () {
    $(".bpic").css({
        display: "none"
    });
    $(this).removeClass('fa-minus').addClass('fa-plus');
});

// Part 3: Autumn Sale
$(".readmore").on('click', function () {
    window.location = './shop.html'
});

//Part 4: Latest Products

$(".shopping p").on('click', function () {
    window.location = './shop.html'
});

$(".white").on('click', function () {
    $(".product-3").css({
        backgroundImage: "url('./images/20-1.jpg')"
    })
});
$(".yellow").on('click', function () {
    $(".product-3").css({
        backgroundImage: "url('./images/19-3.jpg')"
    })
});
$(".orange").on('click', function () {
    $(".product-3").css({
        backgroundImage: "url('./images/19-1.jpg')"
    })
});

$("#toprating").on('click', function () {
    $(".latestprs").css({
        display: "none"
    })
    $(".topratings").css({
        display: "flex"
    })
    $("#latestpr").css({
        color: "#7d7d7d"
    })
    $("#toprating").css({
        color: "black"
    })
});
$("#latestpr").on('click', function () {
    $(".latestprs").css({
        display: "flex"
    })
    $(".topratings").css({
        display: "none"
    })
    $("#latestpr").css({
        color: "black"
    })
    $("#toprating").css({
        color: "#7d7d7d"
    })
});

// Summer and Autumn Collection
$(".bagpic").on('click', function () {
    window.location = './shop.html'
});
$(".acol").on('click', function () {
    window.location = './shop.html'
});
$(".stop").on('click', function () {
    window.location = './shop.html'
});

//Part 7: More Products
$(".disc").on('click', function () {
    window.location = './shop.html'
});

// Footer
$(".bgpost").on('click', function () {
    window.location = './blog.html'
});


//Subscribe Email

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

//Subscriber Details
var db = firebase.database().ref("/subscribers");
$('.subscribe').click(function () {
    var useremail = $('.useremail').val();

    db.push({
        emailAddress: useremail,
    }
    );

});

// Products Data 
$('.fa-magnifying-glass-2').on('click', function () {
    sessionStorage.setItem('pr-name', this.dataset.name)
    sessionStorage.setItem('pr-price', this.dataset.price)
    sessionStorage.setItem('pr-img1', this.dataset.img1)
    sessionStorage.setItem('pr-img2', this.dataset.img2)
    window.location = './productsexample.html'
});

$('.bpic').on('click', function () {
    sessionStorage.setItem('pr-name', this.dataset.name)
    sessionStorage.setItem('pr-price', this.dataset.price)
    sessionStorage.setItem('pr-img1', this.dataset.img1)
    sessionStorage.setItem('pr-img2', this.dataset.img2)
    window.location = './productsexample.html'
});


// Wishlist
$(".wlist").on('click', function () {
    window.location = './wishlist.html'
});
// Shopping List
$(".shoplist").on('click', function () {
    window.location = './shoplist.html'
});


if (localStorage.getItem('item')) {
    var newarr = JSON.parse(localStorage.getItem('item'))
    var arr = []
}
else {
    var newarr = []
    var arr = []
}

if (sessionStorage.getItem('login') == 'true') {
    $('.heart-1').on('click', function () {
        var name = this.dataset.name;
        var price = this.dataset.price;
        var img = this.dataset.img1;
        arr.push(name, price, img)
        newarr.push(arr);
        localStorage.setItem('item', JSON.stringify(newarr));
        window.location = './wishlist.html'
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
        localStorage.setItem('shop', JSON.stringify(newarr1));
        window.location = './shoplist.html'
    });
}
if (sessionStorage.getItem('login') !== 'true') {
    $('.fa-basket-shopping').on('click', function () {
        alert('Please Log In to Save Changes!')
    });
}