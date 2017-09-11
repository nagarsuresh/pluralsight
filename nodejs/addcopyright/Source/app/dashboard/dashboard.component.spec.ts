/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import {AppModule} from "../app.module";
import {DashboardModule} from "./dashboard.module";
import {DashboardService} from "./dashboard.service";

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let spy1, spy2;
  let dashboardService:DashboardService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule],
      declarations: [],
      providers: [/* DashboardService*/ ]
    })
    .compileComponents();

    /**
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    dashboardService = fixture.debugElement.injector.get(DashboardService);
    spy1 = spyOn(dashboardService, 'getReportMetadataList')
        .and.returnValue(Promise.resolve([]));
    spy2 = spyOn(dashboardService, 'getReportsData')
        .and.returnValue(Promise.resolve([]));

    fixture.detectChanges();
     */
  }));


  it('should create', () => {
    //expect(component).toBeTruthy();
  });
});
