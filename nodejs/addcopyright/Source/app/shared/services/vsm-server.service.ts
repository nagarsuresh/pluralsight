/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { VsmInfoDto } from './../dto/common/vsm-info-dto';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VsmServerService {
  private _url: string = "/vsphere-client/nsxvhtml/rest/common/";
  constructor(private http: Http) { }

  getVsmServerList(): Observable<VsmInfoDto[]> {
    let url = this._url + "getVsmServerList";
    return this.http.get(url).map(
      (response: Response) => {
        let nsxManagerList: VsmInfoDto[] = <VsmInfoDto[]>response.json();
        // let x:VsmInfoDto = JSON.parse(JSON.stringify(nsxManagerList[0]));
        // x.name = "Modified";
        // nsxManagerList.push(x);
        
        return nsxManagerList;
      }
    );
  }



}
