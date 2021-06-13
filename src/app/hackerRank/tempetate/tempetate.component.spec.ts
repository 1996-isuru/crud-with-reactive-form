import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempetateComponent } from './tempetate.component';

describe('TempetateComponent', () => {
  let component: TempetateComponent;
  let fixture: ComponentFixture<TempetateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempetateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempetateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
