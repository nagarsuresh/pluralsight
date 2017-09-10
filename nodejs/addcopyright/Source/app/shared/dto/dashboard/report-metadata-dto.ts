/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

export class ReportMetadataDto {
    id: string;
    title: string;
    description: string;
    type: string;
    weight: number;
    groupByCategory: string;
    groupByCategoryDisplayName: string;
    recommendedRefreshInterval: number;
}
