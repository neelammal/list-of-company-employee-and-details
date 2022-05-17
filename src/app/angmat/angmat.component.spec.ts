import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngmatComponent } from './angmat.component';

describe('AngmatComponent', () => {
  let component: AngmatComponent;
  let fixture: ComponentFixture<AngmatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngmatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngmatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
