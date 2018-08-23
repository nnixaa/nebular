/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import { AfterViewInit, ComponentRef, Directive, ElementRef, Input, OnDestroy } from '@angular/core';
import { takeWhile } from 'rxjs/operators';

import {
  NbAdjustableConnectedPositionStrategy,
  NbAdjustment,
  NbArrowedOverlayContainerComponent,
  NbComponentPortal,
  NbOverlayRef,
  NbOverlayService,
  NbPosition, NbPositionBuilderService,
  NbToggleable,
  NbTrigger,
  NbTriggerBuilderService,
  NbTriggerStrategy,
  patch,
} from '../../cdk';

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
export class NbTooltipDirective implements AfterViewInit, OnDestroy, NbToggleable {

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

  mode: NbTrigger = NbTrigger.CLICK;

  protected ref: NbOverlayRef;
  protected container: ComponentRef<any>;
  protected positionStrategy: NbAdjustableConnectedPositionStrategy;
  protected triggerStrategy: NbTriggerStrategy;
  protected alive: boolean = true;


  constructor(private hostRef: ElementRef,
              private triggerBuilder: NbTriggerBuilderService,
              private positionBuilder: NbPositionBuilderService,
              private overlay: NbOverlayService) {
  }

  ngAfterViewInit() {
    this.positionStrategy = this.createPositionStrategy();
    this.ref = this.overlay.create({
      positionStrategy: this.positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.triggerStrategy = this.createTriggerStrategy();

    this.subscribeOnTriggers();
    this.subscribeOnPositionChange();
  }

  ngOnDestroy() {
    this.alive = false;
  }

  show() {
    this.container = this.ref.attach(new NbComponentPortal(NbArrowedOverlayContainerComponent));
    patch(this.container, { position: this.position, content: this.content, context: this.context });
  }

  hide() {
    this.ref.detach();
  }

  toggle() {
    if (this.ref && this.ref.hasAttached()) {
      this.hide();
    } else {
      this.show();
    }
  }

  protected createPositionStrategy(): NbAdjustableConnectedPositionStrategy {
    return this.positionBuilder
      .connectedTo(this.hostRef)
      .position(this.position)
      .adjustment(this.adjustment);
  }

  protected createTriggerStrategy(): NbTriggerStrategy {
    return this.triggerBuilder
      .trigger(this.mode)
      .host(this.hostRef.nativeElement)
      .container(this.ref.overlayElement);
  }

  protected subscribeOnPositionChange() {
    this.positionStrategy.positionChange
      .pipe(takeWhile(() => this.alive))
      .subscribe((position: NbPosition) => patch(this.container, { position }));
  }

  protected subscribeOnTriggers() {
    this.triggerStrategy.show.pipe(takeWhile(() => this.alive)).subscribe(() => this.show());
    this.triggerStrategy.hide.pipe(takeWhile(() => this.alive)).subscribe(() => this.hide());
    this.triggerStrategy.toggle.pipe(takeWhile(() => this.alive)).subscribe(() => this.toggle());
  }
}
