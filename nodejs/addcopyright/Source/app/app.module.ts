/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

//system modules!
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SharedModule } from './shared/shared.module'
import { AppRoutes } from './app.routes';
import { RouterModule } from "@angular/router";

//Application Modules!
import { AppComponent } from './app.component';
import { HomeModule } from "./home/home.module";
import { InstallationModule } from "./installation/installation.module";
import { LogicalswitchesModule } from "./logicalswitches/logicalswitches.module";
import { EdgeModule } from "./edge/edge.module";
import { SpoofguardModule } from "./spoofguard/spoofguard.module";
import { ServicedefinitionsModule } from "./servicedefinitions/servicedefinitions.module";
import { ServicecomposerModule } from "./servicecomposer/servicecomposer.module";
import { FlowmonitoringModule } from "./flowmonitoring/flowmonitoring.module";
import { ActivitymonitoringModule } from "./activitymonitoring/activitymonitoring.module";
import { EndpointmonitoringModule } from "./endpointmonitoring/endpointmonitoring.module";
import { TraceflowModule } from "./traceflow/traceflow.module";
import { NsxmanagersModule } from "./nsxmanagers/nsxmanagers.module";
import { DashboardModule } from './dashboard/dashboard.module';
import { FirewallModule } from './firewall/firewall.module';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { AppsviewComponent } from './appsview.component';


@NgModule({
  declarations: [
    AppComponent,
    AppsviewComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    DashboardModule,
    FirewallModule,
    InstallationModule,
    LogicalswitchesModule,
    EdgeModule,
    SpoofguardModule,
    ServicedefinitionsModule,
    ServicecomposerModule,
    FlowmonitoringModule,
    ActivitymonitoringModule,
    EndpointmonitoringModule,
    TraceflowModule,
    NsxmanagersModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    SharedModule.forRoot()
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
