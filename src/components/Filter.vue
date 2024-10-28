<script setup lang="ts">
const emit = defineEmits<{
  hodometer: []
  config: []
}>()

const modalConfig = (): void => emit('config')
const modalHodometer = (): void => emit('hodometer')
</script>

<template>
  <div class="filter">
    <div class="container filter-flex">
      <v-btn append-icon="mdi-filter" color="#26A69A" @click="modalHodometer">Consulta Hodômetro</v-btn>
      <v-btn icon="mdi-cog" color="#26A69A" @click="modalConfig"></v-btn>
    </div>
  </div>
</template>

<style lang="sass">
  .filter
    height: 60px
  .filter-flex.container
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center
</style>
