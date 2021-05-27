import {OnInit, OnDestroy, Component, Directive} from '@angular/core';
import {Subscription} from 'rxjs';

@Directive()
export class ComponentBase implements OnInit, OnDestroy {
  constructor() {}
  protected _subscriptions: Subscription[] = [];

  ngOnDestroy() {
    this.clearAllSubscriptions();
  }

  clearAllSubscriptions() {
    this._subscriptions.forEach(subscription => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
    this._subscriptions = [];
  }

  ngOnInit() {
    // Add initialisation related logic
  }
}
