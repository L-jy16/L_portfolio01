import gsap from "gsap";
import SplitType from 'split-type';
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export function section() {
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

    // section2

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

    // section3
    let currentIndex = 0;
    const marqueeWrap = document.querySelector(".marquee")
    const marquee_heading_Clone = marqueeWrap.firstElementChild.cloneNode(true);
    marqueeWrap.appendChild(marquee_heading_Clone);

    const marquee_heading = document.querySelectorAll(".marquee .marquee-heading");

    setInterval(() => {
        currentIndex++;

        gsap.to(marquee_heading, {
            duration: 3,
            x: -200,
            scrollTrigger: {
                trigger: marqueeWrap,
                start: "top 50%",
                end: "bottom 20%",
                scrub: true
            }
        });

        if (currentIndex == 6) {
            setTimeout(() => {

                gsap.to(marquee_heading, {
                    duration: 0,
                    x: 0,
                    scrollTrigger: {
                        trigger: marqueeWrap,
                        start: "top 50%",
                        end: "bottom 20%",
                        scrub: true
                    }
                });
                currentIndex = 0;
            }, 700)
        }
    }, 3000)

    // section3 이미지 youtube
    gsap.to("#youtube", {
        yPercent: 20,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".work_info.i1",
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true
        }
    });
    gsap.to("#myuduck", {
        yPercent: 20,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".work_info.i2",
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true
        }
    });

    gsap.to("#movie", {
        yPercent: 20,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".work_info.i3",
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true
        }
    });

    gsap.to("#blog", {
        yPercent: 20,
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
            trigger: ".work_info.i4",
            start: "top bottom",
            end: "bottom top",
            markers: false,
            scrub: true
        }
    });

    // section4
    let s0;

    gsap.set(".script_title.split.s0 .line", {
        opacity: 0,
    });
    gsap.set(".box.s1, .box.s2, .box.s3, .box.s4, .box.s5", {
        opacity: 0.6,
        yPercent: 200
    });

    setTimeout(() => {
        s0 = gsap.timeline({ paused: true });

        s0.to(".script_title.split.s0 .line", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.7, stagger: 0.0351, })
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