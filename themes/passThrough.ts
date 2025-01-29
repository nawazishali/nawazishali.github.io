import type { PrimeVueConfiguration } from "primevue";

export default <PrimeVueConfiguration["pt"]>{
  card: {
    root: {
      class:
        "border border-surface-200 dark:border-surface-800 shadow-none transition-all hover:border-l-4 hover:border-l-primary-500 bg-surface-0/30 backdrop-blur-2xl dark:bg-surface-900/50",
    },
  },
};
