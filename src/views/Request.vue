<template>
<app-page title="Заявка"></app-page>
</template>

<script>
import AppPage from '../components/ui/AppPage.vue'
import {useRoute} from "vue-router";
export default {

  setup() {
    const route = useRoute()


  },
  components: {
    AppPage
  }
}
</script>

<style lang="scss" scoped>

</style>