import { Component, Input, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

import { NbContainer } from '../overlay/overlay-renderer';
import { NB_TOAST_RIGHT_POSITIONS, NbToast, NbToastPosition } from './toaster.service';


const voidState = style({
  transform: 'translateX({{ direction }}110%)',
  height: 0,
  margin: 0,
});

const defaultOptions = { params: { direction: '' } };

@Component({
  selector: 'nb-toaster-container',
  template: `
    <nb-toast [@fadeIn]="fadeIn" *ngFor="let toast of content" [toast]="toast"></nb-toast>`,
  animations: [
    trigger('fadeIn', [
      transition(':enter', [voidState, animate(100)], defaultOptions),
      transition(':leave', [animate(100, voidState)], defaultOptions),
    ]),
  ],
})
export class NbToasterContainerComponent implements NbContainer, OnInit {
  @Input()
  content: NbToast[] = [];

  @Input()
  context: Object;

  @Input()
  position: NbToastPosition;

  fadeIn;

  ngOnInit(): void {
    const direction = NB_TOAST_RIGHT_POSITIONS.includes(this.position) ? '' : '-';
    this.fadeIn = { value: '', params: { direction } };
  }
}
