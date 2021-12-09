import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFieldsComponent } from './input-fields.component';

describe('InputFieldsComponent', () => {
  let component: InputFieldsComponent;
  let fixture: ComponentFixture<InputFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
