import gsap from "gsap";
import SplitType from 'split-type';
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export function section4() {
    // section4

    const target4 = gsap.utils.toArray(".split4");

    let s0;

    target4.forEach(target => {
        let splitClient = new SplitType(target4, {
            type: "lines, word, char"
        })
    });

    gsap.set(".script_title.split4.s0 .line", {
        opacity: 0,
    });
    gsap.set(".box.s1, .box.s2, .box.s3, .box.s4, .box.s5", {
        opacity: 0.6,
        yPercent: 200
    });

    setTimeout(() => {
        s0 = gsap.timeline({ paused: true });

        s0.to(".script_title.split4.s0 .line", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.7, stagger: 0.0351, })
        s0.to(".box.s1", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        s0.to(".box.s2", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        s0.to(".box.s3", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        s0.to(".box.s4", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
        s0.to(".box.s5", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    }, 1000)

    ScrollTrigger.create({
        trigger: "#section4",
        start: "top 50%",
        end: "bottom 20%",
        onEnter: () => s0.play(),
        onLeaveBack: () => s0.reverse(),
        markers: false
    })
}