/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivityMonitoringRoutes} from "./activitymonitoring.routes";
import {RouterModule} from "@angular/router";
import {ActivitymonitoringComponent} from "./activitymonitoring.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(ActivityMonitoringRoutes)
  ],
  declarations: [ActivitymonitoringComponent]
})
export class ActivitymonitoringModule { }
