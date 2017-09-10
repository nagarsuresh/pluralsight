/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SettingsMainComponent } from './settings-main.component';
import {FirewallModule} from "../firewall.module";
import {AppModule} from "../../app.module";

describe('SettingsMainComponent', () => {
  let component: SettingsMainComponent;
  let fixture: ComponentFixture<SettingsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, FirewallModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
