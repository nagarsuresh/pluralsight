/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

export class ReplicationRole {
    public static STANDALONE:String = 'STANDALONE';
    public static PRIMARY:String = 'PRIMARY';     // allows configuration changes to global objects
    public static SECONDARY:String = 'SECONDARY'; // indicates that the manager is added to a cluster as secondary
    public static TRANSIT:String = 'TRANSIT'; // indicates that manager has orphan global objects that need to be cleaned up
    public static UNKNOWN:String = "UNKNOWN";
}