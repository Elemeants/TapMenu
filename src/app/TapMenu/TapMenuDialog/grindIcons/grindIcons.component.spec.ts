/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GrindIconsComponent } from './grindIcons.component';

describe('GrindIconsComponent', () => {
  let component: GrindIconsComponent;
  let fixture: ComponentFixture<GrindIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrindIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrindIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
