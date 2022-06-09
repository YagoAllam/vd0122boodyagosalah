import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSportsComponent } from './lista-sports.component';

describe('ListaSportsComponent', () => {
  let component: ListaSportsComponent;
  let fixture: ComponentFixture<ListaSportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
