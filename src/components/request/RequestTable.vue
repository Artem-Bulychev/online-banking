<template>
  <h4 v-if="requests.length === 0" class="text-center"> Заявок пока нет</h4>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {request} from "axios";

export default {
  props: ['requests'],

}
</script>

<style lang="scss" scoped>

</style>