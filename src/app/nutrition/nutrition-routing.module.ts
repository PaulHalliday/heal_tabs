import { GraphComponent } from './graph/graph.component';
import { DailyNutritionComponent } from './daily-nutrition/daily-nutrition.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TotalComponent } from './total/total.component';

const routes: Routes = [
  {
    path: '',
    component: DailyNutritionComponent,
  },
  {
    path: 'graph',
    component: GraphComponent,
  },
  {
    path: 'total',
    component: TotalComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NutritionRoutingModule {}
