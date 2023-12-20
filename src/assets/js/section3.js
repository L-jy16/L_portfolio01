import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


export function section3() {
    // section3

    const ani = gsap.timeline();
    ani
        .to("#section3 .site1", { autoAlpha: 0, duration: 1, y: 0, scale: 0.8 })
        .from("#section3 .site2", { autoAlpha: 0, duration: 1, y: 100 }, "-=0.5")
        .to("#section3 .site2", { autoAlpha: 0, duration: 1, y: 0, scale: 0.8 })
        .from("#section3 .site3", { autoAlpha: 0, duration: 1, y: 100 }, "-=0.5")
        .to("#section3 .site3", { autoAlpha: 0, duration: 1, y: 0, scale: 0.8 })
        .from("#section3 .site4", { autoAlpha: 0, duration: 1, y: 100 }, "-=0.5")
        .to("#section3 .site4", { autoAlpha: 0, duration: 1, y: 0, scale: 0.8 })
        .from("#section3 .site5", { autoAlpha: 0, duration: 1, y: 100 }, "-=0.5")
        .to("#section3 .site5", { autoAlpha: 0, duration: 1, y: 0, scale: 0.8 })
        .from("#section3 .site6", { autoAlpha: 0, duration: 1, y: 100 }, "-=0.5");

    // 기본 트리거
    ScrollTrigger.create({
        animation: ani,
        trigger: "#section3",
        start: "top top",
        end: "+=1000",
        scrub: true,
        pin: true,
    });
}