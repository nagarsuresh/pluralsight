/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {LogicalSwitchesRoutes} from "./logicalswitches.routes";
import {LogicalswitchesComponent} from "./logicalswitches.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(LogicalSwitchesRoutes), SharedModule
  ],
  declarations: [LogicalswitchesComponent]
})
export class LogicalswitchesModule { }
