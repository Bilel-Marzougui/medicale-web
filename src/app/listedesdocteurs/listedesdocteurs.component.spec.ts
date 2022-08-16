import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedesdocteursComponent } from './listedesdocteurs.component';

describe('ListedesdocteursComponent', () => {
  let component: ListedesdocteursComponent;
  let fixture: ComponentFixture<ListedesdocteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedesdocteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedesdocteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
