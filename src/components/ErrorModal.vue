<script setup lang="ts">
import CloseModal from './CloseModal.vue'
const open = defineModel<boolean>()
const closeModal = () => open.value = false
</script>

<template>
  <v-dialog v-model="open" max-width="400">
    <v-card title="Erro!">
      <CloseModal v-model="open" />
        <v-card-text>
          Aparentemente esta requisição está apresentando problemas. Favor consultar os mantenedores.
        </v-card-text>
        <v-card-actions>
          <v-btn
            text="Fechar"
            @click="closeModal">
          </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>