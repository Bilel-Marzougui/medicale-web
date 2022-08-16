import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExpComponent } from './dialog-exp.component';

describe('DialogExpComponent', () => {
  let component: DialogExpComponent;
  let fixture: ComponentFixture<DialogExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
