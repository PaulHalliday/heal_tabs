import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tabs = [
    {
      label: 'Nutrition',
      path: './nutrition',
      index: 0,
    },
    {
      label: 'Graph',
      path: './nutrition/graph',
      index: 1,
    },
    {
      label: 'Total',
      path: './nutrition/total',
      index: 2,
    },
  ];

}
