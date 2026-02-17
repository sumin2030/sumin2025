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

    // 전체 카드가 모두 지나간 뒤에야 아래로 스크롤되도록
    // 컨테이너 전체 너비 기준으로 스크롤 거리 계산
    const totalScrollWidth = () =>
        portWrapArea.scrollWidth - portElement.clientWidth;

    gsap.to(portWrapArea, {
        x: () => -totalScrollWidth(),
        ease: "none",
        scrollTrigger: {
            trigger: "#port",
            start: "top 56px",
            end: () => "+=" + totalScrollWidth(),
            pin: true,          // port 섹션 고정
            scrub: 0.5,         // 스크롤과 애니메이션 동기화
            markers: false,
            invalidateOnRefresh: true,
            anticipatePin: 1,
        },
    });
}
 