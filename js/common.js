window.onload = function() {
    // ------------------- hamburger menu -----------------------------
    let triggerMenu = document.querySelector("#menuBtn");
    let gnbMenu = document.querySelector(".gnbWrapAll");

    triggerMenu.onclick = function() {
        gnbMenu.style.transition = "all .5s"
        triggerMenu.classList.toggle("open");
        this.classList.toggle("active");
        gnbMenu.classList.toggle("active");
    };

    // ---------- scrollTop -------------------
    const scrollTop = document.querySelector("#scrollTop");
    scrollTop.onclick = function() {
        window.scrollTo({
            top : 0,
            left : 0,
            behavior : 'smooth'
        });
    }


    
}