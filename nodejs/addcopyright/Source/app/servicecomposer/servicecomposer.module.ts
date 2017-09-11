/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {ServiceComposerRoutes} from "./servicecomposer.routes";
import {ServicecomposerComponent} from "./servicecomposer.component";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(ServiceComposerRoutes)
  ],
  declarations: [ServicecomposerComponent]
})
export class ServicecomposerModule { }
