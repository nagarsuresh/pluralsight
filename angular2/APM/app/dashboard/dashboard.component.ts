import { Component, OnInit }  from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    pageTitle: string = 'NSX Dashboard';

    constructor(private _dashboardService: DashboardService) {

    }

    ngOnInit(): void {
        this._dashboardService.getMetadata(" ");
    }

}