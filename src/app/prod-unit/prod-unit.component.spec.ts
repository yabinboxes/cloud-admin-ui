import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdUnitComponent } from './prod-unit.component';

describe('ProdUnitComponent', () => {
  let component: ProdUnitComponent;
  let fixture: ComponentFixture<ProdUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
