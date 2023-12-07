export function menu() {
    const menu_btn = document.querySelector(".main_menu_btn")
    const menu = document.querySelector(".main_menu_btn_text");
    const M_menu = document.querySelector(".mobile_menu");
    const closeBtn = document.querySelector(".menu__close");
    const nav = document.querySelector(".nav");

    menu_btn.addEventListener("mouseover", function () {
        menu.style.marginTop = "-3.2vw";
        menu.style.transition = "all 0.3s"
    })

    menu_btn.addEventListener("mouseout", function () {
        menu.style.marginTop = "0vw";
    })

    //  메뉴 클릭
    menu_btn.addEventListener("click", () => {
        nav.classList.add("menu_show")
    })
    closeBtn.addEventListener("click", () => {
        nav.classList.remove("menu_show")
    })

    M_menu.addEventListener("click", () => {
        if (nav.classList.contains("menu_show")) {
            nav.classList.remove("menu_show");
        } else {
            nav.classList.add("menu_show");
        }
    })

    // 메뉴 안의 버튼 클릭시 이동
    document.querySelectorAll(".nav a").forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                nav.classList.remove("menu_show");
            }
        })
    })
}