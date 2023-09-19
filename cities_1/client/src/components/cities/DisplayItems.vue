<template>
  <div class="container mx-auto">
    <search-view />
    <ul>
      <li v-for="(item, index) in city.displayItems" :key="index" class="mb-4">
        <div class="border rounded bg-purple-100 p-4">
          <h2 class="text-3xl italic underline">{{ item.name }}</h2>
          <pre class="mt-4 text-xl" v-html="item.fact"></pre>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { CityStore } from "../../stores/city";
import SearchView from "../../components/cities/SearchView.vue";

export default {
  components: {
    SearchView,
  },
  setup() {
    const city = CityStore();

    const callbacks = {
      getItems() {
        city.sortById();
      },
    };

    city.getItems(callbacks.getItems);

    return { city };
  },
};
</script>

<style>
pre {
  white-space: pre-wrap;
}
</style>
