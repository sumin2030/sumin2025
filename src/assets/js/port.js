import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
 
export function port() {
    gsap.registerPlugin(ScrollTrigger);
    
    // #port 요소가 존재하는지 확인
    const portElement = document.querySelector("#port");
    if (!portElement) {
        console.warn("Element not found: #port");
        return;
    }
    
    const horSection = gsap.utils.toArray(".port__item");
    if (horSection.length === 0) {
        console.warn("No port items found");
        return;
    }
    
    // #port_wrap_area 요소가 존재하는지 확인
    const portWrapArea = document.querySelector("#port_wrap_area");
    if (!portWrapArea) {
        console.warn("Element not found: #port_wrap_area");
        return;
    }
 
    gsap.to(horSection, {
        xPercent: -120 * (horSection.length - 4),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: () => "+=" + portWrapArea.offsetWidth,
            pin: true,
            scrub: 0.5,
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}
 