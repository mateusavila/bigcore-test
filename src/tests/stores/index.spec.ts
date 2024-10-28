import { describe, it, expect, beforeEach } from "vitest"
import { useColumnStore } from "../../stores"
import { setActivePinia, createPinia } from 'pinia'

describe("useColumnStore", () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('should show all columns', async () => {
    const { allColumnsList } = useColumnStore()
    expect(allColumnsList.length).toBe(24)
    expect(allColumnsList).toMatchObject([
      {
        title: 'Id veículo Elog',
        value: 'vehicleId',
        required: true,
        selected: true
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
      }
    ]
    )
  })

  it('should show a list with default selected columns', async () => {
    const { columns } = useColumnStore()
    expect(columns.length).toBe(9)
    expect(columns).toMatchObject([
      {
        title: 'Id veículo Elog',
        value: 'vehicleId',
        required: true,
        selected: true
      },
      {
        title: 'Id veículo Cliente',
        value: 'vehicleIdTms',
        required: true,
        selected: true
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
        title: 'Status Ignição',
        value: 'ignitionStatus',
        required: true,
        selected: true
      },
      {
        title: 'Data de processamento',
        value: 'date',
        required: true,
        selected: true
      }
    ])
  })

  it('should show a list with default selected columns', async () => {
    const { selectedColumns } = useColumnStore()
    expect(selectedColumns.length).toBe(9)
    expect(selectedColumns).toMatchObject([
      'vehicleId',
      'vehicleIdTms',
      'connector',
      'licensePlate',
      'timezone',
      'moving',
      'delayed',
      'ignitionStatus',
      'date'
    ])
  })

  it('should update column value', async () => {
    const { allColumnsList, updateColumns } = useColumnStore()
    let mockColumns = allColumnsList
    mockColumns[2].selected = true
    updateColumns(mockColumns)
    expect(allColumnsList[2].selected).toBe(true)
    mockColumns[2].selected = false
    expect(allColumnsList[2].selected).toBe(false)
  })

  it('should reorder the columns', () => {
    const columnStore = useColumnStore()

    const newOrder = [
      { title: 'Data de processamento', value: 'date', required: true, selected: true },
      { title: 'Id veículo Elog', value: 'vehicleId', required: true, selected: true },
      { title: 'Id veículo Cliente', value: 'vehicleIdTms', required: true, selected: true },
      { title: 'Rastreador', value: 'connector', required: true, selected: true },
      { title: 'Placa', value: 'licensePlate', required: true, selected: true },
      { title: 'Fuso Horário', value: 'timezone', required: true, selected: true },
      { title: 'Status veículo', value: 'moving', required: true, selected: true },
      { title: 'Veículo em pausa?', value: 'delayed', required: true, selected: true },
      { title: 'Status Ignição', value: 'ignitionStatus', required: true, selected: true }
    ]

    columnStore.updateOrderValue(newOrder)

    // Usa toEqual para garantir que `orderValue` seja exatamente igual a `newOrder`
    expect(columnStore.orderValue).toEqual(newOrder)
  })



})