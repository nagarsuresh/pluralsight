/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { Route } from '@angular/router';
import { HomeComponent } from "./home.component";
import { GettingStartedRoutes } from "./getting-started/getting-started.routes";
import { ManageRoutes } from "./manage/manage.routes";

export const HomeRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      ...GettingStartedRoutes,
      ...ManageRoutes,
      { path: '', redirectTo: 'gettingstarted', pathMatch:'full' }
    ]
  }
];
