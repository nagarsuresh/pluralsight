/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import {Route} from '@angular/router';
import {ServicecomposerComponent} from "./servicecomposer.component";

export const ServiceComposerRoutes: Route[] = [
  {
    path: 'servicecomposer',
    component: ServicecomposerComponent
  }
];
