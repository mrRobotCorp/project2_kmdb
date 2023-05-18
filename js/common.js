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

    // --------------- register ---------------
    const rg = document.querySelector(".toRegister");
    let rgAnsw;

    rg.onclick = function() {
        rgAnsw = confirm("한국영상자료원 회원이 되시면 하나의 통합된 회원 ID와 비밀번호로 \n한국영상자료원과 KMDb의 서비스를 모두 이용하실 수 있습니다.\n통합 회원가입 하시겠습니까?");
        console.log(rgAnsw);
        if(rgAnsw == true) {
            window.location.replace('https://www.koreafilm.or.kr/member/main');
        } else {
            window.location.replace('register.html');
        }
    }


    
}