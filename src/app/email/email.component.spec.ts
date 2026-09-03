import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { EmailComponent } from './email.component';
import { AuthServiceService } from '../services/auth.service';

describe('EmailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        {
          provide: AuthServiceService,
          useValue: { signInAndRedirect: async () => undefined }
        }
      ]
    }).compileComponents();
  });

  it('creates a typed reactive sign-in form', () => {
    const fixture = TestBed.createComponent(EmailComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance.form.valid).toBe(false);
  });
});
