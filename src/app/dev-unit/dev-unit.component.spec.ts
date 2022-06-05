import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevUnitComponent } from './dev-unit.component';

describe('DevUnitComponent', () => {
  let component: DevUnitComponent;
  let fixture: ComponentFixture<DevUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
