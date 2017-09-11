/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlowMonitoringRoutes} from "./flowmonitoring.routes";
import {RouterModule} from "@angular/router";
import {FlowmonitoringComponent} from "./flowmonitoring.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(FlowMonitoringRoutes)
  ],
  declarations: [FlowmonitoringComponent]
})
export class FlowmonitoringModule { }
