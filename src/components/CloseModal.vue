<script setup lang="ts">
const open = defineModel()
</script>
<template>
  <v-btn
    icon="mdi-close"
    size="small"
    variant="text"
    @click="open = false"
    style="position: absolute; right: 8px; top: 8px"></v-btn>
</template>
