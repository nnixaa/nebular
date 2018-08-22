/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { Directive, ElementRef, Input } from '@angular/core';
import { ComponentType, Overlay } from '@angular/cdk/overlay';

import { NbTooltipComponent } from './tooltip.component';
import {
  NbAdjustment,
  NbOverlay,
  NbOverlayController,
  NbPosition,
  NbPositionBuilderService,
  NbPositionStrategy,
  NbTrigger,
  NbTriggerBuilderService,
  NbTriggerStrategy,
} from '../overlay';

/**
 *
 * Tooltip directive for small text/icon hints.
 *
 * @stacked-example(Showcase, tooltip/tooltip-showcase.component)
 *
 * Tooltip can accept a hint text and/or an icon:
 * @stacked-example(With Icon, tooltip/tooltip-with-icon.component)
 *
 * Same way as Popover, tooltip can accept placement position with `nbTooltipPlacement` proprety:
 * @stacked-example(Placements, tooltip/tooltip-placements.component)
 *
 * It is also possible to specify tooltip color using `nbTooltipStatus` property:
 * @stacked-example(Colored Tooltips, tooltip/tooltip-colors.component)
 *
 */
@Directive({ selector: '[nbTooltip]' })
export class NbTooltipDirective extends NbOverlayController {

  context: Object = {};

  /**
   * Popover content which will be rendered in NbTooltipComponent.
   * Available content: template ref, component and any primitive.
   *
   */
  @Input('nbTooltip')
  content: string;

  /**
   *
   * @param {string} icon
   */
  @Input('nbTooltipIcon')
  set icon(icon: string) {
    this.context = Object.assign(this.context, { icon });
  }

  /**
   *
   * @param {string} status
   */
  @Input('nbTooltipStatus')
  set status(status: string) {
    this.context = Object.assign(this.context, { status });
  }

  /**
   * Position will be calculated relatively host element based on the position.
   * Can be top, right, bottom, left, start or end.
   */
  @Input('nbTooltipPlacement')
  position: NbPosition = NbPosition.TOP;

  /**
   * Container position will be changes automatically based on this strategy if container can't fit view port.
   * Set this property to any falsy value if you want to disable automatically adjustment.
   * Available values: clockwise, counterclockwise.
   */
  @Input('nbTooltipAdjustment')
  adjustment: NbAdjustment = NbAdjustment.CLOCKWISE;

  mode: NbTrigger = NbTrigger.HINT;

  protected container: ComponentType<any> = NbTooltipComponent;

  protected overlay: NbOverlay;

  constructor(private hostRef: ElementRef,
              private triggerBuilder: NbTriggerBuilderService,
              private positionBuilder: NbPositionBuilderService,
              cdkOverlay: Overlay) {
    super(cdkOverlay);
  }

  show() {
    this.overlay.show();
  }

  hide() {
    this.overlay.hide();
  }

  toggle() {
    this.overlay.toggle();
  }

  protected createPositionStrategy(): NbPositionStrategy {
    return this.positionBuilder
      .connectedTo(this.hostRef)
      .position(this.position)
      .adjustment(this.adjustment);
  }

  protected createTriggerStrategy(overlayElement: HTMLElement): NbTriggerStrategy {
    return this.triggerBuilder
      .trigger(this.mode)
      .host(this.hostRef.nativeElement)
      .container(overlayElement);
  }
}
