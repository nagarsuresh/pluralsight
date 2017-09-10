/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { VsmInfoDto } from './../../shared/dto/common/vsm-info-dto';
import { Subscription } from 'rxjs/Rx';
import { CommonService } from './../../shared/services/common.service';
import { DashboardService } from './../dashboard.service';
import { ReportMetadataDto } from './../../shared/dto/dashboard/report-metadata-dto';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

@Component({
  selector: 'app-basic-report',
  templateUrl: './basic-report.component.html',
  styleUrls: ['./basic-report.component.css']
})
export class BasicReportComponent implements OnInit, OnDestroy, OnChanges {

  @Input() metadata: ReportMetadataDto[];
  @Input() selectedNSXManager: VsmInfoDto;
  subscription: Subscription;
  displayName: string;
  description: string;
  basicMetadata: ReportMetadataDto;
  statusList: any[];
  processing: boolean = false;

  constructor(
    private dashboardService: DashboardService,
    private commonService: CommonService) { }

  ngOnInit() {
    // this.fetchReportData();
  }

  fetchReportData(): void {
    if (this.metadata && this.metadata.length > 0) {
      //basic report has only one report data object!
      this.basicMetadata = this.metadata[0];
      this.displayName = this.basicMetadata.groupByCategoryDisplayName;
      this.description = this.basicMetadata.description;
      this.processing = true;
    }

    this.subscription = this.dashboardService.getReportsData(this.selectedNSXManager.vcGuid, this.metadata[0].groupByCategory)
      .subscribe((data) => {
        this.processing = false;
        this.statusList = data[0].statusList;
      }, (error) => {
        this.processing = false;
        this.commonService.publishGlobalError(error);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes): void{
    this.fetchReportData();
  }

} 
