<script setup lang="ts">
import { ref, watch } from 'vue'
import { useColumnStore } from '../stores'
import { ColumnsVehicles } from '../types'
import SortableColumns from './SortableColumns.vue'
import CardTitle from './CardTitle.vue'
import CloseModal from './CloseModal.vue'

const open = defineModel<boolean>('open')
const order = defineModel<ColumnsVehicles[]>('order')
const { allColumnsList, selectedColumns, updateColumns, updateOrderValue, orderValue } = useColumnStore()
const columnsList = ref<string[]>(selectedColumns)

const orderList = ref<ColumnsVehicles[]>(orderValue)

const processOrder = () => {
  const list = allColumnsList.map((column) => ({
    ...column,
    selected: columnsList.value.includes(column.value)
  }))
  updateColumns(list)
  updateOrderValue(orderList.value)
  order.value = orderList.value
}
const closeModal = () => {
  processOrder()
  open.value = false
}

watch(() => columnsList.value, (newColumns) => {
  // Filtra as colunas selecionadas e mantém a ordem anterior
  const newOrderList = allColumnsList
    .filter(column => newColumns.includes(column.value) || column.required)
    .map(column => ({
      ...column,
      selected: true
    }))
  
  // Mantém a ordem anterior para itens que já existiam
  const previousOrder = new Set(orderList.value.map(item => item.value))
  orderList.value = [
    ...orderList.value.filter(item => newColumns.includes(item.value) || item.required),
    ...newOrderList.filter(item => !previousOrder.has(item.value))
  ]
}, { deep: true })

// o any aqui é devido a falta de documentação para inferir o tipo correto pelo vuetify.
const defineIcon = (item: any) => {
  if (item.raw.required || columnsList.value.find((column) => column === item.raw.value)) {
    return 'mdi-checkbox-outline'
  }  
  return 'mdi-checkbox-blank-outline'
}
</script>

<template>
  <v-dialog v-model="open" max-width="800">
    <template #default>
      <v-card title="Configuração">
        <CloseModal v-model="open" />
        <v-card-text>
          <CardTitle>Gerenciar Colunas</CardTitle>
          <v-select
            v-model="columnsList"
            :items="allColumnsList"
            chips
            label="Colunas Disponíveis"
            multiple>
            <template v-slot:item="{ props, item }">
              <v-list-item
                v-bind="props"
                :prepend-icon="defineIcon(item)"
                :disabled="item.raw.required"
              >
            </v-list-item>
            </template>
          </v-select>
          <SortableColumns v-model="orderList" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            text="Ok"
            @click="closeModal">
          </v-btn>
      </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

