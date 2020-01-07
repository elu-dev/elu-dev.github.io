
function isVisible(elem) {
    const bounding = elem.getBoundingClientRect();
    const middle = bounding.top + bounding.height / 2
    return middle >= 0 && middle <= (window.innerHeight || document.documentElement.clientHeight)
}

function checkElements() {
    let elements = document.getElementsByClassName("anim")
    for (let i = 0; i < elements.length; ++i) {
        let elem = elements[i]
        if (isVisible(elem)) {
            elem.style['transition-delay'] = Math.random() * 0.4 + 's'
            elem.classList.add('anim-fadein')
        }
    }
}

document.addEventListener('scroll', checkElements)
window.addEventListener('load',     checkElements)
window.addEventListener('resize',   checkElements)
