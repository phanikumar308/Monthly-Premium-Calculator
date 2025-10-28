import { Injectable } from '@angular/core';
import { OccupationRating } from '../models/occupation.model';

@Injectable({ providedIn: 'root' })
export class RatingService {
  //declaring Occupational rating with values 
  private readonly factors: Record<OccupationRating, number> = {
    'Professional': 1.5,
    'White Collar': 2.25,
    'Light Manual': 11.5,
    'Heavy Manual': 31.75
  };
  
  //Fetching rating with OccupationRating as input 
  getFactor(rating: OccupationRating): number {
    return this.factors[rating];
  }
}