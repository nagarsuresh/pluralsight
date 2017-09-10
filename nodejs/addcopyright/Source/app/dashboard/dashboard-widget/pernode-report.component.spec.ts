/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PernodeReportComponent } from './pernode-report.component';
import {DashboardModule} from "../dashboard.module";
import {AppModule} from "../../app.module";

describe('PernodeReportComponent', () => {
  let component: PernodeReportComponent;
  let fixture: ComponentFixture<PernodeReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, DashboardModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PernodeReportComponent);
    component = fixture.componentInstance;
    component.metadata = [{"id":"manager_status_report","title":"NSX Manager","description":"NSX Manager component status and disk usage","type":"per_node","weight":1000,"groupByCategory":"system_overview","groupByCategoryDisplayName":"System Overview","recommendedRefreshInterval":5000},
                        {"id":"controller_status_report","title":"Controller Nodes","description":"Controller node status and its connectivity to NSX manager and controller peers(peer connectivity is checked only on primary NSX manager)","type":"per_node","weight":1000,"groupByCategory":"system_overview","groupByCategoryDisplayName":"System Overview","recommendedRefreshInterval":5000}];
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
