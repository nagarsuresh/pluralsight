/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

export class PagingInfo{
    pageSize: number;
    startIndex: number;
    totalCount?: number;
    sortBy?: string;
    sortOrderAscending?: boolean = true;
}