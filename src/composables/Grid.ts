import { useStorage } from '@vueuse/core';
import { computed, ref, watch } from 'vue'

const rows = useStorage('streamerdeck-rows', 3);
const cols = useStorage('streamerdeck-cols', 5);

export function useGrid() {
  const style = computed(() => ({
    height: `calc(100vh - 4rem)`,
    width: `calc(100vw - 2rem)`,
    gridTemplateColumns: `repeat(${cols.value}, 1fr)`,
    gridTemplateRows: `repeat(${rows.value}, 1fr)`,
    gap: '2rem',
    padding: '2rem',
  }));

  watch([rows, cols], () => {
    console.log(rows.value, cols.value, style.value);
  });

  return {
    rows,
    cols,
    style,
  }
}