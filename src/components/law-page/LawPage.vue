<template>
  <div>
    <b-row class="py-5">
      <h5>Summary</h5>
      {{model.description}}
    </b-row>

    <b-row class="py-3">
      <b-col>
        P - generation:
      </b-col>
      <b-col md="8">
        <b-row class="justify-content-center align-items-center">
          <b-col class="d-flex flex-column align-items-center">
            <img width="100" height="100" :src="getPhenotype(selectedP1Id)">
            <b-form-select
                class="w-auto"
                v-model="selectedP1Id" :options="model.genotypes"
                text-field="name"
                value-field="id"
            ></b-form-select>
          </b-col>
          <b-col cols="1" class="text-center">
            <span>X</span>
          </b-col>
          <b-col class="d-flex flex-column align-items-center">
            <img width="100" height="100"  :src="getPhenotype(selectedP2Id)">
            <b-form-select
                class="w-auto"
                v-model="selectedP2Id" :options="model.genotypes"
                text-field="name"
                value-field="id"
            ></b-form-select>
          </b-col>
        </b-row>
      </b-col>
      <b-col>
        <div>
          <p>Alleles:</p>
          <p v-for="a in model.alleles" :key="a.name">{{a.name}} - {{a.description}}</p>
        </div>
      </b-col>
    </b-row>

    <b-row class="py-3">
      <b-col>
      </b-col>
      <b-col md="8" class="d-flex justify-content-center align-items-center">
        <b-button @click="showResults()">Start</b-button>
      </b-col>
      <b-col>

      </b-col>
    </b-row>
    <ResultsDiagram v-if="P1gametes.length && P2gametes.length"
                    :P1gametes="P1gametes"
                    :P2gametes="P2gametes"
                    :genotypes="model.genotypes"
    ></ResultsDiagram>

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from "vue-property-decorator";
  import { InheritanceModel } from "@/models/inheritance-model.model";
  import {store} from "../../store/store";
  import ResultsDiagram from "./ResultsDiagram.vue";

  @Component({
    components: {
      ResultsDiagram
    }
  })
  export default class LawPage extends Vue {
    P1gametes: string[] = [];
    P2gametes: string[] = [];
    selectedP1Id = 1;
    selectedP2Id = 1;

    get model() {
      return store.selectedModel;
    }

    @Watch('model')
    onModelChanged(value: InheritanceModel, oldValue: InheritanceModel) {
      this.selectedP1Id = 1;
      this.selectedP2Id = 1;
      this.P1gametes = [];
      this.P2gametes = [];
    }
    showResults() {
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
    getPhenotype(id: number) {
      const image =  this.model.genotypes.find(g => g.id === id)?.imageUrl || '';
      return require('../../assets/images/' + image);
    }

  }
</script>

<style lang="scss">

</style>