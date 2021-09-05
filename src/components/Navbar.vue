<template>
  <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <img alt="streamer.deck logo" src="../assets/logo.png" height="30" width="30" />
      </a>

      <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="mainNav">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="mainNav" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">
          streamer.deck
        </a>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field has-addons">
            <p class="control">
              <span class="select is-small is-dark">
                <select v-model="rows">
                  <option v-for="i in 16" :value="i">{{ i }}</option>
                </select>
              </span>
            </p>
            <p class="control">
              <a class="button is-small is-dark">
                by
              </a>
            </p>
            <p class="control">
              <span class="select is-small is-dark">
                <select v-model="cols">
                  <option v-for="i in 16" :value="i">{{ i }}</option>
                </select>
              </span>
            </p>
          </div>
        </div>
        <div class="navbar-item">
          <div class="field has-addons">
            <div class="control">
              <input class="input is-small" type="text" placeholder="Host" v-model="options.host" size="15">
            </div>
            <div class="control">
              <input class="input is-small" type="text" placeholder="Port" v-model="options.port" size="5">
            </div>
            <p class="control">
              <button v-if="status === 'OPEN'" class="button is-small is-success">Connected</button>
              <button v-else-if="status === 'CONNECTING'" class="button is-small is-warning">Connecting...</button>
              <button v-else class="button is-small is-danger">Closed</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useGrid } from '../composables/Grid';
import { useStreamerBot } from '../composables/StreamerBot';

const { status, options } = useStreamerBot();
const { rows, cols } = useGrid();
</script>