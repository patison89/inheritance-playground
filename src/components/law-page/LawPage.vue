<template>
  <div>
    <b-row class="py-5">
      <h5>Summary</h5>
      {{model.description}}
    </b-row>

    <b-row class="align-items-center py-3">
      <b-col>
        P - generation:
      </b-col>
      <b-col md="8" class="d-flex justify-content-center align-items-center">
        <b-form-select
            class="w-auto"
            :value="selectedP1Id" :options="model.genotypes"
            text-field="name"
            value-field="id"
            @change="setP1($event)"
        ></b-form-select>
        <span class="mx-4">X</span>
        <b-form-select
            class="w-auto"
            :value="selectedP2Id" :options="model.genotypes"
            text-field="name"
            value-field="id"
            @change="setP2($event)"
        ></b-form-select>
      </b-col>
      <b-col>
          <b-button @click="showResults()">Start</b-button>
      </b-col>

    </b-row>

    <b-row class="py-3">
      <b-col>
      </b-col>
      <b-col md="8" class="d-flex justify-content-center align-items-center">
        Animation
      </b-col>
      <b-col>
        Alleles:
      </b-col>
    </b-row>
    <b-row v-if="P1gametes && P2gametes" class="justify-content-center py-3">
      <ResultsDiagram :P1gametes="P1gametes" :P2gametes="P2gametes"></ResultsDiagram>
    </b-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { InheritanceModel } from "@/models/inheritance-model.model";
  import {mutations, store} from "../../store/store";
  import ResultsDiagram from "./ResultsDiagram.vue";

  @Component({
    components: {
      ResultsDiagram
    }
  })
  export default class LawPage extends Vue {
    P1gametes: string[] = [];
    P2gametes: string[] = [];

    get model() {
      return store.selectedModel;
    }
    get selectedP1Id() {
      return store.selectedP1Id;
    }
    get selectedP2Id() {
      return store.selectedP2Id;
    }

    setP1(id: number) {
      mutations.setP1Id(id);
    }
    setP2(id: number) {
      mutations.setP2Id(id);
    }
    showResults() {
      console.log('Start');
      const uniqueAllelesP1 = this.getUniqueAlleles(this.selectedP1Id);
      const uniqueAllelesP2 = this.getUniqueAlleles(this.selectedP2Id);
      if (this.model.dihybrid) {
        this.P1gametes = this.getDihybridGametes(uniqueAllelesP1);
        this.P2gametes = this.getDihybridGametes(uniqueAllelesP2);
      } else {
        this.P1gametes = uniqueAllelesP1;
        this.P2gametes = uniqueAllelesP2;
      }
    }

    getUniqueAlleles(id: number) {
      const selectedAlleles = this.model.genotypes.find(g => g.id === id)?.name.split("") || [];
      const uniqueAlleles = [...new Set(selectedAlleles)];
      return uniqueAlleles;
    }
    getDihybridGametes(alleles: string[]) {
      return alleles.flatMap(
        (v, i) => alleles.slice(i+1)
          .filter(w => v.toLowerCase() !== w.toLowerCase())
          .map(el => v + el)
        );
    }

  }
</script>

<style lang="scss">

</style>