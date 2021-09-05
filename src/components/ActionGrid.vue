<template>
  <section class="grid" :style="style">
    <template v-for="idx in (rows * cols)" :key="idx">
      <div class="grid-item is-box is-outlined is-primary">
        <span class="is-size-4 has-text-weight-bold has-text-white">Item {{ idx }}</span>
        <button class="button is-warning is-inverted is-rounded is-small mx-3" @click="editItem = idx">
          <i class="mdi mdi-cog"></i>
        </button>
      </div>
    </template>
  </section>
  <ActionModal :item="editItem" @close="editItem = null" />
</template>

<script setup lang="ts">
import { ref } from 'vue-demi';
import { useGrid } from '../composables/Grid';
import { useStreamerBot } from '../composables/StreamerBot';
import ActionModal from '../components/ActionModal.vue';

const { actions } = useStreamerBot();
const { rows, cols, style } = useGrid();
const editItem = ref();
</script>

<style scoped>
.grid {
  display: grid;
}

.grid-item {
  border: 1px solid #242424;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
}
</style>
