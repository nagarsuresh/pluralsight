/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { Router, RouterModule } from "@angular/router";
import { DashboardRoutes } from "./dashboard.routes";
import { AggregateReportComponent } from './dashboard-widget/aggregate-report.component';
import { DashboardService } from './dashboard.service';
import { DashboardComponent } from "./dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { BasicReportComponent } from './dashboard-widget/basic-report.component';
import { PernodeReportComponent } from './dashboard-widget/pernode-report.component';
import { DrilldownGridComponent } from './dashboard-widget/drilldown-grid/drilldown-grid.component';

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes), SharedModule
  ],
  declarations: [AggregateReportComponent, DashboardComponent, BasicReportComponent, PernodeReportComponent, DrilldownGridComponent],
  providers: [DashboardService],
  exports: []
})
export class DashboardModule { }
