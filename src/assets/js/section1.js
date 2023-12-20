import gsap from "gsap";
import SplitType from 'split-type';
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);


export function section1() {
    // section1
    gsap.to(".main__image .img", {
        yPercent: -20,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: "#section1",
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true
        }
    });

    // GSAP - title
    const target = gsap.utils.toArray(".split");

    target.forEach(target => {
        let splitClient = new SplitType(target, {
            type: "lines, word, char"
        })
        let lines = splitClient.lines;
        let words = splitClient.words;
        let chars = splitClient.chars;
    });

    gsap.set(".main__title .t1 .char", {
        opacity: 0.6,
        yPercent: 100
    });

    gsap.set(".main__title .t2 .char", {
        opacity: 0.6,
        yPercent: 100
    });
    // scroll
    gsap.set(".scroll", { opacity: 0 })
    gsap.set(".arrow__left", { rotation: 0 })
    gsap.set(".arrow__right", { rotation: 0 })

    gsap.to("#header", { y: -100 });
    gsap.to(".main__image", { width: 0 });
    gsap.to(".main__image .img", { opacity: 0 });

    setTimeout(() => {
        let t1 = gsap.timeline();

        t1.to(".main__title .t1 .char", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.5, stagger: 0.0351, })
        t1.to(".main__title .t2 .char", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.5, stagger: 0.0351, })
        t1.to(".scroll", { opacity: 1 })
        t1.to(".arrow__left", { rotation: 270, })
        t1.to(".arrow__right", { rotation: 402, })
        t1.to("#header", { y: 0 })
        t1.to(".main__image", { width: "100%", ease: "power4.out", duration: 0.5 })
        t1.to(".main__image .img", { opacity: 1, duration: 0.5 })

    }, 1000)
}