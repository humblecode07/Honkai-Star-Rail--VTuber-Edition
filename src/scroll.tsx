import LocomotiveScroll from 'locomotive-scroll';

export function initScroll() {
    console.log('ya')

    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    return scroll;
}