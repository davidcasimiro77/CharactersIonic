import { TestBed } from '@angular/core/testing';

import { CharacterCrudService } from './character-crud.service';

describe('CharacterCrudService', () => {
  let service: CharacterCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharacterCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
