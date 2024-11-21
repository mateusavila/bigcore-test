<script setup lang="ts">
import { ref } from 'vue'
import CloseModal from './CloseModal.vue'
import { HandleFilterConfig, ListScorecard } from '../types'
import { useConfigScorecards } from '../composables/useConfigScorecards'

const open = defineModel<boolean>()
const { alertToggle,
  alertActivity,
  alertAvailability,
  alertState,
  alertCity,
  hideNumbers,
  limitVisibility,
  amountScorecards,
  updateAlertToggle,
  updateAlertActivity,
  updateAlertAvailability,
  updateAlertState,
  updateAlertCity,
  updateHideNumbers,
  updateLimitVisibility,
  updateAmountScorecards } = useConfigScorecards()
    
const filters = ref<HandleFilterConfig>({
  alertToggle: alertToggle.value,
  alertActivity: alertActivity.value,
  alertAvailability: alertAvailability.value,
  alertState: alertState.value,
  alertCity: alertCity.value,
  hideNumbers: hideNumbers.value,
  limitVisibility: limitVisibility.value,
  amountScorecards: amountScorecards.value
})

defineProps<{
  list: ListScorecard[]
}>()

const emit = defineEmits<{
  filter: [data: HandleFilterConfig]
}>()

const submit = () => {
  updateAlertToggle(alertToggle.value)
  updateAlertActivity(alertActivity.value)
  updateAlertAvailability(alertAvailability.value)
  updateAlertState(alertState.value)
  updateAlertCity(alertCity.value)
  updateHideNumbers(hideNumbers.value)
  updateLimitVisibility(limitVisibility.value)
  updateAmountScorecards(amountScorecards.value)

  filters.value = {
    alertToggle: alertToggle.value,
    alertActivity: alertActivity.value,
    alertAvailability: alertAvailability.value,
    alertState: alertState.value,
    alertCity: alertCity.value,
    hideNumbers: hideNumbers.value,
    limitVisibility: limitVisibility.value,
    amountScorecards: amountScorecards.value
  }

  emit("filter", filters.value)
}
</script>

<template>
  <v-dialog v-model="open" max-width="800">
    <template #default>
      <v-card title="Lista de Scorecards">
        <CloseModal v-model="open" />
        <v-card-text>
          <v-checkbox label="Esconder números" v-model="hideNumbers" hide-details />
          <v-checkbox label="Ativar Alertas" v-model="alertToggle" hide-details />
          <v-checkbox label="Ativar Atividades" v-model="alertActivity" hide-details />
          <v-checkbox label="Ativar Disponibilidade" v-model="alertAvailability" hide-details />
          <v-checkbox label="Ativar Estados" v-model="alertState" hide-details />
          <v-checkbox label="Ativar Cidades" v-model="alertCity" hide-details />
          <v-checkbox label="Limitar Quantidade de Scorecards" v-model="limitVisibility" hide-details />
          <v-text-field type="number" :disabled="!limitVisibility" v-model="amountScorecards" :min="3" :max="list.length" />
        </v-card-text>
        <v-card-actions>
          <v-btn
            text="filtrar"
            @click="submit">
          </v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
