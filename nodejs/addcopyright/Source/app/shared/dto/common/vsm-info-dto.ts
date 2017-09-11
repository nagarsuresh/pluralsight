/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

export interface VsmInfoDto {
    name: string;
    vsmGuid: string;
    ipAddress: string;
    version: string;
    build: string;
    createdOn: Date;
    totalCpu: number;
    reservedCpu: number;
    totalMemory: number;
    reservedMemory: number;
    totalStorage: number;
    reservedStorage: number;
    vcName: string;
    vcIpAddress: string;
    vcGuid: string;
    replicationRole: string;
    userName: string;
    vcSessionId: string;
    // NsxManagersReplicationErrorDto replicationFailures;

}
