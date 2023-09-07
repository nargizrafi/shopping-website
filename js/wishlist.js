// Products Data 
if (localStorage.getItem('item')) {
    var counter = 0
    var arr = JSON.parse(localStorage.getItem('item'))
    for (let i = 0; i < arr.length; i++) {
        var section = $('<div class="wishitem" style="width:98%; height: 80px; border: 1px solid black;display: flex;align-items: center; padding: 0 10px; justify-content: space-between;"></div>')
        section.addClass('new' + counter)
        var left = $('<div class="wleft" style="display: flex; gap: 5px; width: 65%; align-items: center;"></div>')
        section.append(left)
        var right = $(' <button class="addcart" style="cursor: pointer; border: none; outline: none; background-color: #222222; font-size: 0.7em; color: white;padding: 10px 15px;">ADD TO CART</button>')
        section.append(right)
        var xcon = $(' <i class="fa-solid fa-xmark delete" style="cursor: pointer;"></i>')
        xcon.addClass('newcon')
        xcon.attr('data-count', counter)
        left.append(xcon)
        var imgs = $('<img src="" width="85px" height="75px">')
        imgs.addClass('newimg')
        imgs.attr('src', arr[i][2])
        left.append(imgs)
        var text = $('<div class="wtxt" style="display: flex;flex-direction: column;justify-content: center;"></div>')
        left.append(text)
        var h6 = $('<h6>').text(arr[i][0])
        h6.addClass('newh6')
        text.append(h6)
        var p = $('<p>').text(arr[i][1])
        p.addClass('newp')
        text.append(p)
        $('.wishitems').append(section)
        counter++
    }
}
$(document).on('click', '.newcon', function () {
    var count = this.dataset.count

    console.log(arr.splice(count, 1))
    localStorage.setItem('item', JSON.stringify(arr))
    $('.new' + count).remove()
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

$(".linked").on('click', function () {
    window.location = './index.html'
});
$(".shoplist").on('click', function () {
    window.location = './shoplist.html'
});

// Footer
$(".bgpost").on('click', function () {
    window.location = './blog.html'
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
    $('.addcart').on('click', function () {
        var name = $('.newh6').text()
        var price = $('.newp').text()
        var img = $('.newimg').attr('src')
        arr1.push(name, price, img)
        newarr1.push(arr1);
        localStorage.setItem('shop', JSON.stringify(newarr1));
        window.location = './shoplist.html'
    });
}
if (sessionStorage.getItem('login') !== 'true') {
    $('.addcart').on('click', function () {
        alert('Please Log In to Save Changes!')
    });
}