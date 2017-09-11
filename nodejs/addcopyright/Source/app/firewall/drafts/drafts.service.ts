/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { FirewallDraftUIDto } from './../../shared/dto/firewall/firewall-draft-uidto';
import { FirewallDraftsUIDto } from './../../shared/dto/firewall/firewall-drafts-uidto';
import { CommonService } from './../../shared/services/common.service';
import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DraftsService {

  private _url: string = "/vsphere-client/nsxvhtml/rest/firewall/";

  constructor(
    private _http: Http,
    private _commonService: CommonService
  ) { }

  getFirewallDrafts(vcGuid: string): Observable<FirewallDraftsUIDto> {
    let url = this._url + "getFirewallDrafts";
    let params: URLSearchParams = new URLSearchParams();
    params.set("vcGuid", vcGuid);

    return this._http.get(url, { search: params }).
      map((response: Response) => <FirewallDraftsUIDto>response.json());

  }

  deleteDraft(vcGuid: string, draftId: number): Observable<any> {
    let url = this._url + "deleteFirewallDraft";
    let params: URLSearchParams = new URLSearchParams();
    params.set("vcGuid", vcGuid);
    params.set("draftId", String(draftId));

    return this._http.get(url, { search: params });
  }

  updateFirewallDraft(vcGuid: string, draft: FirewallDraftUIDto): Observable<FirewallDraftUIDto> {
    let url = this._url + "updateFirewallDraft";
    let params: URLSearchParams = new URLSearchParams();
    params.set("vcGuid", vcGuid);

    return this._http.post(url, draft, { search: params }).map((response: Response) => <FirewallDraftUIDto>response.json())
  }

}
