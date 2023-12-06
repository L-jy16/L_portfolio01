import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"

export function section3() {
    gsap.registerPlugin(ScrollTrigger);

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
}