<template>
  <div>
    <b-table-simple hover small caption-top responsive>
      <b-thead>
        <b-tr>
          <b-th>P1/P2</b-th>
          <b-th v-for="(g1, index) in P1gametes" :key="`g1-${index}`"> {{g1}}</b-th>
        </b-tr>
        <b-tr v-for="(g2, index) in P2gametes" :key="`g2-${index}`">
          <b-th>{{g2}}</b-th>
          <b-th v-for="(g1, index) in P1gametes" :key="`g1-${index}`">{{getGamete(g1, g2)}}</b-th>

        </b-tr>
      </b-thead>
    </b-table-simple>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from "vue-property-decorator";

  @Component
  export default class ResultsDiagram extends Vue {
  @Prop() readonly P1gametes!: string[];
  @Prop() readonly P2gametes!: string[];

  getGamete(g1: string, g2: string) {
    const isUpperCase = (string: string) => /^[A-Z]*$/.test(string);
    return g1.split("").map((char, i) => isUpperCase(char) ? char + g2.split("")[i] : g2.split("")[i] + char).join("")
  }
  }
</script>

<style lang="scss"></style>
