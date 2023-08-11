import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexiFieldsComponent } from './flexi-fields.component';

describe('FlexiFieldsComponent', () => {
  let component: FlexiFieldsComponent;
  let fixture: ComponentFixture<FlexiFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexiFieldsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexiFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
