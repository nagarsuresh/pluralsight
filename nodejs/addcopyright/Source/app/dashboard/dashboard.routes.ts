/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import {Route} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";

export const DashboardRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
