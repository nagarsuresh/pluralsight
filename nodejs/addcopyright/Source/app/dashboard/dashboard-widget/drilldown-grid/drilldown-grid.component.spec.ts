/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DrilldownGridComponent } from './drilldown-grid.component';

describe('DrilldownGridComponent', () => {
  let component: DrilldownGridComponent;
  let fixture: ComponentFixture<DrilldownGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrilldownGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrilldownGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
