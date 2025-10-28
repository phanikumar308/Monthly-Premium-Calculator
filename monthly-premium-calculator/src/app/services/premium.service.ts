import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PremiumService {

  //Calculating premium with parameters cover, factor , age and return monthly premium  
  calculateMonthlyPremium(cover: number, factor: number, age: number): number {
    const premium = ((cover * factor * age) / 1000) * 12;
    return Math.round(premium * 100) / 100;
  }
}