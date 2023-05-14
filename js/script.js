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

}