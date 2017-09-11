/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

export interface FirewallDraftUIDto {
    id: number;
    name: string;
    description: string;
    preserve: boolean;
    user: string;
    timestamp: number;
    mode: string;
    config: any;
}
