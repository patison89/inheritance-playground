<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <font-awesome-icon icon="dna" class="mr-2"/>
        Laws of Inheritance Playground
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-select v-model="selectedModelId"
                           :options="models"
                           value-field="id"
                           text-field="title"
                           @change="onModelSelect()">
            </b-form-select>
          </b-nav-form>

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import models from "../data/inheritance-models.json";
  import { InheritanceModel } from "../models/inheritance-model.model";

  @Component
  export default class Header extends Vue {
    selectedModelId = 1;
    models: InheritanceModel[] = models;

    created() {
      this.selectModel();
    }

    onModelSelect() {
      this.selectModel();
    }

    selectModel() {
      const selectedModel = models.find((model: InheritanceModel) => model.id === this.selectedModelId);
      this.$bus.$emit('modelSelected', selectedModel);
    }



  }
</script>

<style lang="scss">

</style>