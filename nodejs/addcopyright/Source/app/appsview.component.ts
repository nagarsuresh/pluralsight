/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { Component, OnInit, trigger, state, transition, style, animate } from '@angular/core';

@Component({
    selector: 'app-appsview',
    templateUrl: './appsview.component.html',
    styleUrls: ['./appsview.component.css'],
    animations: [
        trigger('flyInOut', [
            state('in', style({ transform: 'translateX(0)' })),
            transition('void => *', [
                style({ transform: 'translateX(100%)', opacity: 0 }),
                animate('0.2s ease-in')
            ]),
            transition('* => void', [
                animate(100, style({ transform: 'translateX(100%)' }))
            ])
        ])
    ]
})
export class AppsviewComponent implements OnInit {
    state: string;
    cards: Array<any> = [
        {
            title: 'Getting Started',
            faClass: 'fa fa-puzzle-piece fa-5x',
            route: '/home'
        },
        {
            title: 'Dashboard',
            faClass: 'fa fa-desktop fa-5x',
            route: '/dashboard'
        },
        {
            title: 'Installation',
            faClass: 'fa fa-plug fa-5x',
            route: '/installation'
        },
        {
            title: 'Logical Switches',
            faClass: 'fa fa-arrows-h fa-5x',
            route: '/logicalswitches'
        },
        {
            title: 'NSX Edges',
            faClass: 'fa fa-code-fork fa-5x',
            route: '/edge'
        },
        {
            title: 'Firewall',
            faClass: 'fa fa-fire fa-5x',
            route: '/firewall'
        },
        {
            title: 'Spoof Guard',
            faClass: 'fa fa-shield fa-5x',
            route: '/spoofguard'
        },
        {
            title: 'Service Definitions',
            faClass: 'fa fa-newspaper-o fa-5x',
            route: '/servicedefinitions'
        },
        {
            title: 'Flow Monitoring',
            faClass: 'fa fa-arrow-circle-o-right fa-5x',
            route: '/flowmonitoring'
        },
        {
            title: 'Activity Monitoring',
            faClass: 'fa fa-wpexplorer fa-5x',
            route: '/activitymonitoring'
        },
        {
            title: 'Endpoint Monitoring',
            faClass: 'fa fa-thermometer-half fa-5x',
            route: '/endpointmonitoring'
        },
        {
            title: 'Traceflow',
            faClass: 'fa fa-flash fa-5x',
            route: '/traceflow'
        },
        {
            title: 'NSX Managers',
            faClass: 'fa fa-cogs fa-5x',
            route: '/nsxmanagers'
        }
    ];

    constructor() { }

    ngOnInit() {
        this.state = 'in';
    }

}
