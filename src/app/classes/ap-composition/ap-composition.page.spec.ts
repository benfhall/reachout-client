import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApCompositionPage } from './ap-composition.page';

describe('ApCompositionPage', () => {
  let component: ApCompositionPage;
  let fixture: ComponentFixture<ApCompositionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApCompositionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApCompositionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
