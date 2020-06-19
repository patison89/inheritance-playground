<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">
        <font-awesome-icon icon="dna" class="mr-2" />
        Laws of Inheritance Playground
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-select
              :value="selectedModelId"
              :options="allModels"
              value-field="id"
              text-field="title"
              @change="onModelSelect($event)"
            >
            </b-form-select>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { InheritanceModel } from "../models/inheritance-model.model";
  import { mutations, store } from "../store/store";

  @Component
export default class Header extends Vue {

  get selectedModelId() {
    return store.selectedModel.id;
  }

  get allModels() {
    return store.allModels;
  }
  onModelSelect(id: number) {
    const selectedModel = this.allModels.find(
      (model: InheritanceModel) => model.id === id);
    if (selectedModel) {
      mutations.setModel(selectedModel)
    }
  }

}
</script>

<style lang="scss"></style>
