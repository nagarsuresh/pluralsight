/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeRoutes} from "./home.routes";
import {GettingStartedComponent} from "./getting-started/getting-started.component";
import {ManageComponent} from "./manage/manage.component";
import {HomeComponent} from "./home.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(HomeRoutes)
  ],
  declarations: [GettingStartedComponent, ManageComponent, HomeComponent]
})
export class HomeModule { }
