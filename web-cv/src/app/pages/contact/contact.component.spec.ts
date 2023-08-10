import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContactComponent } from './contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule],
      declarations: [ContactComponent],
    });
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ContactComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should disable the button empty form is rendered', () => {
    component.contactForm.pristine;
    const button = fixture.debugElement.query(By.css('button')).nativeElement;

    expect(button.disabled).toBeTruthy();
  });

  it('should enable the button after filling the form', () => {
    const formData = {
      name: '',
      email: 'test@test.com',
      message: 'testMessage',
    };
    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    component.contactForm.setValue(formData);
    fixture.detectChanges();

    expect(button.disabled).toBeFalsy();
  });
});
