/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { CommonService } from './../services/common.service';
import { Component } from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'sd-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css']
})

export class ToolbarComponent {
  constructor(private commonService:CommonService){

  }

  onRefresh(): void{
    this.commonService.publishGlobalRefresh();
  }
}
