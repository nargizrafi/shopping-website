//Firebase
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


//Comment
var db = firebase.database().ref();
const database = firebase.database();
const commentsRef = database.ref("comments");


$('.postcomment').click(function () {
    var senderemail = $('.email').val();
    var sendername = $('.name').val();
    var website = $('.website').val();
    var comments = $('textarea').val();

    commentsRef.push({
        email: senderemail,
        name: sendername,
        website: website,
        comment: comments,
    }
    );


    $('.email').val('')
    $('.name').val('')
    $('.website').val('')
    $('textarea').val('')
});

commentsRef.on('child_added', function (snapshot) {
    const comment = snapshot.val();
    var commented = $('<div class="commented"></div>')
    var fullc = commented.html(`<h4>${comment.name}</h4><p>${comment.comment}</p>`)
    $('.comment').append(fullc)
})

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
//Title
$(".linked").on('click', function () {
    window.location = './index.html'
});

// Blogs
$(".cat-1").on('click', function () {
    $(".post-1").css({
        display: 'none'
    })
    $(".post-2").css({
        display: 'flex'
    })
    $(".post-3").css({
        display: 'none'
    })
    $(".post-4").css({
        display: 'none'
    })
    $(".post-5").css({
        display: 'none'
    })
    $(".post-6").css({
        display: 'flex'
    })

});
$(".cat-2").on('click', function () {
    $(".post-1").css({
        display: 'none'
    })
    $(".post-2").css({
        display: 'none'
    })
    $(".post-3").css({
        display: 'none'
    })
    $(".post-4").css({
        display: 'flex'
    })
    $(".post-5").css({
        display: 'none'
    })
    $(".post-6").css({
        display: 'none'
    })

});
$(".cat-3").on('click', function () {
    $(".post-1").css({
        display: 'flex'
    })
    $(".post-2").css({
        display: 'flex'
    })
    $(".post-3").css({
        display: 'none'
    })
    $(".post-4").css({
        display: 'flex'
    })
    $(".post-5").css({
        display: 'none'
    })
    $(".post-6").css({
        display: 'none'
    })

});
$(".cat-4").on('click', function () {
    $(".post-1").css({
        display: 'flex'
    })
    $(".post-2").css({
        display: 'none'
    })
    $(".post-3").css({
        display: 'flex'
    })
    $(".post-4").css({
        display: 'none'
    })
    $(".post-5").css({
        display: 'none'
    })
    $(".post-6").css({
        display: 'none'
    })

});
$(".cat-5").on('click', function () {
    $(".post-1").css({
        display: 'none'
    })
    $(".post-2").css({
        display: 'none'
    })
    $(".post-3").css({
        display: 'flex'
    })
    $(".post-4").css({
        display: 'flex'
    })
    $(".post-5").css({
        display: 'flex'
    })
    $(".post-6").css({
        display: 'none'
    })

});
$(".cat-6").on('click', function () {
    $(".post-1").css({
        display: 'none'
    })
    $(".post-2").css({
        display: 'none'
    })
    $(".post-3").css({
        display: 'none'
    })
    $(".post-4").css({
        display: 'none'
    })
    $(".post-5").css({
        display: 'none'
    })
    $(".post-6").css({
        display: 'flex'
    })

});
$(".cat-7").on('click', function () {
    $(".post-1").css({
        display: 'flex'
    })
    $(".post-2").css({
        display: 'flex'
    })
    $(".post-3").css({
        display: 'flex'
    })
    $(".post-4").css({
        display: 'flex'
    })
    $(".post-5").css({
        display: 'flex'
    })
    $(".post-6").css({
        display: 'flex'
    })

});
$(".bgpost1").on('click', function () {
    window.location = './postsample.html'
});
// Footer
$(".bgpost").on('click', function () {
    window.location = './blog.html'
});


// Wishlist
$(".wlist").on('click', function () {
   window.location='./wishlist.html'
});
$(".shoplist").on('click', function () {
    window.location='./shoplist.html'
 });
 
