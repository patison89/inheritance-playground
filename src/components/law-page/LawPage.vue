<template>
  <div>
    Law page
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import { InheritanceModel } from "../../models/inheritance-model.model";

  @Component
  export default class LawPage extends Vue {
    created() {
      this.$bus.$on('modelSelected', (data: InheritanceModel) => console.log(data))
    }
  }
</script>

<style lang="scss">

</style>