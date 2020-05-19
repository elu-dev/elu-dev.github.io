function _scrollTo(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
}

function isVisible(elem) {
    const bounding = elem.getBoundingClientRect()
    const middle = bounding.top + bounding.height / 2
    return middle >= 0 && middle <= (window.innerHeight || document.documentElement.clientHeight)
}

function checkElements() {
    let elements = document.getElementsByClassName("fos")
    for (let i = 0; i < elements.length; ++i) {
        let elem = elements[i]
        if (isVisible(elem)) {
            elem.classList.add('show-up')
        }
    }
}

document.addEventListener('scroll', checkElements)
window.addEventListener('load',     checkElements)
window.addEventListener('resize',   checkElements)