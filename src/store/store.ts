import Vue from "vue";
import { InheritanceModel } from "../models/inheritance-model.model";
import data from "../data/data"

export const store = Vue.observable({
  allModels: data.models,
  selectedModel: data.models[0]
});

export const mutations = {
  setModel(model: InheritanceModel) {
    store.selectedModel = model;
  }
};