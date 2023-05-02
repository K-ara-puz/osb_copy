export function itemsScrollAnim() {
    const animItems = document.querySelectorAll('._anim-scroll');
    // console.log(document.querySelector(".account").toString())
    if (animItems.length > 0) {
        animOnScroll(animItems);
        console.log(animItems)
    }
}
function animOnScroll(animItems) {
    for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 5;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((scrollY > animItemOffset - animItemPoint) && scrollY < (animItemOffset + animItemHeight)) {
            animItem.classList.add("_active-anim");
        } else {
            if (!animItem.classList.contains("_anim-no-hide")) {
                animItem.classList.remove("_active-anim");
            }
        }
    }
}
function offset(el) {
    const rect = el.getBoundingClientRect(),
    scrollLeft = window.scrollX || document.documentElement.scrollLeft,
    scrollTop = window.scrollY || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scrollLeft}
}