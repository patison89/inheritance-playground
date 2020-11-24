/* eslint-disable */
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
    },
    {
      id: 3,
      title: "Dominant epistasis",
      description: "Epistasis is genetic phenomenon that is defined by an interaction of genetic variation at two or more loci to produce a phenotypic outcome that is not predicted by the additive combination of effects attributable to the individual loci. The alleles that are being masked or silenced are said to be hypostatic to the epistatic alleles that are doing the masking. Dominant epistasis happens when the dominant allele of one gene masks the expression of all alleles of another gene. Example: fruit colour in squash. Alleles of a locus B produce either yellow (B_) or green (bb) fruit. However, in the presence of a dominant allele at a second locus A, no pigment is produced at all, and fruit are white. The dominant A allele is therefore epistatic to both B and bb combinations.",
      dihybrid: true,
      alleles: [
        {
          name: "A",
          description: "white (epistatic)"
        },
        {
          name: "a",
          description: "non-white"
        },
        {
          name: "B",
          description: "yellow ",
        },
        {
          name: "b",
          description: "green"
        }
      ],
      genotypes: [
        {
          id: 1,
          name: 'AABB',
          imageUrl: 'white-squash.png'
        },
        {
          id: 2,
          name: 'AaBB',
          imageUrl: 'white-squash.png'
        },
        {
          id: 3,
          name: 'aaBB',
          imageUrl: 'yellow-squash.png'
        },
        {
          id: 4,
          name: 'AABb',
          imageUrl: 'white-squash.png'
        },
        {
          id: 5,
          name: 'AaBb',
          imageUrl: 'white-squash.png'
        },
        {
          id: 6,
          name: 'aaBb',
          imageUrl: 'yellow-squash.png'
        },
        {
          id: 7,
          name: 'AAbb',
          imageUrl: 'white-squash.png'
        },
        {
          id: 8,
          name: 'Aabb',
          imageUrl: 'white-squash.png'
        },
        {
          id: 9,
          name: 'aabb',
          imageUrl: 'green-squash.png'
        },

      ]
    },
    {
      id: 4,
      title: "Recessive epistasis",
      description: "Epistasis is genetic phenomenon that is defined by an interaction of genetic variation at two or more loci to produce a phenotypic outcome that is not predicted by the additive combination of effects attributable to the individual loci. The alleles that are being masked or silenced are said to be hypostatic to the epistatic alleles that are doing the masking. \/n Recessive epistasis happens when the recessive allele of one gene masks the effects of either allele of the second gene. Example:  pigmentation in mice.  The wild-type coat color, agouti (BB), is dominant to solid-colored fur (bb).However, a separate gene (A) is necessary for pigment production. A mouse with a recessive a allele at this locus is unable to produce pigment and is albino regardless of the allele present at locus B.",
      dihybrid: true,
      alleles: [
        {
          name: "A",
          description: "non-albinos"
        },
        {
          name: "a",
          description: "albinos (epistatic)"
        },
        {
          name: "B",
          description: "agouti ",
        },
        {
          name: "b",
          description: "solid black"
        }
      ],
      genotypes: [
        {
          id: 1,
          name: 'AABB',
          imageUrl: 'agouti-mouse.png'
        },
        {
          id: 2,
          name: 'AaBB',
          imageUrl: 'agouti-mouse.png'
        },
        {
          id: 3,
          name: 'aaBB',
          imageUrl: 'albinos-mouse.png'
        },
        {
          id: 4,
          name: 'AABb',
          imageUrl: 'agouti-mouse.png'
        },
        {
          id: 5,
          name: 'AaBb',
          imageUrl: 'agouti-mouse.png'
        },
        {
          id: 6,
          name: 'aaBb',
          imageUrl: 'albinos-mouse.png'
        },
        {
          id: 7,
          name: 'AAbb',
          imageUrl: 'black-mouse.png'
        },
        {
          id: 8,
          name: 'Aabb',
          imageUrl: 'black-mouse.png'
        },
        {
          id: 9,
          name: 'aabb',
          imageUrl: 'albinos-mouse.png'
        },

      ]
    }
  ]
}