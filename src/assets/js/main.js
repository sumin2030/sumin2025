import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import skillVideo01 from "../video/skill.m.01.mp4";
import skillVideo02 from "../video/skill.m.02.mp4";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    
    // 메인 페이지에서만 port 함수 실행
    if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '') {
        port();
    }

    const skillSection = document.querySelector("#skill");
    const skillVideos = skillSection ? skillSection.querySelectorAll("video") : [];

    if (skillSection && skillVideos.length) {
        // 초기 상태: 섹션 내 모든 영상은 멈추고 프레임을 0으로 맞춤
        skillVideos.forEach((video) => {
            video.muted = true;
            video.playsInline = true;
            video.pause();
            video.currentTime = 0;
        });

        const isMobile = window.matchMedia && window.matchMedia("(max-width: 768px)").matches;

        const skillItems = skillSection.querySelectorAll(".skill__item");
        const skillVideoSourceMap = {
            skill01: skillVideo01,
            skill02: skillVideo02,
        };

        const ensureVideoSourceLoaded = (video) => {
            const source = video.querySelector("source[data-video-key]");
            if (!source) return;

            const videoKey = source.getAttribute("data-video-key");
            const resolvedSrc = skillVideoSourceMap[videoKey];
            if (!resolvedSrc) return;

            source.setAttribute("src", resolvedSrc);
            source.removeAttribute("data-video-key");
            video.load();
        };

        // skill 섹션 전체가 이탈/재진입할 때만 전체 영상 시간을 리셋합니다.
        let isSkillActive = false;
        const skillSectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.target !== skillSection) return;

                    if (entry.isIntersecting && !isSkillActive) {
                        isSkillActive = true;
                        skillVideos.forEach((video) => {
                            video.pause();
                            video.currentTime = 0;
                        });
                    } else if (!entry.isIntersecting && isSkillActive) {
                        isSkillActive = false;
                        skillVideos.forEach((video) => {
                            video.pause();
                            video.currentTime = 0;
                        });
                    }
                });
            },
            {
                threshold: isMobile ? 0.01 : 0.05,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        // 각 skill item이 실제로 화면에 들어올 때만 해당 영상만 로드/재생합니다.
        // (모바일에서 contact/footer까지 내릴 때 skill로 튀는 현상 방지)
        const itemObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const item = entry.target;
                    const video = item.querySelector("video");
                    if (!video) return;

                    const rect = entry.boundingClientRect;
                    const inViewport =
                        rect.top < window.innerHeight * 0.9 && rect.bottom > window.innerHeight * 0.1;
                    const ratioOk = entry.intersectionRatio >= (isMobile ? 0.15 : 0.05);

                    if (entry.isIntersecting && inViewport && ratioOk) {
                        ensureVideoSourceLoaded(video);
                        const playPromise = video.play();
                        if (playPromise && typeof playPromise.catch === "function") {
                            playPromise.catch(() => {});
                        }
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: isMobile ? [0, 0.15] : [0, 0.05],
                rootMargin: "0px 0px -20% 0px",
            }
        );

        skillSectionObserver.observe(skillSection);
        skillItems.forEach((item) => itemObserver.observe(item));
    }
});