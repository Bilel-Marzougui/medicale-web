import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisedesrendezVousComponent } from './prisedesrendez-vous.component';

describe('PrisedesrendezVousComponent', () => {
  let component: PrisedesrendezVousComponent;
  let fixture: ComponentFixture<PrisedesrendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisedesrendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisedesrendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
