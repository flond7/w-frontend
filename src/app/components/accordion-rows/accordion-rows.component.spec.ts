import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionRowsComponent } from './accordion-rows.component';

describe('AccordionRowsComponent', () => {
  let component: AccordionRowsComponent;
  let fixture: ComponentFixture<AccordionRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionRowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
