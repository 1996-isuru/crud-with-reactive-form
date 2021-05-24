import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPipePracticeComponent } from './custom-pipe-practice.component';

describe('CustomPipePracticeComponent', () => {
  let component: CustomPipePracticeComponent;
  let fixture: ComponentFixture<CustomPipePracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomPipePracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomPipePracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
