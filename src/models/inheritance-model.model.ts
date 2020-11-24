export interface InheritanceModel {
  id: number;
  title: string;
  description: string;
  dihybrid: boolean;
  alleles: Allel[];
  genotypes: Genotype[];
}

export interface Genotype {
  id: number;
  name: string;
  imageUrl: string;
}

export interface Allel {
  name: string;
  description: string;
}