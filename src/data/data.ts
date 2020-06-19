export default {
  models: [
    {
      id: 1,
      title: "Mendel's law of segregation",
      description: "The law of segregation lets us predict how a single feature associated with a single gene is inherited. During gamete formation, the alleles for each gene segregate from each other so that each gamete carries only one allele for each gene.",
      dihybrid: false,
      alleles: [
        {
          name: "A",
          description: "gray coat"
        },
        {
          name: "a",
          description: "yellow coat"
        }
      ],
      genotypes: [
        {
          id: 1,
          name: 'AA',
          imageUrl: 'gray-dog.png'
        },
        {
          id: 2,
          name: 'Aa',
          imageUrl: 'gray-dog.png'
        },
        {
          id: 3,
          name: 'aa',
          imageUrl: 'yellow-dog.png'
        },

      ]
    },
    {
      id: 2,
      title: "Mendel's law of independent assortment",
      description: "Mendel's law of independent assortment states that the alleles of two (or more) different genes get sorted into gametes independently of one another. In other words, the allele a gamete receives for one gene does not influence the allele received for another gene.",
      dihybrid: true,
      alleles: [
        {
          name: "A",
          description: "yellow"
        },
        {
          name: "a",
          description: "green"
        },
        {
          name: "B",
          description: "smooth",
        },
        {
          name: "b",
          description: "wrinkled"
        }
      ],
      genotypes: [
        {
          id: 1,
          name: 'AABB',
          imageUrl: 'yellow-round.png'
        },
        {
          id: 2,
          name: 'AaBB',
          imageUrl: 'yellow-round.png'
        },
        {
          id: 3,
          name: 'aaBB',
          imageUrl: 'green-round.png'
        },
        {
          id: 4,
          name: 'AABb',
          imageUrl: 'yellow-round.png'
        },
        {
          id: 5,
          name: 'AaBb',
          imageUrl: 'yellow-round.png'
        },
        {
          id: 6,
          name: 'aaBb',
          imageUrl: 'green-round.png'
        },
        {
          id: 7,
          name: 'AAbb',
          imageUrl: 'yellow-wrinkled.png'
        },
        {
          id: 8,
          name: 'Aabb',
          imageUrl: 'yellow-wrinkled.png'
        },
        {
          id: 9,
          name: 'aabb',
          imageUrl: 'green-wrinkled.png'
        },

      ]
    }
  ]
}