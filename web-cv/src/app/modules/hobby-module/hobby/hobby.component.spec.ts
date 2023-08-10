import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyComponent } from './hobby.component';
import { StorageService } from '../../../infrastructure/services/storage.service';
import { DialogModule } from '@angular/cdk/dialog';
import { ModalComponent } from './components/modal/modal.component';
import { By } from '@angular/platform-browser';

describe('HobbyComponent', () => {
  let component: HobbyComponent;
  let fixture: ComponentFixture<HobbyComponent>;
  const mockedStorageService = {
    getPhoto: () => {
      return Promise.resolve('url');
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HobbyComponent],
      imports: [DialogModule],
      providers: [{ provide: StorageService, useValue: mockedStorageService }],
    });
    fixture = TestBed.createComponent(HobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create HobbyComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should assign photo url when component was initialized', async () => {
    component.travelPhotoUrl = '';
    await component.ngOnInit();
    expect(component.travelPhotoUrl).toBe('url');
  });
});
