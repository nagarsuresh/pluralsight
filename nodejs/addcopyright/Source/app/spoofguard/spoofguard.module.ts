/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {SpoofGuardRoutes} from "./spoofguard.routes";
import {SpoofguardComponent} from "./spoofguard.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(SpoofGuardRoutes)
  ],
  declarations: [SpoofguardComponent]
})
export class SpoofguardModule { }
