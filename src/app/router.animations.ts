import { trigger, transition, style, animate, query, stagger, group, keyframes, state } from '@angular/animations';

export function moveIn() {
   return trigger('moveIn', [
      state('void', style({})),
      state('*', style({})),
      transition(':enter', [
         style({ opacity: '0', transform: 'translateX(100px)' }),
         animate('0.8s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
      ]),
      // transition(':leave', [
      //   style({opacity: '1', transform: 'translateX(0)'}),
      //   animate('.3s ease-in-out', style({opacity: '0', transform: 'translateX(-200px)'}))
      // ])
   ]);
}

export function fallIn() {
   return trigger('fallIn', [
      transition(':enter', [
         style({ opacity: '0', transform: 'translateY(40px)' }),
         animate('.4s .2s ease-in-out', style({ opacity: '1', transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
         style({ opacity: '1', transform: 'translateX(0)' }),
         animate('.3s ease-in-out', style({ opacity: '0', transform: 'translateX(-200px)' }))
      ])
   ]);
}

export function moveInLeft() {
   return trigger('moveInLeft', [
      transition(':enter', [
         style({ opacity: '0', transform: 'translateX(-100px)' }),
         animate('.6s .2s ease-in-out', style({ opacity: '1', transform: 'translateX(0)' }))
      ])
   ]);
}

export function flyInOut() {
   return trigger('flyInOut', [
      state('in', style({ width: 120, transform: 'translateX(0)', opacity: 1 })),
      transition('void => *', [
         style({ width: 10, transform: 'translateX(50px)', opacity: 0 }),
         group([
            animate('0.5s 0.3s ease', style({
               transform: 'translateX(0)',
               width: 140
            })),
            animate('0.5s ease', style({
               opacity: 1
            }))
         ])
      ]),
      transition('* => void', [
         group([
            animate('0.5s ease', style({
               transform: 'translateX(50px)',
               width: 20
            })),
            animate('0.5s 0.4s ease', style({
               opacity: 0
            }))
         ])
      ])
   ]);
}
