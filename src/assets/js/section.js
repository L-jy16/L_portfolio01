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

    // // section2

    // let a1;

    // gsap.set(".aboutme_En.split.a1 .line, .skill_info.split.a3 .line", {
    //     opacity: 0,
    // })

    // // gsap.set(".aboutme_ko.split.a2, .info_box.split.a4, .info_box.split.a5, .info_box.split.a6,.info_box.split.a7", {
    // //     opacity: 0.6,
    // //     yPercent: 200
    // // });

    // gsap.set(".aboutme__ko__img.a2, .info_box.split.a4, .info_box.split.a5, .info_box.split.a6,.info_box.split.a7", {
    //     opacity: 0.6,
    //     yPercent: 200
    // });

    // setTimeout(() => {
    //     a1 = gsap.timeline({ paused: true });

    //     a1.to(".aboutme_En.split.a1 .line", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, })
    //     // a1.to(".aboutme_ko.split.a2", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //     a1.to(".aboutme__ko__img.a2.a2", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //     a1.to(".skill_info.split.a3 .line", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, })
    //     a1.to(".info_box.split.a4", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //     a1.to(".info_box.split.a5", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //     a1.to(".info_box.split.a6", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //     a1.to(".info_box.split.a7", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    // }, 1000)


    // ScrollTrigger.create({
    //     trigger: "#section2",
    //     start: "top 50%",
    //     end: "bottom 20%",
    //     onEnter: () => {
    //         document.querySelector('.aboutMe').classList.add('active');
    //         document.querySelector('.aboutme_En').classList.add('active');
    //         // document.querySelector('.aboutme_ko').classList.add('active');
    //         document.querySelector('.aboutme__ko__img').classList.add('active');
    //         document.querySelector('.skill').classList.add('active');
    //         document.querySelector('.skill_info').classList.add('active');
    //         document.querySelectorAll('.skill_type_cont').forEach((el) => {
    //             el.classList.add('active');
    //         });
    //         a1.play();
    //     },
    //     onLeaveBack: () => {
    //         document.querySelector('.aboutMe').classList.remove('active');
    //         document.querySelector('.aboutme_En').classList.remove('active');
    //         // document.querySelector('.aboutme_ko').classList.remove('active');
    //         document.querySelector('.aboutme__ko__img').classList.remove('active');
    //         document.querySelector('.skill').classList.remove('active');
    //         document.querySelector('.skill_info').classList.remove('active');
    //         document.querySelectorAll('.skill_type_cont').forEach((el) => {
    //             el.classList.remove('active');
    //         });
    //         a1.reverse();
    //     },
    //     markers: false
    // })

    // section3

    // // desc 숨긴거 오버시 보여주기
    // let desc = document.querySelectorAll(".work_site");

    // desc.forEach(descitem => {
    //     descitem.addEventListener("mouseover", function () {
    //         this.querySelector(".desc").style.display = "block"
    //     })
    //     descitem.addEventListener("mouseout", function () {
    //         this.querySelector(".desc").style.display = "none"
    //     })
    // })

    // // 가로형 모드
    // gsap.registerPlugin(ScrollTrigger);
    // const horSection = gsap.utils.toArray(".work_site");

    // gsap.to(horSection, {
    //     xPercent: -120 * (horSection.length - 1),
    //     ease: "none",
    //     scrollTrigger: {
    //         trigger: "#section3",
    //         start: "top top",
    //         end: "+=3000",
    //         pin: true,
    //         scrub: 1,
    //         // markers: true,
    //         invalidateOnRefresh: true,
    //         anticipatePin: 1,
    //     }
    // });

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