import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { ColumnsVehicles } from '../types'

export const useColumnStore = defineStore('columns', () => {

  const allColumnsList = ref<ColumnsVehicles[]>([
    {
      title: 'Id veículo Elog',
      value: 'vehicleId',
      required: true,
      selected: true,
    },
    {
      title: 'Id veículo Cliente',
      value: 'vehicleIdTms',
      required: true,
      selected: true
    },
    {
      title: 'Frota',
      value: 'divisionId',
      required: false,
      selected: false
    },
    {
      title: 'Divisão',
      value: 'divisionName',
      required: false,
      selected: false
    },
    {
      title: 'Id Operação',
      value: 'operationId',
      required: false,
      selected: false
    },
    {
      title: 'Rastreador',
      value: 'connector',
      required: true,
      selected: true
    },
    {
      title: 'Placa',
      value: 'licensePlate',
      required: true,
      selected: true
    },
    {
      title: 'Id Motorista Elog',
      value: 'driverId',
      required: false,
      selected: false
    },
    {
      title: 'Motorista',
      value: 'driverName',
      required: false,
      selected: false,
      width: 300
    },
    {
      title: 'Id motorista Cliente',
      value: 'driverIdTms',
      required: false,
      selected: false
    },
    {
      title: 'Id divisão motorista Elog',
      value: 'driverDivisionId',
      required: false,
      selected: false
    },
    {
      title: 'Divisão motorista',
      value: 'driverDivisionName',
      required: false,
      selected: false
    },
    {
      title: 'Id da operação motorista Elog',
      value: 'driverOperationId',
      required: false,
      selected: false
    },
    {
      title: 'Operação',
      value: 'driverOperationName',
      required: false,
      selected: false
    },
    {
      title: 'Intervalo',
      value: 'interval',
      required: false,
      selected: false
    },
    {
      title: 'Fuso Horário',
      value: 'timezone',
      required: true,
      selected: true
    },
    {
      title: 'Status veículo',
      value: 'moving',
      required: true,
      selected: true
    },
    {
      title: 'Veículo em pausa?',
      value: 'delayed',
      required: true,
      selected: true
    },
    {
      title: 'Hodômetro (m)',
      value: 'odometer',
      required: false,
      selected: false
    },
    {
      title: 'Hodômetro (km)',
      value: 'odometerKm',
      required: false,
      selected: false
    },
    {
      title: 'Ignição',
      value: 'ignition',
      required: false,
      selected: false
    },
    {
      title: 'Status Ignição',
      value: 'ignitionStatus',
      required: true,
      selected: true
    },
    {
      title: 'Velocidade',
      value: 'speed',
      required: false,
      selected: false
    },
    {
      title: 'Data de processamento',
      value: 'date',
      required: true,
      selected: true
    },
  ])

  // valores padrão
  const columns = computed(() => allColumnsList.value.filter((column) => column.selected))
  const selectedColumns = computed(() => columns.value.map((column) => column.value))
  const orderValue = ref<ColumnsVehicles[]>(columns.value)

  const updateColumns = (columns: ColumnsVehicles[]) => allColumnsList.value = columns
  const updateOrderValue = (columns: ColumnsVehicles[]) => orderValue.value = [...columns]

  return { columns, allColumnsList, selectedColumns, updateColumns, updateOrderValue, orderValue }
}, {
  persist: true
})

