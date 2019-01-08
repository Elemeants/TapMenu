import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor() { }

  public getIconsSelectors() {
    const array_icons = [
      'waves',
      'brightness_high',
      'show_chart',
      'cloud_queue',
      'toys',
      'ac_unit',
      'whatshot',
    ];
    return array_icons;
  }

  public getIconsIndications() {
    const array_icons = [
      'add_alert',
      'warning',
      'error',
      'notification_important',
      'wifi_tethering',
      'widgets',
      'usb',
      'storage',
      'sd_storage'
    ];
    return array_icons;
  }
}
