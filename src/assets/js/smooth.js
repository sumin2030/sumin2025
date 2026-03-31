import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
 
export function smooth() {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
 
    function raf(time) {
        lenis.raf(time)
        // Lenis로 스크롤이 부드럽게 이동될 때도
        // ScrollTrigger(pin/scrub) 동작이 같은 스크롤 값을 기준으로 동기화되도록 갱신
        ScrollTrigger.update();
        requestAnimationFrame(raf);
    }
 
    requestAnimationFrame(raf);
 
    lenis.on("scroll", (e) => {
        // 디버그용 로그 제거
    })
}
 