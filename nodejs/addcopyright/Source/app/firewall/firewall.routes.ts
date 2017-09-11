/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { Route } from '@angular/router';
import { FirewallComponent } from "./firewall.component";
import { DraftsMainComponent } from "./drafts/drafts-main.component";
import { ConfigMainComponent } from "./configuration/config-main.component";
import { SettingsMainComponent } from "./settings/settings-main.component";

export const FirewallRoutes: Route[] = [
  {
    path: 'firewall',
    component: FirewallComponent,
    children: [
      {
        path: 'drafts',
        component: DraftsMainComponent
      },
      {
        path: 'configuration',
        component: ConfigMainComponent
      },
      {
        path: 'settings',
        component: SettingsMainComponent
      },
      {
        path: '',
        pathMatch:'full',
        redirectTo: 'configuration'
      }
    ]
  }
];
