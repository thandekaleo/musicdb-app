import { Injectable } from '@angular/core';

declare let gtag: (type: string, name: string, detail: any) => void;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {
  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = '',
    eventValue: number = 0
  ): void {
    gtag('event', eventName, {
      eventCategory,
      eventLabel,
      eventAction,
      eventValue
    });
  }
}
