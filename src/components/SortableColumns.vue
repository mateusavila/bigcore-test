<script setup lang="ts">
import draggable from "vuedraggable"
import { ColumnsVehicles } from "../types"
import CardTitle from "./CardTitle.vue"

const model = defineModel<ColumnsVehicles[]>()
</script>

<template>
  <CardTitle>Ordenar Colunas</CardTitle>
  <draggable
    v-model="model"
    item-key="value"
    class="list-group"
    ghost-class="ghost">
    <template #item="{element}">
      <v-list-item slim prepend-icon="mdi-drag" elevation="1">
        {{ element.title }}
      </v-list-item>
    </template>
  </draggable>
</template>

<style scoped>

.list-group {
  gap: 5px;
  display: flex;
  flex-wrap: wrap;
}
.v-list-item {
  width: 100%;
  font-size: 14px;
}
</style>