/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EdgeComponent } from './edge.component';
import {EdgeModule} from "./edge.module";
import {AppModule} from "../app.module";

describe('EdgeComponent', () => {
  let component: EdgeComponent;
  let fixture: ComponentFixture<EdgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AppModule, EdgeModule],
      declarations: [  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
