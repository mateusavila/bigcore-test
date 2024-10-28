<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useColumnStore } from './stores'
import { ofetch } from "ofetch"
import { VehicleTracking, RequestDataVehicleTracking, OptionsRoute, FilterFields } from './types'
import { usePaginationStore } from './stores/pagination'
import Header from './components/Header.vue'
import Filter from './components/Filter.vue'
import ModalConfiguration from './components/ModalConfiguration.vue'
import ModalFilter from './components/ModalFilter.vue'
import { useCleanURL } from './composables/useCleanURL'
import { useFilterStore } from './stores/filter'
import DataTable from './components/DataTable.vue'
import { useDateFormat } from './composables/useDateFormat'
import { format } from 'date-fns'
import ErrorModal from './components/ErrorModal.vue'

const { formatToSubmit } = useDateFormat()
const { orderValue } = useColumnStore()
const { updateEndDate, updateStartDate, updateIdTMS, updateLicensePlate, updatedivisionId } = useFilterStore()
const token = import.meta.env.VITE_TOKEN
const baseURL = import.meta.env.VITE_BASEURL
const modalConfig = ref(false)
const errorModal = ref(false)
const modalHodometer = ref(false)
const orderList = ref(orderValue)
const items = ref<VehicleTracking[]>([])
const loading = ref<boolean>(true)

const openConfig = () => modalConfig.value = true
const openHodometer = () => modalHodometer.value = true

const { paged, updatePage, perPaged, updatePerPage } = usePaginationStore()
const { start, end, divisionIdRef, licensePlateRef, idTMSRef, } = useFilterStore()
const { buildQueryString } = useCleanURL()

const page = ref(paged)
const itemsPerPage = ref(perPaged)
const itemsLength = ref(0)

const requestData = async (optionsRoute?: OptionsRoute | undefined) => {

  loading.value = true
  try {
    let queryString: any = ''
    if (optionsRoute) {
    
      const url = buildQueryString(optionsRoute)
      queryString = `?${url}`
    }

    const { data, totalItems } = await ofetch<RequestDataVehicleTracking>(`/TrackerOdometer${queryString}`, {
      baseURL,
      headers: {
        Authorization: `Basic ${token}`
      }
    })
    items.value = data
    loading.value = false
    itemsLength.value = totalItems
  } catch (error) {
    errorModal.value = true
  }
}

// fazer paginação funcionar
const updatePageAction = async (p: number) => {
  updatePage(p)
  page.value = p
  await requestData({
    page: p,
    rows: itemsPerPage.value
  })
}

const updatePerPageAction = async (p: number) => {
  updatePerPage(p)
  itemsPerPage.value = p
  await requestData({
    rows: p,
    page: page.value
  })
}

const filterData = async (data: FilterFields) => {
  updatePage(1)
  await requestData({
    ...data,
    page: 1,
    rows: itemsPerPage.value,
  })
}

onMounted(() => requestData({
  startDate: formatToSubmit(start, false),
  endDate: formatToSubmit(end, true),
  licensePlate: licensePlateRef.length ? [licensePlateRef] : [],
  idTms: idTMSRef.length ? [idTMSRef] : [],
  divisionId: divisionIdRef.length ? divisionIdRef : [],
  page: page.value,
  rows: itemsPerPage.value
}))

const resetValues = async () => {
  updatePage(1)
  updatePerPage(10)
  updatedivisionId([])
  updateLicensePlate('')
  updateIdTMS('')
  updateEndDate(format(new Date(), 'yyyy-MM-dd'))
  updateStartDate(format(new Date(), 'yyyy-MM-dd'))
  await requestData({
    page: 1,
    rows: 10
  })
}

</script>
<template>
  <Header />
  <Filter 
    @config="openConfig" 
    @hodometer="openHodometer"
    @reset="resetValues" />
  <DataTable 
    :headers="orderList"
    :page
    :items-per-page
    :items 
    :loading
    :items-length
    @page="updatePageAction"
    @per-page="updatePerPageAction"
  />
  <ModalConfiguration v-model:open="modalConfig" v-model:order="orderList" />
  <ModalFilter v-model:open="modalHodometer" @filter="filterData" />
  <ErrorModal v-model="errorModal" />
</template>
