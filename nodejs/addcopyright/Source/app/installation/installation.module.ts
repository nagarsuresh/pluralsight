/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InstallationRoutes} from "./installation.routes";
import {RouterModule} from "@angular/router";
import {InstallationComponent} from "./installation.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(InstallationRoutes)
  ],
  declarations: [InstallationComponent]
})
export class InstallationModule { }
