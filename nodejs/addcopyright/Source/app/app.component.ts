/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Event, Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from './shared/services/common.service';

declare var WEB_PLATFORM;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  webclient: boolean = true;
  globalErrorMsg: string = null;

  constructor(
    private activeRoute: ActivatedRoute,
    private commonService: CommonService,
    private router: Router
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.onRouteChangeStart(event);
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

  private onRouteChangeStart(event: Event): void {
    this.globalErrorMsg = "";
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    if ((typeof(WEB_PLATFORM)!== "undefined") && WEB_PLATFORM.getVcSelectorInfo()) {
      this.commonService.vcGuid = WEB_PLATFORM.getVcSelectorInfo().serviceGuid;
    }
    this.subscription = this.activeRoute.queryParams.skip(1).subscribe(
      (qParams) => {
        if (!qParams['webclient']) {
          this.webclient = false;
        } else {
          this.webclient = (qParams['webclient'] && (qParams['webclient'] === "true"))
        }
        let vcGuid = qParams['serviceGuid'];
        if (vcGuid) {
          this.commonService.vcGuid = vcGuid;
        }
      }
    );

    this.addListeners();

  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.subscription.unsubscribe();
  }

  private addListeners() {
    //application level errors!
    this.commonService.globalErrorSubject.subscribe(
      (error) => {
        console.log("Error at application level :" + error);
        this.globalErrorMsg = String(error);
      }
    )

   let isChrome:boolean = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome && (typeof(WEB_PLATFORM)!== "undefined") && WEB_PLATFORM.setGlobalRefreshHandler) {
      WEB_PLATFORM.setGlobalRefreshHandler(() => {
        this.commonService.publishGlobalRefresh();
      });
    }

  }

  public globalRefresh(): void {
    this.commonService.publishGlobalRefresh();
  }


}
