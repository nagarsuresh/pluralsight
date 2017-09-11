/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FirewallComponent } from './firewall.component';
import {AppModule} from "../app.module";
import {FirewallModule} from "./firewall.module";

describe('FirewallComponent', () => {
  let component: FirewallComponent;
  let fixture: ComponentFixture<FirewallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, FirewallModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
