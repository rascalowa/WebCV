import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocalStorageService } from './local-storage.service';

describe('Local Storage Service', () => {
  let service: LocalStorageService;
  const mockObj = { name: 'pl', email: 'pl@pl.pl', message: 'plplpl' };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });

    service = TestBed.get(LocalStorageService);
  });

  it('creates an instance of a service', () => {
    expect(service).toBeTruthy();
  });

  it('should get an item with key "key1" and its value, when getItem method is invoked', () => {
    service.setItem('key1', mockObj);

    expect(service.getItem('key1')).toEqual(mockObj);
  });

  it('removes item correctly when removeItem method invoked', () => {
    service.removeItem('key1');

    expect(service.getItem('key1')).toBeFalsy();
  });
});
