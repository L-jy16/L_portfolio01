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

    // let a1;



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

    // swiper

    let swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        mousewheel: {
            enabled: true,
        },
    });

    // Swiper의 슬라이드 개수
    const slideCount = swiper.slides.length;

    // Swiper 슬라이드의 너비
    const slideWidth = swiper.slides[0].offsetWidth;

    ScrollTrigger.create({
        trigger: "#section3",
        start: "top top",
        end: `+=${(slideCount - 1) * slideWidth}`,
        pin: true,
    })


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

    //     let s0;

    //     gsap.set(".script_title.split.s0 .line", {
    //         opacity: 0,
    //     });
    //     gsap.set(".box.s1, .box.s2, .box.s3, .box.s4, .box.s5", {
    //         opacity: 0.6,
    //         yPercent: 200
    //     });

    //     setTimeout(() => {
    //         s0 = gsap.timeline({ paused: true });

    //         s0.to(".script_title.split.s0 .line", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.7, stagger: 0.0351, })
    //         s0.to(".box.s1", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //         s0.to(".box.s2", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //         s0.to(".box.s3", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //         s0.to(".box.s4", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //         s0.to(".box.s5", { opacity: 1, yPercent: 0, ease: "power4.out", duration: 0.8, stagger: 0.0351, }, "-=0.5")
    //     }, 1000)

    //     ScrollTrigger.create({
    //         trigger: "#section4",
    //         start: "top 50%",
    //         end: "bottom 20%",
    //         onEnter: () => s0.play(),
    //         onLeaveBack: () => s0.reverse(),
    //         markers: false
    //     })

    const ScriptWrap = document.querySelector(".script_type");
    const Image = document.querySelector(".script_img");
    const ScriptImg = Image.getBoundingClientRect();

    gsap.set(Image, {
        autoAlpha: 0,
        // width: 0,
        // height: 0,
        // ease: "Power2.easeOut",
    });

    ScriptWrap.addEventListener("mouseover", (e) => {
        const imageSrc = e.target.querySelector("img")?.getAttribute("data-src");

        if (imageSrc) {
            Image.src = imageSrc;

            const xMovement = Math.min(Math.max(parseInt(e.movementX), -30), 30);
            const yMovement = Math.min(Math.max(parseInt(e.movementY), -30), 30);

            gsap.to(Image, {
                autoAlpha: 1,
                width: 250,
                height: 200,
                x: e.clientX - ScriptImg.left,
                y: e.clientY - ScriptImg.top - ScriptImg.height / 2,
                transformOrigin: "center",
                rotation: xMovement,
                skewX: xMovement,
                skewY: yMovement,
                // ease: "Power2.easeOut",
            });
        }
    });
    ScriptWrap.addEventListener("mouseout", () => {
        gsap.to(Image, {
            autoAlpha: 0,
            width: 0,
            height: 0,
            // ease: "Power2.easeOut",
        });
    });


}