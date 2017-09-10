/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { ReplicationRole } from './../utils/replication-role';
import { CommonService } from './../services/common.service';
import { VsmInfoDto } from './../dto/common/vsm-info-dto';
import { Subscription } from 'rxjs/Rx';
import { VsmServerService } from './../services/vsm-server.service';
import { Component, OnInit, Output, OnDestroy, EventEmitter } from '@angular/core';

@Component({
    selector: 'vcns-selector',
    templateUrl: './vcns-selector.component.html',
    styleUrls: ['./vcns-selector.component.css']
})
export class VcnsSelectorComponent implements OnInit, OnDestroy {

    private subscription: Subscription;
    fetching: boolean;
    vsmInfoDtos: VsmInfoDto[];
    selectedNsxManager: VsmInfoDto;
    @Output() nsxManagerSelected: EventEmitter<VsmInfoDto> = new EventEmitter<VsmInfoDto>(); 


    constructor(
        private vsmServerService: VsmServerService,
        private commonService: CommonService
    ) { }

    ngOnInit() {
        this.fetching = true;
        this.subscription = this.vsmServerService.getVsmServerList().subscribe(
            //next
            (result) => {
                this.fetching = false;
                this.vsmInfoDtos = result;
                if (this.vsmInfoDtos && this.vsmInfoDtos.length > 0) {
                    this.selectedNsxManager = this.vsmInfoDtos[0];
                    this.nsxManagerSelected.emit(this.selectedNsxManager);
                }
            },
            //failure
            (error) => {
                this.fetching = false;
                this.commonService.publishGlobalError(error);
            }
        );
    }

    onNsxManagerChange(event) {
        this.nsxManagerSelected.emit(this.selectedNsxManager);
    }


    getServerListLabel(item: VsmInfoDto) {
        if (item != null) {
            if (item.replicationRole == ReplicationRole.PRIMARY ||
                item.replicationRole == ReplicationRole.SECONDARY ||
                item.replicationRole == ReplicationRole.UNKNOWN ||
                item.replicationRole == ReplicationRole.TRANSIT) {
                let label: string = item.name;
                if (item.replicationRole == ReplicationRole.PRIMARY) {
                    label += " (Role:Primary)";
                } else if (item.replicationRole == ReplicationRole.SECONDARY) {
                    label += " (Role:Secondary)";
                } else if (item.replicationRole == ReplicationRole.TRANSIT) {
                    label += " (Role:Transit)";
                } else if (item.replicationRole == ReplicationRole.UNKNOWN) {
                    label += " (Role:Unknown)";
                }
                return label;
            }
            return item.name;
        }
        return null;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

}
