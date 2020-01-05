
function isVisible(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

function checkElements() {
    let elements = document.getElementsByClassName("anim")
    for (let i = 0; i < elements.length; ++i) {
        let elem = elements[i]
        if (isVisible(elem)) {
            if (elem.classList.contains('anim-rand')) elem.style['transition-delay'] = (Math.random() * 0.3).toString() + 's'
            elem.classList.add('anim-fadein')
        }
    }
}

document.addEventListener('scroll', checkElements)
window.addEventListener('load',     checkElements)
window.addEventListener('resize',   checkElements)
