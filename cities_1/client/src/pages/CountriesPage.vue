<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <div class="text-4xl mb-10">Countries</div>
      <button
        class="py-2 px-4 border text-white bg-purple-400"
        @click="toggleDialog"
      >
        {{ !env.dialogs.countries.save ? "Create Country" : "Close" }}
      </button>
    </div>
    <save-item v-if="env.dialogs.countries.save" />
    <countries-items />
  </div>
</template>

<script>
import SaveItem from "../components/countries/SaveItem.vue";
import CountriesItems from "../components/countries/DisplayItems.vue";
import { EnvStore } from "../stores/env";

export default {
  components: {
    SaveItem,
    CountriesItems,
  },
  setup() {
    const env = EnvStore();

    const functions = {
      toggleDialog() {
        env.dialogs.countries.save = !env.dialogs.countries.save;
      }
    }

    return { env, ...functions };
  },
};
</script>
