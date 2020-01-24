function renderCard(show=true) {
    const card = document.getElementById('main')
    
    if (show) {
        card.classList.remove('hide')
        card.classList.add('show')
        document.body.style.overflow = 'visible'
    } else {
        card.classList.add('hide')
        card.classList.remove('show')
        document.body.style.overflow = 'hidden'
    }
}

let current = 0
let titles = document.getElementsByClassName('slider-title')
let contents = document.getElementsByClassName('slider-content')

// js <3
function mod(a, b) { return ((a % b) + b) % b }

// 0 <<  >> 1
function shiftSlider(dir) {
    const dirs = ['slider-right', 'slider-left']
    const offset = dir*2 - 1

    let next = mod(current + offset, titles.length);
    let nnext = mod(next   + offset, titles.length);
    let move_to = dirs[dir + 0]
    let move_from = dirs[!dir + 0]

    titles[current].classList.remove(move_from, 'slider-show')
    titles[current].classList.add(move_to, 'slider-hide')
    titles[next].classList.remove('slider-hide')
    titles[next].classList.add(move_from, 'slider-show')
    titles[nnext].classList.remove(move_to)
    titles[nnext].classList.add(move_from)

    contents[current].classList.remove(move_from, 'slider-show')
    contents[current].classList.add(move_to, 'slider-hide')
    contents[next].classList.remove('slider-hide')
    contents[next].classList.add(move_from, 'slider-show')
    contents[nnext].classList.remove(move_to)
    contents[nnext].classList.add(move_from)

    current = next
}