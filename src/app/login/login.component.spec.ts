import { provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthServiceService } from '../services/auth.service';

describe('LoginComponent', () => {
  beforeEach(async () => {
    localStorage.removeItem('showSpinner');
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        {
          provide: AuthServiceService,
          useValue: {
            facebookAuth: async () => undefined,
            googleAuth: async () => undefined
          }
        }
      ]
    }).compileComponents();
  });

  it('creates in zoneless mode', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
