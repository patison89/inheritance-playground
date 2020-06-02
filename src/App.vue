<template>
  <div id="app">
    <Header></Header>
    <b-container>
      <LawPage></LawPage>
    </b-container>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./components/Header.vue";
import LawPage from "./components/law-page/LawPage.vue";

@Component({
  components: {
    Header,
    LawPage
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
