<script setup lang="ts">
import { ref } from 'vue'
import { useDateFormat } from '../composables/useDateFormat'
import { Connectors, VehicleTracking } from '../types'

const { formatDate } = useDateFormat()
defineProps<{
  headers: any[]
  page: number
  itemsPerPage: number
  items: VehicleTracking[]
  loading: boolean
  itemsLength: number
}>()

const emit = defineEmits<{
  page: [page: number]
  perPage: [perPage: number]
}>()

const updatePageAction = (page: number) => emit("page", page)
const updatePerPageAction = (perPage: number) => emit("perPage", perPage)

const connectors = ref<Connectors[]>([
  {
    title: 'Omnilink',
    url: '/public/omnilink.png',
    width: 60
  },
  {
    title: 'Creare',
    url: '/public/creare.png',
    width: 50
  },
  {
    title: 'Questar',
    url: '/public/questar.webp',
    width: 55
  }
])
</script>

<template>
  <main>
    <div class="container">
      <v-data-table-server 
        :headers
        :page
        :items-per-page
        :items 
        :loading
        :items-length
        @update:page="updatePageAction"
        @update:items-per-page="updatePerPageAction">
        <template v-slot:loading>
          <v-skeleton-loader :type="`table-row@${itemsPerPage}`"></v-skeleton-loader>
        </template>
        <template #item.moving="{ item }">
          <td>
            <v-chip
              :prepend-icon="item.moving ? 'mdi-play' : 'mdi-stop'"
              :color="item.moving ? '#26A69A' : '#D84315'">
              {{ item.moving ? 'Movimento' : 'Parado' }}
            </v-chip>
          </td>
        </template>
        <template #item.delayed="{ item }">
          <td>
            <v-chip 
              :prepend-icon="item.delayed ? 'mdi-car-off' : 'mdi-car'"
              :color="item.delayed ? '#D84315' : '#26A69A'">
              {{ item.delayed ? 'Descanso' : 'Ativo' }}
            </v-chip>
          </td>
        </template>
        <template #item.ignition="{ item }">
          <td>
            <v-chip 
              :prepend-icon="item.ignition ? 'mdi-power-plug' : 'mdi-power-plug-off'"
              :color="item.ignition ? '#26A69A' : '#D84315'">
              {{ item.ignitionStatus }}
            </v-chip>
          </td>
        </template>
        <template #item.ignitionStatus="{ item }">
          <td>
            <v-chip 
              :prepend-icon="item.ignition ? 'mdi-power-plug' : 'mdi-power-plug-off'"
              :color="item.ignition ? '#26A69A' : '#D84315'">
              {{ item.ignitionStatus }}
            </v-chip>
          </td>
        </template>
        <template #item.speed="{ item }">
          <td>
            <v-chip 
              :prepend-icon="item.speed > 0 ? 'mdi-speedometer' : 'mdi-parking'"
              :color="item.speed > 0 ? '#26A69A' : '#D84315'">
              {{ item.speed > 0 ? `${item.speed} km` : 'parado' }} 
            </v-chip>
          </td>
        </template>
        <template #item.date="{ item }">
          <td>
            <v-chip 
              prepend-icon="mdi-calendar-clock" 
              variant="text">
              {{ formatDate(item.date) }}
            </v-chip>
          </td>
        </template>
        <template #item.connector="{ item }">
          <td>
            <template v-if="connectors.filter((connector) => connector.title.toLowerCase() === item.connector)">
              <v-tooltip 
                v-for="{ title, url, width }, index in connectors" :key="index"
                :text="title"
                location="top">
                <template v-slot:activator="{ props }">
                  <v-img
                    v-bind="props"
                    :width
                    :alt="title"
                    :src="url" />
                </template>
              </v-tooltip>
            </template>
            <template v-else>
              <v-chip  
                variant="text">
                {{ item.connector }}
              </v-chip>
          </template>
          </td>
        </template>
      </v-data-table-server>
    </div>
  </main>
</template>
