<template>
  <div class="container mx-auto">
    <h1 class="text-center text-4xl font-bold">Create Country</h1>
    <form @submit.prevent="submit">
      <div class="mb-4">
        <label for="name">Name</label>
        <input type="text" class="outline-none w-full mt-2 border rounded text-xl py-2 px-4" v-model="country.item.name" id="name">
      </div>
      <div class="mb-4">
        <label for="fact">Fact</label>
        <textarea type="text" class="outline-none w-full mt-2 border rounded text-xl py-2 px-4" rows="10" v-model="country.item.fact" id="fact"></textarea>
      </div>
      <div class="text-center">
        <button type="submit" class="rounded border text-white bg-purple-400 text-xl py-2 px-4">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import { CountryStore } from '../../stores/country';
import { EnvStore } from '../../stores/env';

export default {
  setup() {
    const country = CountryStore();
    const env = EnvStore();

    const callbacks = {
      submit() {
        env.dialogs.countries.save = false;
        country.getItems();
      }
    }

    const functions = {
      submit() {
        country.saveItem(callbacks.submit);
      }
    }

    return { country, ...functions }
  },
};
</script>
