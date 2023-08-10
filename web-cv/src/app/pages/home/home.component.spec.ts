import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { StorageService } from '../../infrastructure/services/storage.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const mockedStorageService = {
    getPhoto: () => {
      return Promise.resolve('url');
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: StorageService, useValue: mockedStorageService }],
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HomeComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should assign the photo url after component creation', async () => {
    component.mainPhoto = '';
    await component.ngOnInit();

    expect(component.mainPhoto).toBe('url');
  });
});
