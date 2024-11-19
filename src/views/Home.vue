<template>
  <app-loader v-if="loading"></app-loader>

  <app-page title="Список заявок" v-else>
  <template #header>
    <button class="primary btn" @click="modal = true">Создать</button>
  </template>
    <request-filter v-model="filter"></request-filter>
    <request-table :requests="requests"></request-table>

    <teleport to="body">
      <app-modal v-if="modal" title="Создать заявку" @close="modal = false">
        <request-modal @created="modal = false"></request-modal>
      </app-modal>
    </teleport>
  </app-page>

</template>

<script>
import RequestFilter from "@/components/request/RequestFilter.vue";
import RequestModal from "@/components/request/RequestModal.vue";
import AppModal from "@/components/ui/AppModal.vue";
import {ref, computed, onMounted, watch} from 'vue'
import AppPage from "@/components/ui/AppPage";
import RequestTable from "@/components/request/RequestTable.vue";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader.vue";
import {filter} from "core-js/internals/array-iteration";
export default {
  methods: {filter},
  setup() {
    const modal = ref(false)
    const store = useStore()
    const loading = ref(false)
    const filter = ref({})



    onMounted(async () => {
      loading.value = true
      await store.dispatch("request/load")
      loading.value = false
    })

    const requests = computed(() => store.getters['request/requests']
        .filter(request => {
          if (filter.value.name) {
            return request.fio.includes(filter.value.name)
          }
          return request
        })
        .filter(request => {
          if (filter.value.status) {
            return filter.value.status === request.status
          }
          return request
        })
    )

    return {
      modal,
      requests, loading
    }
  },
  components: {
    AppLoader,
    AppPage,
    RequestTable,
    AppModal,
    RequestModal,
    RequestFilter,
  }
}
</script>
