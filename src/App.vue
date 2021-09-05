<template>
  <Navbar />
  <div class="container is-fluid p-0">
    <div class="columns">
      <ActionModal :active="false" />
      <ActionGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import ActionGrid from './components/ActionGrid.vue'
import ActionModal from './components/ActionModal.vue';
</script>

<style>
@import url('https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap');
@import url('https://cdn.jsdelivr.net/npm/@mdi/font@5.9.55/css/materialdesignicons.min.css');

html, body {
  font-family: 'Montserrat', 'Segoe UI', 'Helvetica', sans-serif;
  background: #161616;
}

.is-dark {
  background: #242424 !important;
}

.is-primary {
  background: #5b00a0 !important;
}
</style>