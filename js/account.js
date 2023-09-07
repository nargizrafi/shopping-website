if(sessionStorage.getItem('login')=='true'){
    var  fd=  $('<div class="fd" style="width:100%;height:100%;font-size:3em;color:black;display:flex;align-items:center;justify-content:center;text-align:center">You have logged in successfully.</div>')
    $('.main').text('')
    $('.main').prepend(fd)
}



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
// Footer
$(".bgpost").on('click', function () {
    window.location = './blog.html'
});

// Account Login 

$(".registered").on('click', function () {
    if (localStorage.getItem('email') !== $('#email').val()) {
        localStorage.setItem('email', $('#email').val())
        localStorage.setItem('password', $('#paswd').val())
        var ndiv =  $('<div style="width:100%;position:absolute;top:0;background-color:gray;color:white;display:flex;align-items:center;justify-content:center;text-align:center">Log In Now !</div>')
        $('.account2').append(ndiv)
    }
    else if($('#email').val()==localStorage.getItem('email')) {
        var newdiv =  $('<div style="width:100%;position:absolute;top:0;background-color:gray;color:white;display:flex;align-items:center;justify-content:center;text-align:center">You have already registered</div>')
        $('.account2').append(newdiv)
        $('#email').val('')
        $('#paswd').val('')
       
    }
});
$(".signin").on('click', function () {
    if (localStorage.getItem('email') == $('#name').val() && localStorage.getItem('password') == $('#password').val() ) {
        sessionStorage.setItem('login',true)
        var welcdiv =  $('<div class="welcdiv" style="width:100%;height:100%;font-size:3em;color:black;display:flex;align-items:center;justify-content:center;text-align:center">Welcome back !</div>')
        $('#name').val('')
        $('#password').val('')
        $('.maintop').prepend(welcdiv)
        
    }
    else{
        var alertdiv =  $('<div style="width:100%;position:absolute;top:0;background-color:gray;color:white;display:flex;align-items:center;justify-content:center;text-align:center">Wrong Email or Password !</div>')
        $('.account').append(alertdiv)
        $('#name').val('')
        $('#password').val('') 
    }
});

// Wishlist
$(".wlist").on('click', function () {
   window.location='./wishlist.html'
});
$(".shoplist").on('click', function () {
    window.location='./shoplist.html'
 });
 




