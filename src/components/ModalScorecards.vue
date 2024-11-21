<script setup lang="ts">
import { ref } from 'vue'
import CloseModal from './CloseModal.vue'
import { ListScorecard } from '../types'

const open = defineModel<boolean>()
const filters = ref<number[]>([])

defineProps<{
  list: ListScorecard[]
}>()

const emit = defineEmits<{
  action: [id: number[]]
}>()

const submit = () => {
  emit("action", filters.value)
} 
const applyColors = (value: number, color: string) => filters.value.includes(value) ? '#fff' : color 
</script>

<template>
  <v-dialog v-model="open" max-width="800">
    <template #default>
      <v-card title="Lista de Scorecards">
        <CloseModal v-model="open" />
        <v-card-text>
          <v-btn-toggle multiple density="comfortable" v-model="filters" class="d-flex flex-wrap" style="width: 100%; height: auto; gap: 5px;">
            <v-btn :active-color v-for="{ id, text, icon, activeColor, color }, key in list" :key :value="id" style="width: 100%; height: 40px; justify-content: flex-start;">
              <v-icon :icon size="small" :color="applyColors(id, color)" />
              <span class="button-info-modal">{{ text }}</span>
            </v-btn>
          </v-btn-toggle>
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

<style>
.button-info-modal {
  margin-left: 20px;
  font-size: 16px;
  text-transform: capitalize;
}
</style>