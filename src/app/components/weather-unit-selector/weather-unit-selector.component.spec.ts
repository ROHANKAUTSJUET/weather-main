import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherUnitSelectorComponent } from './weather-unit-selector.component';

describe('WeatherUnitSelectorComponent', () => {
  let component: WeatherUnitSelectorComponent;
  let fixture: ComponentFixture<WeatherUnitSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherUnitSelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherUnitSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
