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

    // section3

    // 07 : 텍스트 제자리 애니메이션
    const ani = gsap.timeline();
    ani
        // .from("#section3 .site1", { autoAlpha: 1, duration: 0.5, y: 0 }, "+=3")
        .to("#section3 .site1", { autoAlpha: 0, duration: 0.5, y: 0, scale: 0.8 })
        .from("#section3 .site2", { autoAlpha: 0, duration: 0.5, y: 100 }, "-=0.5")
        .to("#section3 .site2", { autoAlpha: 0, duration: 0.5, y: 0, scale: 0.8 })
        .from("#section3 .site3", { autoAlpha: 0, duration: 0.5, y: 100 }, "-=0.5")
        .to("#section3 .site3", { autoAlpha: 0, duration: 0.5, y: 0, scale: 0.8 })
        .from("#section3 .site4", { autoAlpha: 0, duration: 0.5, y: 100 }, "-=0.5")
        .to("#section3 .site4", { autoAlpha: 0, duration: 0.5, y: 0, scale: 0.8 })
        .from("#section3 .site5", { autoAlpha: 0, duration: 0.5, y: 100 }, "-=0.5")
        .to("#section3 .site5", { autoAlpha: 0, duration: 0.5, y: 0, scale: 0.8 })
        .from("#section3 .site6", { autoAlpha: 0, duration: 0.5, y: 100 }, "-=0.5");
    ScrollTrigger.create({
        animation: ani,
        trigger: "#section3",
        start: "top top",
        end: "+=6000",
        scrub: true,
        pin: true,

    });


    // section4

    const ScriptWrap = document.querySelector(".script_type");
    const Image = document.querySelector(".script_img");
    const ScriptImg = Image.getBoundingClientRect();

    ScriptWrap.addEventListener("mousemove", (e) => {
        const imageSrc = e.target.querySelector("img")?.getAttribute("data-src");

        if (imageSrc) {
            Image.src = imageSrc;

            const xMovement = Math.min(Math.max(parseInt(e.movementX), -20), 20);
            const yMovement = Math.min(Math.max(parseInt(e.movementY), -20), 20);

            gsap.to(Image, {
                autoAlpha: 1,
                x: e.clientX - ScriptImg.left,
                y: e.clientY - ScriptImg.top - ScriptImg.height / 2,
                transformOrigin: "center",
                rotation: xMovement,
                skewX: xMovement,
                skewY: yMovement
            });
        } else {
            Image.src = "";

            gsap.set(Image, {
                autoAlpha: 0
            });
        }
    });


    // gsap.set(Image, {
    //     autoAlpha: 0,
    //     width: 0,
    //     height: 0,
    //     ease: "Power2.easeOut",
    // });

    // ScriptWrap.addEventListener("mouseover", (e) => {
    //     const imageSrc = e.target.querySelector("img")?.getAttribute("data-src");

    //     // console.log("Image source:", imageSrc);

    //     if (imageSrc) {
    //         Image.src = imageSrc;

    //         const xMovement = Math.min(Math.max(parseInt(e.movementX), -20), 20);
    //         const yMovement = Math.min(Math.max(parseInt(e.movementY), -20), 20);

    //         gsap.to(Image, {
    //             x: e.clientX - ScriptImg.left,
    //             y: e.clientY - ScriptImg.top - ScriptImg.height / 2,
    //             transformOrigin: "center",
    //             rotation: xMovement,
    //             skewX: xMovement,
    //             skewY: yMovement,
    //             ease: "Power2.easeOut",
    //         });
    //     }
    // });
    // ScriptWrap.addEventListener("mouseout", () => {
    //     gsap.to(Image, {
    //         autoAlpha: 0,
    //         width: 0,
    //         height: 0,
    //         ease: "Power2.easeOut",
    //     });
    // });


}