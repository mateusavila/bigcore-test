import { describe, it, expect, beforeEach } from "vitest"
import { useFilterStore } from "../../stores/filter"
import { setActivePinia, createPinia } from 'pinia'
import { format } from "date-fns"

describe("useFilterStore", () => {
  beforeEach(() => setActivePinia(createPinia()))

  it('should return the default values', async () => {
    const { start,
      end,
      divisionIdRef,
      licensePlateRef,
      idTMSRef } = useFilterStore()
    const today = format(new Date(), "yyyy-MM-dd")

    expect(start).toBe(today)
    expect(end).toBe(today)
    expect(divisionIdRef).toStrictEqual([])
    expect(licensePlateRef).toBe('')
    expect(idTMSRef).toBe('')
  })

  it('should return the list of divisions', async () => {
    const { divisions } = useFilterStore()
    expect(divisions).toMatchObject([
      { title: 'Citrosuco', value: 39, selected: false },
      { title: 'GLP', value: 42, selected: false },
      { title: 'Amônia', value: 45, selected: false },
      { title: 'Máquinas', value: 46, selected: false },
      { title: 'Ácido', value: 55, selected: false },
      { title: 'Treinamento', value: 58, selected: false }
    ])
  })

  it('should update the values', async () => {
    const filter = useFilterStore()

    const today = new Date()
    const tomorrow = today.setDate(today.getDate() + 1)

    const tomorrowDate = format(tomorrow, "yyyy-MM-dd")

    filter.updateStartDate(tomorrowDate)
    filter.updateEndDate(tomorrowDate)
    filter.updatedivisionId([42, 44])
    filter.updateIdTMS('123')
    filter.updateLicensePlate('ABC 1234')

    expect(filter.start).toBe(tomorrowDate)
    expect(filter.end).toBe(tomorrowDate)
    expect(filter.divisionIdRef).toMatchObject([42, 44])
    expect(filter.idTMSRef).toBe('123')
    expect(filter.licensePlateRef).toBe('ABC 1234')


  })

})