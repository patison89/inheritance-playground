import Vue from "vue";
import { InheritanceModel } from "../models/inheritance-model.model";
import data from "../data/data"

export const store = Vue.observable({
  allModels: data.models,
  selectedModel: data.models[0],
  selectedP1Id: 1,
  selectedP2Id: 1
});

export const mutations = {
  setModel(model: InheritanceModel) {
    store.selectedModel = model;
  },
  setP1Id(id: number) {
    store.selectedP1Id = id;
  },
  setP2Id(id: number) {
    store.selectedP2Id = id;
  }
};