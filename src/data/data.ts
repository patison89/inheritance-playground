export default {
  models: [
    {
      id: 1,
      title: "Mendel's law of segregation",
      description: "The law of segregation lets us predict how a single feature associated with a single gene is inherited. During gamete formation, the alleles for each gene segregate from each other so that each gamete carries only one allele for each gene.",
      dihybrid: false,
      genotypes: [
        {
          id: 1,
          name: 'AA',
          imageUrl: ''
        },
        {
          id: 2,
          name: 'Aa',
          imageUrl: ''
        },
        {
          id: 3,
          name: 'aa',
          imageUrl: ''
        },

      ]
    },
    {
      id: 2,
      title: "Mendel's law of independent assortment",
      description: "Mendel's law of independent assortment states that the alleles of two (or more) different genes get sorted into gametes independently of one another. In other words, the allele a gamete receives for one gene does not influence the allele received for another gene.",
      dihybrid: true,
      genotypes: [
        {
          id: 1,
          name: 'AABB',
          imageUrl: ''
        },
        {
          id: 2,
          name: 'AaBB',
          imageUrl: ''
        },
        {
          id: 3,
          name: 'aaBB',
          imageUrl: ''
        },
        {
          id: 4,
          name: 'AABb',
          imageUrl: ''
        },
        {
          id: 5,
          name: 'AaBb',
          imageUrl: ''
        },
        {
          id: 6,
          name: 'aaBb',
          imageUrl: ''
        },
        {
          id: 7,
          name: 'AAbb',
          imageUrl: ''
        },
        {
          id: 8,
          name: 'Aabb',
          imageUrl: ''
        },
        {
          id: 9,
          name: 'aabb',
          imageUrl: ''
        },

      ]
    }
  ]
}