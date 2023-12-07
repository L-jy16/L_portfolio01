import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

export function section2() {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
        trigger: "#section2",
        start: "top 50%",
        end: "bottom 20%",
        onEnter: () => {
            document.querySelector('.aboutMe').classList.add('active');
            document.querySelector('.aboutme_En').classList.add('active');
            document.querySelector('.aboutme_ko').classList.add('active');
            document.querySelector('.skill').classList.add('active');
            document.querySelector('.skill_info').classList.add('active');
            document.querySelectorAll('.skill_type_cont').forEach((el) => {
                el.classList.add('active');
            })
        },
        onLeaveBack: () => {
            document.querySelector('.aboutMe').classList.remove('active');
            document.querySelector('.aboutme_En').classList.remove('active');
            document.querySelector('.aboutme_ko').classList.remove('active');
            document.querySelector('.skill').classList.remove('active');
            document.querySelector('.skill_info').classList.remove('active');
            document.querySelectorAll('.skill_type_cont').forEach((el) => {
                el.classList.remove('active');
            })
        },
        markers: false
    })
}