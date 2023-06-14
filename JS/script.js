let mood = 'yes'
let span1 = document.getElementsByClassName('span1')[0]
let list1 = document.getElementsByClassName('list')[0]

let list2 = document.getElementsByClassName('list2')[0]
let span2 = document.getElementsByClassName('span2')[0]

let navbar = document.getElementsByClassName('left-con')[0]

list1.classList.add('active-list')
list2.classList.add('active-list')

let arr = [list1, list2]
var home = document.getElementsByClassName('home')[0]



span1.addEventListener('click', function (e) {
    if (e.target) {
        list2.classList.add('active-list')
        list1.classList.toggle('active-list')
    } else {
        list1.classList.add('active-list')


    }

})

span2.addEventListener('click', function (e) {
    if (e.target) {
        list1.classList.add('active-list')
        list2.classList.toggle('active-list')
    } else {
        list2.classList.add('active-list')


    }

})

document.body.addEventListener('click', function (e) {
    if (!navbar.contains(e.target)) {
        list1.classList.add('active-list');
        list2.classList.add('active-list');
    }
});


var list3 = document.getElementsByClassName('list3')[0]
var openList = document.querySelector('.category i')
var category = document.querySelector('.category')


list3.classList.add('active-list')
openList.addEventListener('click', function (e) {

    if (e.target) {
        list3.classList.toggle('active-list')

        list3.style.height = 'max-content'
    }
})

document.body.addEventListener('click', function (e) {
    if (!category.contains(e.target) && !list3.contains(e.target) && !women.contains(e.target) && !phonesList.contains(e.target) && !watchesList.contains(e.target) && !home.contains(e.target)) {
        list3.classList.add('active-list')
    }
})

var search = document.querySelector('.logo input')

search.addEventListener('focus', function () {
    search.style.outline = '2px solid #b4b4ef'
});


document.body.addEventListener('click', function (e) {
    if (!search.contains(e.target)) {
        search.style.outline = 'none'
    }
})



var women = document.getElementsByClassName('women')[0]
var womenbtn = document.getElementsByClassName('wo-list')[0]

var phonbtn = document.getElementsByClassName('phone')[0]
var phonesList = document.getElementsByClassName('phones')[0]

womenbtn.onclick = function () {
    women.classList.remove('women-active2')

    women.classList.toggle('women-active')
}
document.body.addEventListener('click', function (e) {
    if (!women.contains(e.target) && !womenbtn.contains(e.target)) {
        women.classList.remove('women-active')
    }
})


phonbtn.addEventListener('click', function () {
    phonesList.classList.toggle('phone-active')
})

document.body.addEventListener('click', function (e) {
    if (!phonbtn.contains(e.target) && !phonesList.contains(e.target)) {
        phonesList.classList.remove('phone-active')
    }
})


var watchesList = document.getElementsByClassName('watches')[0]
var watchesbtn = document.getElementsByClassName('watch')[0]

watchesbtn.addEventListener('click', function () {
    watchesList.classList.toggle('watch-active')
})


document.body.addEventListener('click', function (e) {
    if (!watchesList.contains(e.target) && !watchesbtn.contains(e.target)) {
        watchesList.classList.remove('watch-active')

    }
})



$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});


var myAccountButton = document.getElementById('acc-nav')
var myAccountList = document.getElementsByClassName('maccount-nav')[0]

myAccountButton.addEventListener('click', function () {
    myAccountList.classList.toggle('my-aa')

})

document.body.addEventListener('click', function (e) {
    if (!myAccountButton.contains(e.target) && !myAccountList.contains(e.target)) {
        myAccountList.classList.remove('my-aa')
    }
})


var womenButton = document.getElementsByClassName('wo-btn')[0]
womenButton.addEventListener('click', function () {
    women.classList.remove('women-active')
    women.classList.toggle('women-active2')
})
document.body.addEventListener('click', function (e) {
    if (!womenButton.contains(e.target) && !women.contains(e.target)) {
        women.classList.remove('women-active2')

    }
})

var box2img = document.querySelector('.box2 img')
var box3img = document.querySelector('.box3 img')
var box4img = document.querySelector('.box4 img')

var box2 = document.querySelector('.box2')
var box3 = document.querySelector('.box3')
var box4 = document.querySelector('.box4')

var qq1 = document.getElementsByClassName('qq')[0]
var qq2 = document.getElementsByClassName('qq')[1]
var qq3 = document.getElementsByClassName('qq')[2]

var ad1 = document.querySelectorAll('.bbox .ad')[0]
var ad2 = document.querySelectorAll('.bbox .ad')[1]
var ad3 = document.querySelectorAll('.bbox .ad')[2]

box2.addEventListener("mouseenter", function () {
    qq1.style.display = 'flex'
    box2img.style.opacity = '.7'


})
box2.addEventListener("mouseleave", function () {
    qq1.style.display = 'none'
    box2img.style.opacity = '1'

})

box3.addEventListener("mouseenter", function () {
    qq2.style.display = 'flex'
    box3img.style.opacity = '.7'
})
box3.addEventListener("mouseleave", function () {
    qq2.style.display = 'none'
    box3img.style.opacity = '1'
})


box4.addEventListener("mouseenter", function () {
    qq3.style.display = 'flex'
    box4img.style.opacity = '.7'
})
box4.addEventListener("mouseleave", function () {
    qq3.style.display = 'none'
    box4img.style.opacity = '1'

})

var arrr = document.getElementsByClassName('arrrr')[0]
var video = document.getElementById('vid')

arrr.addEventListener("mouseenter", function () {
    video.style.display = 'block'
})
arrr.addEventListener("mouseleave", function () {
    video.style.display = 'none'
})
