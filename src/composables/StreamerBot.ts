import { computed, ref, watch } from 'vue';
import { toRefs, useDebounce, useStorage, useWebSocket } from '@vueuse/core';

const options = useStorage('streamerbot-config', {
  host: '127.0.0.1',
  port: 8080,
  endpoint: '/'
});
const uri = useDebounce(
  computed(() => `ws://${options.value.host}:${options.value.port}${options.value.endpoint}`),
  1000
);

// allow dynamic ws config by creating a ref and computing the child refs
const webSocket = ref(useWebSocket(uri.value));
const data = computed(() => webSocket.value.data);
const status = computed(() => webSocket.value.status);
const open = computed(() => webSocket.value.open);
const close = computed(() => webSocket.value.close);
const send = computed(() => webSocket.value.send);
const ws = computed(() => webSocket.value.ws);

const actions = ref<any[]>([]);

export function useStreamerBot() {

  watch(uri, () => {
    close.value();
    webSocket.value = useWebSocket(uri.value) as any;
  });

  watch(status, () => {
    if (status.value === 'OPEN') getActions();
  });

  watch(data, () => {
    if (data) {
      const json = JSON.parse(data.value);

      if (json && json.status === 'ok') {
        switch (json.id) {
          case 'GetActions': actions.value = json.actions ?? [];
        }
      }
    }
  });

  async function getActions() {
    send.value(JSON.stringify({
      request: 'GetActions',
      id: 'GetActions',
    }));
  }

  return {
    data,
    status,
    open,
    close,
    send,
    ws,
    options,
    getActions,
    actions,
  }
}