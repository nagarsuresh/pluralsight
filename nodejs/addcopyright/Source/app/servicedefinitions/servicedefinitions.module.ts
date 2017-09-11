/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ServiceDefinitionsRoutes} from "./servicedefinitions.routes";
import {ServicedefinitionsComponent} from "./servicedefinitions.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(ServiceDefinitionsRoutes)
  ],
  declarations: [ServicedefinitionsComponent]
})
export class ServicedefinitionsModule { }
