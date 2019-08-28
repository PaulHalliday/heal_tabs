import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionRoutingModule } from './nutrition-routing.module';
import { DailyNutritionComponent } from './daily-nutrition/daily-nutrition.component';
import { TotalComponent } from './total/total.component';
import { GraphComponent } from './graph/graph.component';


@NgModule({
  declarations: [DailyNutritionComponent, TotalComponent, GraphComponent],
  imports: [
    CommonModule,
    NutritionRoutingModule
  ]
})
export class NutritionModule { }
