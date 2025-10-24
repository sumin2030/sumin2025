import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
    smooth();
    link();
    menu();
    
    // 메인 페이지에서만 port 함수 실행
    if (window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '') {
        port();
    }
});