/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {NSXManagersRoutes} from "./nsxmanagers.routes";
import {NsxmanagersComponent} from "./nsxmanagers.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(NSXManagersRoutes)
  ],
  declarations: [NsxmanagersComponent]
})
export class NsxmanagersModule { }
