/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

import { Constants } from './../../shared/utils/constants';
import { VsmInfoDto } from './../../shared/dto/common/vsm-info-dto';
import { FirewallDraftUIDto } from './../../shared/dto/firewall/firewall-draft-uidto';
import { FirewallDraftsUIDto } from './../../shared/dto/firewall/firewall-drafts-uidto';
import { Subscription } from 'rxjs/Rx';
import { CommonService } from './../../shared/services/common.service';
import { DraftsService } from './drafts.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as _ from "lodash";

@Component({
  selector: 'app-drafts-main',
  templateUrl: './drafts-main.component.html',
  styleUrls: ['./drafts-main.component.css']
})
export class DraftsMainComponent implements OnInit, OnDestroy {

  //subscriptions for CRUD Operation, defined explicitly to nullify and also to attach ng-busy spinner
  fetchSubscription: Subscription;
  deleteSubscription: Subscription;
  updateSubscription: Subscription;

  draftsList: Array<FirewallDraftUIDto>[] = [];
  selectedNSXManager: VsmInfoDto;
  editDialogOpened: boolean = false;
  editDraftForm: FormGroup;
  selectedDraft: FirewallDraftUIDto;

  constructor(
    private draftsService: DraftsService,
    private commonService: CommonService,
    private formBuilder: FormBuilder) {
      this.commonService.globalRefreshSubject.subscribe(() => {
        this.fetchDrafts();
      })
    }

  ngOnInit() {
    // this.fetchDrafts();
    this.initEditDraftForm();

  }

  onNsxManagerAvailable(vsmInfoDto: VsmInfoDto) {
    this.selectedNSXManager = vsmInfoDto;
    this.fetchDrafts();
  }

  private fetchDrafts(): void {
    this.fetchSubscription = this.draftsService.getFirewallDrafts(this.selectedNSXManager.vcGuid)
      .subscribe((drafts: FirewallDraftsUIDto) => {
        this.draftsList = drafts.firewallDrafts;
      }, (error) => {
        this.commonService.publishGlobalError(error);
      });
  }

  onDraftDelete(draft: FirewallDraftUIDto): void {
    this.deleteSubscription = this.draftsService.deleteDraft(this.selectedNSXManager.vcGuid, draft.id)
      .subscribe((result) => {
        this.fetchDrafts();
      });
  }

  onDraftEdit(draft: FirewallDraftUIDto): void {
    this.selectedDraft = draft;
    this.editDraftForm.patchValue(draft);
    this.editDialogOpened = true;

  }

  private initEditDraftForm(): void {
    let formGroup = this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['']
    });

    this.editDraftForm = formGroup;
  }

  onEditFormSubmit(): void {
    if (!this.editDraftForm.valid) {
      return;
    }
    this.editDialogOpened = false;

    let values = this.editDraftForm.value;
    _.assign(this.selectedDraft, values);

    this.selectedDraft.config = {
      scope: { objectId: Constants.GLOBAL_ROOT }
    };

    this.updateSubscription = this.draftsService.updateFirewallDraft(this.selectedNSXManager.vcGuid, this.selectedDraft).subscribe(
      (result) => {
        this.fetchDrafts();
      },
      (error) => {
        this.commonService.publishGlobalError(error)
      }
    )
  }



  ngOnDestroy() {
    if (this.fetchSubscription) this.fetchSubscription.unsubscribe();
    if (this.deleteSubscription) this.deleteSubscription.unsubscribe();
    if (this.updateSubscription) this.updateSubscription.unsubscribe();
  }



}
