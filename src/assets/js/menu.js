export function menu() {
  
    const headerToggle = document.getElementById("headerToggle");
    const headerNav = document.querySelector(".header__nav");

    if (headerToggle) {
        console.log("헤더토굴!")

        headerToggle.addEventListener("click", () => {


            console.log("누군가 클릭함!!")



            headerNav.classList.toggle("show");
            headerToggle.getAttribute("aria-expanded") === "true"
                ? headerToggle.setAttribute("aria-expanded", "false")
                : headerToggle.setAttribute("aria-expanded", "true");
        });
    }

}