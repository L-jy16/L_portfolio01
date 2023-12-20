import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


export function section2() {
    // section2

    let i1;

    gsap.set(".aboutMe__En.split.i1 .word", {
        opacity: 0.3,
    })

    gsap.set(".skill__detail.img", {
        opacity: 0,
    })

    gsap.set(".infoBox.i2, .infoBox.i3, .infoBox.i4, .infoBox.i5, .infoBox.i6, .infoBox.i7", {
        opacity: 0.6,
        yPercent: 200
    });

    setTimeout(() => {
        i1 = gsap.timeline({ paused: true });

        i1.to(".aboutMe__En.split.i1 .word", { opacity: 1, ease: "power1.out", duration: 0.2, stagger: 0.1, })
        i1.to(".skill__detail.img", { opacity: 1, ease: "power1.out", duration: 0.4, stagger: 0.1, })
        i1.to(".infoBox.i2", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        i1.to(".infoBox.i3", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        i1.to(".infoBox.i4", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        i1.to(".infoBox.i5", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        i1.to(".infoBox.i6", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        i1.to(".infoBox.i7", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    }, 1000)


    ScrollTrigger.create({
        trigger: "#section2",
        start: "top center",
        end: "+=100%",
        onEnter: () => i1.play(),
        onLeaveBack: () => i1.reverse(),
        markers: false,
        ease: "Power2.easeOut",
    })
}