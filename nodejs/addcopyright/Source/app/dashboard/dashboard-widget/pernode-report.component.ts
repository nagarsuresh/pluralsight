/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { VsmInfoDto } from './../../shared/dto/common/vsm-info-dto';
import { Subscription } from 'rxjs/Rx';
import { CommonService } from './../../shared/services/common.service';
import { DashboardService } from './../dashboard.service';
import { ReportMetadataDto } from './../../shared/dto/dashboard/report-metadata-dto';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
    selector: 'app-pernode-report',
    templateUrl: './pernode-report.component.html',
    styleUrls: ['./pernode-report.component.css']
})
export class PernodeReportComponent implements OnInit, OnDestroy {

    @Input() metadata: ReportMetadataDto[];
    @Input() selectedNSXManager: VsmInfoDto;
    subscription: Subscription;
    displayName: string;
    nodesList: any[] = [];
    processing = false;


    constructor(
        private dashboardService: DashboardService,
        private commonService: CommonService) { }

    ngOnInit() {
        this.displayName = this.metadata[0].groupByCategoryDisplayName;
        this.metadata.forEach((data) => {
            this.nodesList.push({
                label: data.title,
                id: data.id,
                description: data.description
            });
        });
        this.processing = true;
        this.fetchReportData();
    }

    fetchReportData(): void {
        this.subscription = this.dashboardService.getReportsData(this.selectedNSXManager.vcGuid, this.metadata[0].groupByCategory)
            .subscribe((data) => {
                this.processing = false;
                data.forEach((d) => {
                    this.fillNodesList(d);
                });
            },
            (error) => { this.processing = false; }
            );
    }

    fillNodesList(d): void {
        this.nodesList.forEach((node) => {
            if (node.id === d.metaDataId && d.statusList && d.statusList.length > 0) {
                node['statusList'] = d.statusList;
            }
        })
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    

}
