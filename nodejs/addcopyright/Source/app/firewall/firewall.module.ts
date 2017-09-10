/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { NgModule } from '@angular/core';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FirewallRoutes } from "./firewall.routes";
import { RouterModule } from "@angular/router";
import { DraftsGridComponent } from './drafts/drafts-grid/drafts-grid.component';
import { ConfigMainComponent } from './configuration/config-main.component';
import { DraftsMainComponent } from './drafts/drafts-main.component';
import { SettingsMainComponent } from './settings/settings-main.component';
import { DraftsService } from './drafts/drafts.service';
import { FirewallComponent } from "./firewall.component";


@NgModule({
  imports: [
    SharedModule, RouterModule.forChild(FirewallRoutes)
  ],
  declarations: [FirewallComponent, DraftsGridComponent, ConfigMainComponent, DraftsMainComponent, SettingsMainComponent],
  providers: [DraftsService]
})
export class FirewallModule { }
