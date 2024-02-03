import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVignetteComponent } from './create-vignette.component';

describe('CreateVignetteComponent', () => {
  let component: CreateVignetteComponent;
  let fixture: ComponentFixture<CreateVignetteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVignetteComponent]
    });
    fixture = TestBed.createComponent(CreateVignetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
