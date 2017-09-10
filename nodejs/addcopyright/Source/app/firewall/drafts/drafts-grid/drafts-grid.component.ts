/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { FirewallDraftUIDto } from './../../../shared/dto/firewall/firewall-draft-uidto';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { DraftsService } from '../drafts.service';

@Component({
    selector: 'app-drafts-grid',
    templateUrl: './drafts-grid.component.html',
    styleUrls: ['./drafts-grid.component.css']
})
export class DraftsGridComponent implements OnInit {

    constructor(private _draftsService: DraftsService) { }

    @Input() draftsList: FirewallDraftUIDto[] = [];
    @Output() deleteDraft: EventEmitter<FirewallDraftUIDto> = new EventEmitter<FirewallDraftUIDto>();
    @Output() editDraft: EventEmitter<FirewallDraftUIDto> = new EventEmitter<FirewallDraftUIDto>();

    selectedRows: Array<FirewallDraftUIDto> = [];
    selectedDraft: FirewallDraftUIDto;
    showConfirmDelete: boolean = false;

    ngOnInit(): void {

    }

    onRowSelection(draft:FirewallDraftUIDto): void{
        // this.selectedRows = [draft];
    }

    onDeleteClick(): void {
        if (this.selectedRows.length > 1) {
            alert("More than 1 row selected");
            return;
        }
        this.selectedDraft = this.selectedRows[0];
        this.showConfirmDelete = true;

    }

    deleteSelectedDraft(): void {
        if (this.selectedRows.length > 0) {
            this.deleteDraft.emit(this.selectedRows[0]);
            this.showConfirmDelete = false;
        }
    }

    onEditClick(): void {
        if (this.selectedRows.length > 1) {
            return;
        }
        this.editDraft.emit(this.selectedRows[0]);
    }

}
