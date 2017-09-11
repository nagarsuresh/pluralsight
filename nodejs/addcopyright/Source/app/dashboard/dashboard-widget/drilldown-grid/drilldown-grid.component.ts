/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { ColumnDataInfoDto } from './../../../shared/dto/dashboard/column-data-info-dto';
import { ReportDrillDownObjectInfoDto } from './../../../shared/dto/dashboard/report-drill-down-object-info-dto';
import { Subscription } from 'rxjs/Rx';
import { PagingInfo } from './../../../shared/dto/common/paging-info';
import { DrilldownMetadata } from './../../../shared/dto/dashboard/drilldown-metadata';
import { DashboardService } from './../../dashboard.service';
import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-drilldown-grid',
  templateUrl: './drilldown-grid.component.html',
  styleUrls: ['./drilldown-grid.component.css']
})
export class DrilldownGridComponent implements OnInit, OnChanges, OnDestroy {

  @Input() drillDownDataMetadata: DrilldownMetadata;

  //drill down variables
  fetchSubscription: Subscription;
  showDrilldowngrid: boolean = true;
  isLoading: boolean = false;
  hasDetails: boolean = false;
  columns: Array<ColumnDataInfoDto> = [];
  gridData: Array<any> = [];

  //nested drilled down variables..
  nestedFetchSubscription: Subscription;
  showNestedDrilldownGrid: boolean = false;
  isNestedLoading: boolean = false;
  nestedColumns: Array<ColumnDataInfoDto>;
  nestedGridData: Array<any>;
  nestedDrilldownTitle: string = "";


  //@TODO - implement paging, temporary fetching first 100 records only  
  pagingInfo: PagingInfo = {
    pageSize: 100,
    startIndex: 0,
    sortBy: 'name'
  }

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
  }

  ngOnChanges(changes): void {
    let metadata = changes.drillDownDataMetadata.currentValue;
    if (!metadata) {
      return;
    }

    this.isLoading = true;
    this.fetchSubscription = this.dashboardService.getReportDrilldownList(
      this.drillDownDataMetadata.selectedNSXManager.vcGuid,
      this.drillDownDataMetadata.reportId,
      this.drillDownDataMetadata.seriesDataId,
      this.pagingInfo
    ).subscribe((response: {
      data: Array<ReportDrillDownObjectInfoDto>,
      pagingInfo: PagingInfo
    }) => {
      console.log(response);
      this.createGrid(response.data);
      this.isLoading = false;
    });
  }

  private createGrid(data: Array<ReportDrillDownObjectInfoDto>) {
    this.createColumns(data);
    this.populateData(data);
  }

  private createColumns(data: Array<ReportDrillDownObjectInfoDto>): void {
    if (data && data.length > 0) {
      this.columns.push({
        columnHeader: 'Name',
        columnValue: null,
        columnType: null
      });
      this.columns.push(...data[0].properties);
      if (data[0].isHierarchical) {
        this.hasDetails = true;
      }


    }
  }
  private populateData(data: Array<ReportDrillDownObjectInfoDto>): void {
    data.forEach((info) => {
      let row = {
        Name: info.name,
        hasDetails: info.isHierarchical,
        detailsKey: info.detailsKey
      };

      info.properties.forEach(property => {
        row[property.columnHeader] = property.columnValue;
      });

      this.gridData.push(row);
    });
  }


  private onNestedDrilldown(row): void {
    let detailsKey: string = row['detailsKey'];
    this.nestedDrilldownTitle = row['Name'];

    this.isNestedLoading = true;
    this.showDrilldowngrid = false;
    this.showNestedDrilldownGrid = true;

    this.nestedColumns = [];    
    this.nestedGridData = [];
    
    this.nestedFetchSubscription = this.dashboardService.getNestedReportDrilldownList(
      this.drillDownDataMetadata.selectedNSXManager.vcGuid,
      this.drillDownDataMetadata.reportId,
      this.drillDownDataMetadata.seriesDataId,
      detailsKey,
      this.pagingInfo
    ).subscribe((response: {
      data: Array<ReportDrillDownObjectInfoDto>,
      pagingInfo: PagingInfo
    }) => {
      this.createNestedGrid(response.data);
      this.isNestedLoading = false;
    });
  }

  private createNestedGrid(data: Array<ReportDrillDownObjectInfoDto>): void {
    this.createNestedColumns(data);
    this.populateNestedData(data);
  }

  private createNestedColumns(data: Array<ReportDrillDownObjectInfoDto>): void {

    if (data && data.length > 0) {
      this.nestedColumns.push({
        columnHeader: 'Name',
        columnValue: null,
        columnType: null
      });
      this.nestedColumns.push(...data[0].properties);
    }
  }

  private populateNestedData(data: Array<ReportDrillDownObjectInfoDto>): void {

    data.forEach((info) => {
      let row = {
        Name: info.name
      };

      info.properties.forEach(property => {
        row[property.columnHeader] = property.columnValue;
      });

      this.nestedGridData.push(row);

    });
  }

  onBack(): void{
    this.showNestedDrilldownGrid = false;
    this.showDrilldowngrid = true;
  }



  ngOnDestroy(): void {
    if (this.fetchSubscription) this.fetchSubscription.unsubscribe();
    if (this.nestedFetchSubscription) this.nestedFetchSubscription.unsubscribe();
  }


}
