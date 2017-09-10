/* **********************************************************************
 * Copyright 2017 VMware, Inc.  All rights reserved. VMware Confidential
 * *********************************************************************/

/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DraftsService } from './drafts.service';

describe('DraftsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: []
    });
  });

  it('should ...', inject([DraftsService], (service: DraftsService) => {
    //expect(service).toBeTruthy();
  }));
});
