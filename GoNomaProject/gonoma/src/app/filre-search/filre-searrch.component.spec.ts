import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilreSearrchComponent } from './filre-searrch.component';

describe('FilreSearrchComponent', () => {
  let component: FilreSearrchComponent;
  let fixture: ComponentFixture<FilreSearrchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilreSearrchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilreSearrchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
