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
        // 초기 진입 시 자동 재생 방지: 섹션이 보일 때만 시작
        skillVideos.forEach((video) => {
            video.muted = true;
            video.playsInline = true;
            video.pause();
            video.currentTime = 0;
        });
        let isSkillSectionVisible = false;
        const skillVideoSourceMap = {
            skill01: skillVideo01,
            skill02: skillVideo02,
        };

        const ensureVideoSourceLoaded = (video) => {
            const source = video.querySelector("source[data-video-key]");
            if (source) {
                const videoKey = source.getAttribute("data-video-key");
                const resolvedSrc = skillVideoSourceMap[videoKey];

                if (resolvedSrc) {
                    source.setAttribute("src", resolvedSrc);
                    source.removeAttribute("data-video-key");
                    video.load();
                }
            }
        };

        const skillVideoObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isSkillSectionVisible) {
                        isSkillSectionVisible = true;
                        skillVideos.forEach((video) => {
                            ensureVideoSourceLoaded(video);
                            video.currentTime = 0;
                            const playPromise = video.play();
                            if (playPromise && typeof playPromise.catch === "function") {
                                playPromise.catch(() => {});
                            }
                        });
                    } else if (!entry.isIntersecting && isSkillSectionVisible) {
                        isSkillSectionVisible = false;
                        skillVideos.forEach((video) => {
                            video.pause();
                            video.currentTime = 0;
                        });
                    }
                });
            },
            {
                // 큰 섹션에서도 반응형으로 안정적으로 감지되도록 완화
                threshold: 0.05,
                rootMargin: "0px 0px -10% 0px",
            }
        );

        skillVideoObserver.observe(skillSection);
    }
});