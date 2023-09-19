<template>
  <div class="container mx-auto">
    <div class="flex justify-between items-center">
      <div class="text-4xl mb-10">Cities</div>
      <button
        class="py-2 px-4 border text-white bg-purple-400"
        @click="toggleDialog"
      >
        {{ !env.dialogs.cities.save ? "Create City" : "Close" }}
      </button>
    </div>
  </div>
  <save-item v-if="env.dialogs.cities.save" />
  <display-items />
</template>

<script>
import SaveItem from "../components/cities/SaveItem.vue";
import DisplayItems from "../components/cities/DisplayItems.vue";
import { EnvStore } from "../stores/env";

export default {
  components: {
    SaveItem,
    DisplayItems,
  },
  setup() {
    const env = EnvStore();
    
    const functions = {
      toggleDialog() {
        env.dialogs.cities.save = !env.dialogs.cities.save;
      }
    }

    return { env, ...functions };
  },
};
</script>
