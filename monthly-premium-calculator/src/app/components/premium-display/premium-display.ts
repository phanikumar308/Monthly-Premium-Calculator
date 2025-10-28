import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-premium-display',
  imports: [CommonModule],
  templateUrl: 'premium-display.html',
  styleUrl: './premium-display.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PremiumDisplay {
  @Input() premium: number | null = null;
 }
