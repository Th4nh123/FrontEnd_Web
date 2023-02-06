window.onresize = function () { closeFunction() };
window.onscroll = function () { scrollFunction() };

function closeFunction() {
    if (window.innerWidth < 768) {
        $('header').css("top", "82px")
    }
    else {
        $('header').css("top", "45px")
    }
}

setInterval(() => {
    if (window.innerWidth < 768) {
        $(".nav-link").css("color","white");
    }
    else {
        $(".nav-link").css("color","black");;
    }
}, 1000);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        $('header').css("top", "0px")
    } else {
        if (window.innerWidth < 760) {
            $('header').css("top", "82px")
        }
        else {
            $('header').css("top", "45px")
        }
    }
}