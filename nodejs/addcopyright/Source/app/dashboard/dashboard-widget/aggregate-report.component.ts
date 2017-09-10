/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { DrilldownMetadata } from './../../shared/dto/dashboard/drilldown-metadata';
import { VsmInfoDto } from './../../shared/dto/common/vsm-info-dto';
import { Subscription } from 'rxjs/Rx';
import { CommonService } from './../../shared/services/common.service';
import { DashboardService } from './../dashboard.service';
import { ReportMetadataDto } from '../../shared/dto';
import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';

@Component({
    selector: 'app-aggregate-report',
    templateUrl: './aggregate-report.component.html',
    styleUrls: ['./aggregate-report.component.css']
})
export class AggregateReportComponent implements OnInit, OnDestroy, OnChanges {

    @Input() metadata: ReportMetadataDto[];
    @Input() selectedNSXManager: VsmInfoDto;
    subscription: Subscription;
    displayName: string;
    description: string;
    message: string;
    reportData: any = {};
    processing: boolean = false;
    totalCount: number;
    id: string;
    drilldownOpened: boolean = false;
    drillDownDataMetadata: DrilldownMetadata;


    constructor(
        private dashboardService: DashboardService,
        private commonService: CommonService) { }

    ngOnInit() {
        // this.fetchReportData();
    }

    fetchReportData(): void {
        if (this.metadata && this.metadata.length > 0) {
            this.displayName = this.metadata[0].title;
            this.description = this.metadata[0].description;
            this.id = this.metadata[0].id;
            this.processing = true;
        }

        this.processing = true;
        this.subscription = this.dashboardService.getReportsData(this.selectedNSXManager.vcGuid, this.metadata[0].groupByCategory)
            .subscribe((data) => {
                setTimeout(() => { this.processing = false; }, 1000);
                if (data && data.length > 0) {
                    this.reportData = data[0];
                    this.populateDisplayData();

                }
            });
    }

    populateDisplayData(): void {
        let data = this.reportData;
        let hasErrors: boolean = false;
        if (data.seriesData) {
            data.seriesData.forEach((item) => {
                if (item.count != 0) {
                    hasErrors = true;
                }
            })
        }
        if (data.errorMessage && data.errorMessage != "") {
            this.message = data.errorMessage
        } else if (!hasErrors) {
            this.message = "There are no errors or warnings";
        }

        this.totalCount = data.totalCount;
    }

    showErrorDetails(seriesItem): void {
        // alert("This will show detials for " + seriesItem.displayText);
        this.drilldownOpened = true;
        this.drillDownDataMetadata = {
            label: seriesItem.displayText,
            selectedNSXManager: this.selectedNSXManager,
            reportId: this.id,
            seriesDataId: seriesItem.seriesDataId
        };
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    ngOnChanges(changes): void {
        this.fetchReportData();
    }

}
