import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

notificationNumberCount: number;
constructor() {
this.notificationNumberCount = 5;
}
increment() {
this.notificationNumberCount++;
}
clear() {
this.notificationNumberCount = 0;
}

  ngOnInit() {
  }

}
