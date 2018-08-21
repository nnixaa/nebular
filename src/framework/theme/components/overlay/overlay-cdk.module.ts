import { Directive, Injectable, NgModule } from '@angular/core';
import {
  ComponentType,
  ConnectedOverlayPositionChange,
  ConnectedPosition,
  ConnectionPositionPair,
  FlexibleConnectedPositionStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayContainer,
  OverlayModule,
  OverlayPositionBuilder,
  OverlayRef,
  PositionStrategy,
  ViewportRuler,
} from '@angular/cdk/overlay';
import { CdkPortal, ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { Platform } from '@angular/cdk/platform';


@Directive({ selector: '[nbPortal]' })
export class NbPortalDirective extends CdkPortal {
}

@Injectable()
export class NbOverlayService extends Overlay {
}

@Injectable()
export class NbPlatform extends Platform {
}

@Injectable()
export class NbOverlayPositionBuilder extends OverlayPositionBuilder {
}

@Injectable()
export class NbViewportRuler extends ViewportRuler {
}

export class NbComponentPortal<T = any> extends ComponentPortal<T> {
}

export class NbOverlayContainer extends OverlayContainer {
}

export class NbFlexibleConnectedPositionStrategy extends FlexibleConnectedPositionStrategy {
}

export type NbOverlayRef = OverlayRef;
export type NbComponentType<T = any> = ComponentType<T>;
export type NbGlobalPositionStrategy = GlobalPositionStrategy;
export type NbPositionStrategy = PositionStrategy;
export type NbConnectedPosition = ConnectedPosition;
export type NbConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
export type NbConnectionPositionPair = ConnectionPositionPair;


const CDK_MODULES = [OverlayModule, PortalModule];

const CDK_PROVIDERS = [
  NbOverlayService,
  NbPlatform,
  NbOverlayPositionBuilder,
  NbViewportRuler,
];

@NgModule({
  imports: [...CDK_MODULES],
  exports: [...CDK_MODULES, NbPortalDirective],
  declarations: [NbPortalDirective],
  providers: [...CDK_PROVIDERS],
})
export class NbOverlayCdkModule {
}
