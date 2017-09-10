/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { VsmInfoDto } from './../common/vsm-info-dto';
export interface DrilldownMetadata {
    label: string,
    selectedNSXManager: VsmInfoDto,
    reportId: string,
    seriesDataId: string
}