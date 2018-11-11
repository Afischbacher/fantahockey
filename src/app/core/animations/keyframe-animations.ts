import { keyframes, style } from '@angular/animations';

export const fadeOutLeft = [
    style({opacity : 1, offset : 0.0}),
    style({opacity: 0, transform: 'translate3d(-100%, 0, 0);', offset: 1})
]


export const fadeOutRight = [
    style({opacity : 1, offset : 0.0}),
    style({opacity: 0, transform: 'translate3d(100%, 0, 0);', offset: 1})
]