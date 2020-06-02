<template>
  <div>
    <b-row class="py-5">
      <h5>Summary</h5>
      {{model.description}}
    </b-row>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { InheritanceModel } from "@/models/inheritance-model.model";
  import {store} from "../../store/store";

  @Component
  export default class LawPage extends Vue {

    get model() {
      return store.selectedModel;
    }

  }
</script>

<style lang="scss">

</style>