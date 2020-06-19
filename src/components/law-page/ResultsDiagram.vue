<template>
  <div>
    <b-row class="py-3">
      <b-col>
        F1 - generation
      </b-col>
      <b-col>
        <b-table-simple hover small caption-top responsive>
          <b-thead>
            <b-tr>
              <b-th>P1/P2</b-th>
              <b-th v-for="(g1, i) in P1gametes" :key="`g1-${i}`"> {{g1}}</b-th>
            </b-tr>
            <b-tr v-for="(g2, i) in P2gametes" :key="`g2-${i}`">
              <b-th>{{g2}}</b-th>
              <b-th v-for="(g1, i) in P1gametes" :key="`g1-${i}`">{{getGenotype(g1, g2)}}</b-th>

            </b-tr>
          </b-thead>
        </b-table-simple>
      </b-col>
      <b-col></b-col>
    </b-row>
    <b-row class="py-3 text-center">
      <b-col>
        <p>Genotypic ratio:</p>
        <b-row>
          <b-col v-for="(g, i) of genotypicRatios" :key="`gen-${i}`">
            <p>{{g.ratio}} <span class="float-right" v-if="i !== genotypicRatios.length - 1">: </span></p>
            <p>{{g.genotype}}</p>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <p>Phenotypic ratio:</p>
        <b-row>
          <b-col v-for="(p, i) of phenotypicRatios" :key="`phen-${i}`">
            <p>{{p.ratio}} <span class="float-right" v-if="i !== phenotypicRatios.length - 1">: </span></p>
            <img width="80" height="80" :src="p.imageUrl">
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";
  import { GenotypicRatio } from "../../models/genotypic-ratio.model";
  import { Genotype } from "../../models/inheritance-model.model";
  import { PhenotypicRatio } from "../../models/phenotypic-ratio.model";

  @Component
  export default class ResultsDiagram extends Vue {
    @Prop() readonly P1gametes!: string[];
    @Prop() readonly P2gametes!: string[];
    @Prop() readonly genotypes!: Genotype[];

    get genotypicRatios() {
      const result: GenotypicRatio[] = [];
      const allGenotypes = this.getAllGenotypes().sort();
      for(let i = 0; i < allGenotypes.length; i++) {
        console.log(allGenotypes);
        const occurrenceNumber = [...allGenotypes].filter(a => a === allGenotypes[i]).length;
        result.push({genotype: allGenotypes[i], ratio: occurrenceNumber});
        allGenotypes.splice(i, occurrenceNumber - 1);
      }
      return result;
    }
    get phenotypicRatios() {
      const result: PhenotypicRatio[] = [];
      const phenotypes = this.getAllGenotypes().map(g => this.genotypes.find(gen => gen.name === g)?.imageUrl).sort();
      for(let i = 0; i < phenotypes.length; i++) {
        const occurrenceNumber = [...phenotypes].filter(a => a === phenotypes[i]).length;
        result.push({imageUrl: require('../../assets/images/' + phenotypes[i]), ratio: occurrenceNumber});
        phenotypes.splice(i, occurrenceNumber - 1);
      }
      return result.sort((a, b) => b.ratio - a.ratio);
    }

    getGenotype(g1: string, g2: string) {
      const isUpperCase = (string: string) => /^[A-Z]*$/.test(string);
      return g1.split("").map((char, i) => isUpperCase(char) ? char + g2.split("")[i] : g2.split("")[i] + char).join("")
    }
    getAllGenotypes() {
      const allGenotypes = [];
      for(let i = 0; i < this.P1gametes.length; i++) {
        for(let j = 0; j < this.P2gametes.length; j++) {
          allGenotypes.push(this.getGenotype(this.P1gametes[i], this.P2gametes[j]))
        }
      }
      return allGenotypes;
    }
  }
</script>

<style lang="scss"></style>
