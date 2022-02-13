import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesChartComponent } from './states-chart.component';

describe('StatesChartComponent', () => {
  let component: StatesChartComponent;
  let fixture: ComponentFixture<StatesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
