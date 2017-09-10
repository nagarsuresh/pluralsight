/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {TraceflowRoutes} from "./traceflow.routes";
import {TraceflowComponent} from "./traceflow.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(TraceflowRoutes)
  ],
  declarations: [TraceflowComponent]
})
export class TraceflowModule { }
