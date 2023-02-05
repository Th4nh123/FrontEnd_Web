window.onclose = function () { closeFunction() };
window.onscroll = function () { scrollFunction() };
function closeFunction() {
    if (window.innerWidth < 768) {
        $('header').css("top", "82px")
        $('main').css("marginTop", "2022px")
    }
    else {
        $('header').css("top", "45px")
        $('main').css("marginTop", "90px")
    }
}
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