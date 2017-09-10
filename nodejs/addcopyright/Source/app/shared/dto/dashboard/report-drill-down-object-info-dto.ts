/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { ColumnDataInfoDto } from './column-data-info-dto';
export interface ReportDrillDownObjectInfoDto {
    id: string;
    name: string;
    type: string;
    isHierarchical: boolean;
    detailsKey: string;
    properties?: Array<ColumnDataInfoDto>;
}
