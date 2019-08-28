import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyNutritionComponent } from './daily-nutrition.component';

describe('DailyNutritionComponent', () => {
  let component: DailyNutritionComponent;
  let fixture: ComponentFixture<DailyNutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyNutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
