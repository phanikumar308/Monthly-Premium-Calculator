export type OccupationRating = 'Professional' | 'White Collar' | 'Light Manual' | 'Heavy Manual';

export interface Occupation {
  name: string;
  rating: OccupationRating;
}

export const OCCUPATIONS: Occupation[] = [
  { name: 'Cleaner', rating: 'Light Manual' },
  { name: 'Doctor', rating: 'Professional' },
  { name: 'Author', rating: 'White Collar' },
  { name: 'Farmer', rating: 'Heavy Manual' },
  { name: 'Mechanic', rating: 'Heavy Manual' },
  { name: 'Florist', rating: 'Light Manual' },
  { name: 'Other', rating: 'Heavy Manual' }
];