
//Declaring occupation rating
export type OccupationRating = 'Professional' | 'White Collar' | 'Light Manual' | 'Heavy Manual';


//Declaring Occupation interface
export interface Occupation {
  name: string;
  rating: OccupationRating;
}

//Creating Occupations using above interface
export const OCCUPATIONS: Occupation[] = [
  { name: 'Cleaner', rating: 'Light Manual' },
  { name: 'Doctor', rating: 'Professional' },
  { name: 'Author', rating: 'White Collar' },
  { name: 'Farmer', rating: 'Heavy Manual' },
  { name: 'Mechanic', rating: 'Heavy Manual' },
  { name: 'Florist', rating: 'Light Manual' },
  { name: 'Other', rating: 'Heavy Manual' }
];