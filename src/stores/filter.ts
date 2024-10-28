import { defineStore } from 'pinia'
import { ref } from 'vue'
import { DivisionsItem } from '../types'
import { format } from 'date-fns'

export const useFilterStore = defineStore('filter', () => {

  const startDateRef = format(new Date(), "yyyy-MM-dd")
  const endDateRef = format(new Date(), "yyyy-MM-dd")
  const divisionIdRef = ref<number[]>([])
  const licensePlateRef = ref('')
  const idTMSRef = ref('')

  const start = ref(startDateRef)
  const end = ref(endDateRef)



  const updatedivisionId = (divisionId: number[]) => divisionIdRef.value = divisionId
  const updateLicensePlate = (licensePlate: string) => licensePlateRef.value = licensePlate
  const updateIdTMS = (idTMS: string) => idTMSRef.value = idTMS
  const updateStartDate = (date: string) => start.value = date
  const updateEndDate = (date: string) => end.value = date

  const divisions = ref<DivisionsItem[]>([
    {
      title: 'Citrosuco',
      value: 39,
      selected: false
    },
    {
      title: 'GLP',
      value: 42,
      selected: false
    },
    {
      title: 'Amônia',
      value: 45,
      selected: false
    },
    {
      title: 'Máquinas',
      value: 46,
      selected: false
    },
    {
      title: 'Ácido',
      value: 55,
      selected: false
    },
    {
      title: 'Treinamento',
      value: 58,
      selected: false
    }
  ])

  return {
    start,
    end,
    divisions,
    divisionIdRef,
    licensePlateRef,
    idTMSRef,
    updateEndDate,
    updateStartDate,
    updatedivisionId,
    updateLicensePlate,
    updateIdTMS
  }
}, {
  persist: true
})