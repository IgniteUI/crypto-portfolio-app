import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { SignupComponent } from './signup.component';
import { AuthServiceService } from '../services/auth.service';

describe('SignupComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        { provide: AuthServiceService, useValue: { signUp: async () => undefined } }
      ]
    }).compileComponents();
  });

  it('creates a typed reactive registration form', () => {
    const fixture = TestBed.createComponent(SignupComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.form.valid).toBe(false);
  });
});
