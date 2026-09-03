import { provideZonelessChangeDetection, signal } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthServiceService } from './services/auth.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        provideZonelessChangeDetection(),
        provideAnimations(),
        provideRouter([]),
        {
          provide: AuthServiceService,
          useValue: {
            user: signal(null),
            signOut: async () => undefined
          }
        }
      ]
    }).compileComponents();
  });

  it('creates the application shell in zoneless mode', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    await fixture.whenStable();

    expect(fixture.componentInstance).toBeTruthy();
  });
});
