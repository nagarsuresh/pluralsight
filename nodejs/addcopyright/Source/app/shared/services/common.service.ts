/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs/Rx';

@Injectable()
export class CommonService {

  globalErrorSubject: Subject<any> = new Subject<any>();
  globalRefreshSubject: Subject<any> = new Subject<any>();
  
  vcGuid: string;
  constructor() {
    console.log("CommonService ctor");
  }

  publishGlobalError(error: string): void {
    this.globalErrorSubject.next(error);
  }

  publishGlobalRefresh(): void{
    this.globalRefreshSubject.next();
  }  

}
