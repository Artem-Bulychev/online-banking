<template>
  <app-page title="Список заявок">
  <template #header>
    <button class="primary btn" @click="modal = true">Создать</button>
  </template>

    <request-table :requests="[]"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>

</template>

<script>
import RequestModal from "@/components/request/RequestModal.vue";
import AppModal from "@/components/ui/AppModal.vue";
import {ref} from 'vue'
import AppPage from "@/components/ui/AppPage";
import RequestTable from "@/components/request/RequestTable.vue";
export default {
  setup() {
    const modal = ref(false)

    return {
      modal,
    }
  },
  components: {
    AppPage,
    RequestTable,
    AppModal,
    RequestModal
  }
}
</script>
