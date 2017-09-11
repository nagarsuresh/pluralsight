/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { ReportDrillDownObjectInfoDto } from './../shared/dto/dashboard/report-drill-down-object-info-dto';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ReportMetadataDto } from '../shared/dto';
import { CommonService } from '../shared/services/common.service';
import { PagingInfo } from './../shared/dto/common/paging-info';

@Injectable()
export class DashboardService {

  private _url: string = "/vsphere-client/nsxvhtml/rest/dashboard/";

  constructor(
    private _http: Http,
    private _commonService: CommonService
  ) { }

  getReportMetadataList(vcGuid: string): Observable<ReportMetadataDto[]> {
    let url = this._url + "getReportMetadataList?vcGuid=" + vcGuid;

    return this._http.get(url).
      map((response: Response) => <ReportMetadataDto[]>response.json());

  }

  getReportsData(vcGuid: string, category: string): Observable<any[]> {
    let url = this._url + "getReportsData";
    var params: URLSearchParams = new URLSearchParams();
    params.set("vcGuid", vcGuid);
    params.set("category", category);

    return this._http.get(url, { search: params }).
      map((response: Response) => <any[]>response.json());

  }


  getReportDrilldownList(vcGuid: string, reportId: string, seriesDataId: string, pagingInfo: PagingInfo): Observable<{
    data: Array<ReportDrillDownObjectInfoDto>,
    pagingInfo: PagingInfo
  }> {
    let url = this._url + "getReportDrilldownList";
    let params: URLSearchParams = new URLSearchParams();
    params.set("vcGuid", vcGuid);
    params.set("reportId", reportId);
    params.set("seriesDataId", seriesDataId);

    return this._http.post(url, pagingInfo, { search: params }).map((response: Response) => response.json())

  }


  getNestedReportDrilldownList(vcGuid: string, reportId: string, seriesDataId: string, detailsKey: string, pagingInfo: PagingInfo): Observable<{
    data: Array<ReportDrillDownObjectInfoDto>,
    pagingInfo: PagingInfo
  }> {

    let url = this._url + "getNestedReportDrilldownList";
    let params: URLSearchParams = new URLSearchParams();
    params.set("vcGuid", vcGuid);
    params.set("reportId", reportId);
    params.set("seriesDataId", seriesDataId);
    params.set("detailsKey", detailsKey);

    return this._http.post(url, pagingInfo, { search: params }).map((response: Response) => response.json())

  }


}
