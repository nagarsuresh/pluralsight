/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EdgeRoutes} from "./edge.routes";
import {RouterModule} from "@angular/router";
import {EdgeComponent} from "./edge.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(EdgeRoutes)
  ],
  declarations: [EdgeComponent]
})
export class EdgeModule { }
