import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PremiumCalculator } from './components/premium-calculator/premium-calculator';
import { PremiumDisplay } from './components/premium-display/premium-display';

@Component({
  selector: 'app-root',
  imports: [CommonModule, PremiumCalculator, PremiumDisplay],
  templateUrl: 'app.html',
  styles: [],
})
export class App {
  premium = signal<number | null>(null);

  onPremiumCalculated(value: number): void {
    this.premium.set(value);
  }
}
