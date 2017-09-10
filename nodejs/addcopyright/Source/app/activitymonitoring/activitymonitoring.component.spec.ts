/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ActivitymonitoringComponent } from './activitymonitoring.component';

describe('ActivitymonitoringComponent', () => {
  let component: ActivitymonitoringComponent;
  let fixture: ComponentFixture<ActivitymonitoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitymonitoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitymonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
