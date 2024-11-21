<script setup lang="ts">
import { ref, watch, toRaw } from 'vue'
import CardTitle from './CardTitle.vue'
import CloseModal from './CloseModal.vue'
import { useFilterStore } from '../stores/filter'
import { FilterFields } from '../types'
import { useDateFormat } from '../composables/useDateFormat'

const open = defineModel<boolean>('open')
const { divisions, start, end, updateStartDate, updateEndDate, divisionIdRef, licensePlateRef, idTMSRef, updateIdTMS, updateLicensePlate, updatedivisionId } = useFilterStore()
const { formatToSubmit } = useDateFormat()

const idTms = ref(idTMSRef)
const startDate = ref(start)
const endDate = ref(end)
const divisionId = ref<number[]>(divisionIdRef)
const licensePlate = ref(licensePlateRef)

const emit = defineEmits<{
  filter: [data: FilterFields]
}>()

const closeModal = () => {
  
  const data = {
    startDate: formatToSubmit(startDate.value, false),
    endDate: formatToSubmit(endDate.value, true),
    divisionId: divisionId.value.length ? toRaw(divisionId.value) : [],
    licensePlate: licensePlate.value.length ? [licensePlate.value] : [],
    idTms: idTms.value.length ? [idTms.value] : []
  }
  
  emit("filter", data)
  open.value = false
}

watch(() => startDate.value, (date) => updateStartDate(date))
watch(() => endDate.value, (date) => updateEndDate(date))
watch(() => divisionId.value, (division) => updatedivisionId(division))
watch(() => licensePlate.value, (license) => updateLicensePlate(license))
watch(() => idTms.value, (id) => updateIdTMS(id))
</script>

<template>
  <v-dialog v-model="open" max-width="800">
    <template #default>
      <v-card title="Filtro">
        <CloseModal v-model="open" />
        <v-card-text>
          <CardTitle>Intervalo de Data</CardTitle>
          <div class="fields">
            <div class="field half">
              <v-text-field
                label="Filtrar registros de"
                type="date"
                v-model="startDate">
              </v-text-field>
            </div>
            <div class="field half">
              <v-text-field
                label="Até"
                type="date"
                :min="startDate"
                v-model="endDate">
              </v-text-field>
            </div>
          </div>
          <CardTitle>Filtrar outros dados</CardTitle>
          <div class="fields">
            <div class="field half">
              <v-text-field
                label="Frota"
                v-model="idTms">
              </v-text-field>
            </div>
            <div class="field half">
              <v-text-field
                label="Placa"
                v-model="licensePlate">
              </v-text-field>
            </div>
            <div class="field">
              <v-select
                v-model="divisionId"
                :items="divisions"
                chips
                label="Divisão"
                multiple>
              </v-select>
            </div>
          </div>
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

<style>
.fields {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.field {
  width: 100%;
  &.half {
    width: calc(50% - 10px);
  }
}
</style>