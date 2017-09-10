/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasicReportComponent } from './basic-report.component';
import {AppModule} from "../../app.module";
import {DashboardModule} from "../dashboard.module";

describe('BasicReportComponent', () => {
  let component: BasicReportComponent;
  let fixture: ComponentFixture<BasicReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule],
      declarations: [ ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
