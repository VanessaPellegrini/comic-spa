import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminoComponent } from './termino.component';

describe('TerminoComponent', () => {
  let component: TerminoComponent;
  let fixture: ComponentFixture<TerminoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
