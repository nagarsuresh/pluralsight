/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { VsmInfoDto } from './../shared/dto/common/vsm-info-dto';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { CommonService } from '../shared/services/common.service';
import { ReportMetadataDto } from '../shared/dto';
import { Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  metadataListSubscription: Subscription;
  selectedNSXManager: VsmInfoDto;
  reportMetadata: { [id: string]: ReportMetadataDto[] };

  constructor(
    private dashboardService: DashboardService,
    private commonService: CommonService
  ) {
    this.commonService.globalRefreshSubject.subscribe(() => {
      this.fetchMetadata();
    });
  }

  ngOnInit(): void {
    // this.fetchMetadata();
  }

  onNsxManagerAvailable(vsmInfoDto: VsmInfoDto) {
    this.selectedNSXManager = vsmInfoDto;
    this.fetchMetadata();
  }

  fetchMetadata(): void {
    this.metadataListSubscription = this.dashboardService.getReportMetadataList(this.selectedNSXManager.vcGuid).subscribe(
      (reportMetadataList) => {
        console.log(reportMetadataList);
        this.populateMetadata(reportMetadataList);
      },
      (error) => {
        this.commonService.publishGlobalError(error);
      }
    );
  }

  private populateMetadata(reportMetadataList: ReportMetadataDto[]): void {
    var map: { [id: string]: ReportMetadataDto[] } = {};
    reportMetadataList.forEach(function (metadata) {
      if (map[metadata.groupByCategory]) {
        map[metadata.groupByCategory].push(metadata);
      } else {
        map[metadata.groupByCategory] = [metadata];
      }
    });
    this.reportMetadata = map;

  }

  reportMetadataKeys() {
    if (this.reportMetadata) {
      return Object.keys(this.reportMetadata);
    }
    return [];
  }

  getReportType(category): string {
    let reports: ReportMetadataDto[] = this.reportMetadata[category];
    if (reports && reports.length > 0) {
      return reports[0].type;
    }
    return '';
  }

  ngOnDestroy(): void {
    if (this.metadataListSubscription) {
      this.metadataListSubscription.unsubscribe();
    }
  }




}
