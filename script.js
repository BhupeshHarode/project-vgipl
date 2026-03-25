// PAGE SWITCH
function showPage(pageId) {
    let pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    let activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.style.display = "block";
    }
}

// BACK BUTTON
function goBack(){
    showPage('home'); // change if needed
}

/* RESET ANIMATIONS */
function resetAnimations() {
    document.querySelectorAll(".slide-left, .slide-right").forEach(el => {
        el.classList.remove("show");
    });

    document.querySelectorAll(".reveal").forEach(el => {
        el.classList.remove("active");
    });
}

/* SCROLL REVEAL */
function revealOnScroll() {
    const windowHeight = window.innerHeight;

    document.querySelectorAll(".reveal").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < windowHeight - 100){
            el.classList.add("active");
        }
    });

    document.querySelectorAll(".slide-left, .slide-right").forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if(pos < windowHeight - 120){
            el.classList.add("show");
        }
    });
}

// SCROLL EVENT
window.addEventListener("scroll", revealOnScroll);
window.onload = function(){
document.querySelector(".hero").classList.add("start");

/* start intro typing */
type();}

/* PAGE LOAD */
window.addEventListener("load", function(){
    resetAnimations();
    revealOnScroll();

    // default page
    showPage('home'); // ⚠️ make sure home id exists
});