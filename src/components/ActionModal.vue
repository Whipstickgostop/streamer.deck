<template>
  <div :class="{ 'modal': true, 'is-active': active }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="box is-dark">
        <span class="title text-uppercas has-text-white">Edit Item {{ item }}</span>

        <div class="form my-6">
          <div class="field">
            <label class="label has-text-white">Name</label>
            <div class="control">
              <input class="input" type="text" placeholder="Text input">
            </div>
          </div>

          <div class="field">
            <label class="label has-text-white">Action</label>
            <div class="control">
              <div class="select">
                <select>
                  <option :value="null">None</option>
                  <option v-for="action in actions" :key="action.id" :value="action.id">{{ action.name }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="button is-danger" @click="$emit('close')">Cancel</button>
          <button class="button is-success">Save</button>
        </div>
      </div>
    </div>
    <button class="modal-close is-large" aria-label="close" @click="$emit('close')"></button>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';
import { useStreamerBot } from '../composables/StreamerBot';

const props = withDefaults(defineProps<{ item: any }>(), {
  item: null
});

const active = computed(() => !!props.item);
const { actions } = useStreamerBot();
</script>