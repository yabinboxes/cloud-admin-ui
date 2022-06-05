import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRegistryComponent } from './image-registry.component';

describe('ImageRegistryComponent', () => {
  let component: ImageRegistryComponent;
  let fixture: ComponentFixture<ImageRegistryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRegistryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
