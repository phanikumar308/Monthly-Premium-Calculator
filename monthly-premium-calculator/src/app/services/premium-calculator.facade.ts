import { Injectable } from '@angular/core';
import { RatingService } from './rating.service';
import { PremiumService } from './premium.service';
import { Occupation } from '../models/occupation.model';

/*
  This class acts as a single entry point for all premium-related logic.
  Instead of the component directly using multiple services,
  it calls this facade method `calculate()` for cleaner code and easier testing.
 */
@Injectable({ providedIn: 'root' })
export class PremiumCalculatorFacade {

  // Inject RatingService and PremiumService
  constructor(
    private ratingService: RatingService,
    private premiumService: PremiumService
  ) {}

  /*
    Calculates monthly premium based on:
    - Age (Next Birthday)
    - Death Cover amount
    - Occupation (to derive rating factor)
   
    Formula:
      (Cover * Factor * Age) / 1000 * 12
   */
  calculate(age: number, cover: number, occupation: Occupation): number {
    // 1️⃣ Get rating factor from the occupation's rating
    const factor = this.ratingService.getFactor(occupation.rating);

    // 2️⃣ Compute premium using the core formula
    const premium = this.premiumService.calculateMonthlyPremium(cover, factor, age);

    // 3️⃣ Return final rounded premium amount
    return premium;
  }
}