<script setup lang="ts">
const emit = defineEmits<{
  hodometer: []
  config: []
  reset: []
}>()

const modalConfig = (): void => emit('config')
const modalHodometer = (): void => emit('hodometer')
const resetValues = (): void => emit('reset')
</script>

<template>
  <div class="filter">
    <div class="container filter-flex">
      <v-btn append-icon="mdi-filter" color="#26A69A" @click="modalHodometer">Consulta Hodômetro</v-btn>
      <div class="reset-values">
        <v-tooltip 
          text="Resetar configurações" 
          location="top">
          <template v-slot:activator="{ props }">
              <v-btn v-bind="props" icon="mdi-backup-restore" color="#CFD8DC" @click="resetValues"></v-btn>
          </template>
        </v-tooltip>
        <v-tooltip 
          text="Configurações" 
          location="top">
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-cog" color="#26A69A" @click="modalConfig"></v-btn>
          </template>
        </v-tooltip>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
  .reset-values
    display: flex
    align-items: center
    gap: 10px
    width: 120px
  .filter
    height: 60px
  .filter-flex.container
    height: 100%
    display: flex
    justify-content: space-between
    align-items: center
</style>
