import { TestBed, async, inject } from '@angular/core/testing';

import { AuthstudentGuard } from './authstudent.guard';

describe('AuthstudentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthstudentGuard]
    });
  });

  it('should ...', inject([AuthstudentGuard], (guard: AuthstudentGuard) => {
    expect(guard).toBeTruthy();
  }));
});
