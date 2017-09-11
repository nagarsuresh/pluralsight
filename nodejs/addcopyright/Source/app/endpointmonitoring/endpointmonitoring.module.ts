/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {EndPointMonitoringRoutes} from "./endpointmonitoring.routes";
import {EndpointmonitoringComponent} from "./endpointmonitoring.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(EndPointMonitoringRoutes)
  ],
  declarations: [EndpointmonitoringComponent]
})
export class EndpointmonitoringModule { }
