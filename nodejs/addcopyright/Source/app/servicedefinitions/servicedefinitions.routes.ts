/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import {Route} from '@angular/router';
import {ServicedefinitionsComponent} from "./servicedefinitions.component";

export const ServiceDefinitionsRoutes: Route[] = [
  {
    path: 'servicedefinitions',
    component: ServicedefinitionsComponent
  }
];
