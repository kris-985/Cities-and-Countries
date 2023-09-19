<template>
  <div>
    <form>
      <div>
        <label for="term">Search</label>
        <input
          type="text"
          v-model="country.searchTerm"
          class="outline-none w-full mt-2 border rounded text-xl py-2 px-4"
          @input="search"
          id="term"
        />
      </div>
    </form>
  </div>
</template>

<script>
import { CountryStore } from "../../stores/country";

export default {
  setup() {
    const country = CountryStore();

    const functions = {
      search() {
        country.search();
      },
    };

    return { country, ...functions };
  },
};
</script>