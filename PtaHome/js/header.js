setInterval(() => {
    if (window.innerWidth < 992) {
        $(".nav-link").css("color", "white");
        $(".dropdown-navbar").addClass("bg-dark");
        $(".dropdown-navbar").removeClass("bg-light");
        $(".dropdown-item").addClass("text-light");
    }
    else {
        $(".nav-link").css("color", "black");
        $(".dropdown-navbar").addClass("bg-light");
        $(".dropdown-navbar").removeClass("bg-dark");
        $(".dropdown-item").removeClass("text-light");
        // $(".dropdown-item").css("color", "black");
        // $(".dropdown-item").removeClass("text-light");
    }
}, 1000);
