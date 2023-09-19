<template>
  <div>
    <form>
      <div>
        <label for="term">Search</label>
        <input
          type="text"
          v-model="city.searchTerm"
          class="outline-none w-full mt-2 border rounded text-xl py-2 px-4"
          @input="search"
          id="term"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { CityStore } from "../../stores/city";

export default {
  setup() {
    const city = CityStore();

    const functions = {
      search() {
        city.search();
      },
    };

    return { city, ...functions };
  },
};
</script>