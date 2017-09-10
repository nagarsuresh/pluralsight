/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { FirewallModule } from './firewall/firewall.module';
import { AppsviewComponent } from './appsview.component';
import {Routes} from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component : AppsviewComponent
    }
];
