/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { VsmServerService } from './services/vsm-server.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular/clarity.module';
import { BusyModule, BusyConfig } from 'angular2-busy';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CommonService } from './services/common.service';
import { VcnsSelectorComponent } from './vcns-selector/vcns-selector.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ClarityModule, RouterModule, BusyModule.forRoot(new BusyConfig({
      template: `
                    <div class="ng-busy-default-wrapper" style="margin-top:200px">
                       <div class="spinner spinner-lg"></div>
                    </div>
                `,
      minDuration: 600
    }))
  ],
  declarations: [ToolbarComponent, VcnsSelectorComponent],
  exports: [ToolbarComponent, CommonModule, FormsModule, RouterModule, BusyModule, ClarityModule, VcnsSelectorComponent, ReactiveFormsModule]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [CommonService, VsmServerService]
    };
  }

}
