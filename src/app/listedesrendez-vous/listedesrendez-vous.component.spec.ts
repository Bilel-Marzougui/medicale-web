import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesrendezVousComponent } from './listedesrendez-vous.component';

describe('ListedesrendezVousComponent', () => {
  let component: ListedesrendezVousComponent;
  let fixture: ComponentFixture<ListedesrendezVousComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedesrendezVousComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedesrendezVousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
