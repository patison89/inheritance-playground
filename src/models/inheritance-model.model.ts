export interface InheritanceModel {
  id: number;
  title: string;
  description: string;
  dihybrid: boolean;
  genotypes: Genotype[];
}

export interface Genotype {
  id: number;
  name: string;
  imageUrl: string;
}