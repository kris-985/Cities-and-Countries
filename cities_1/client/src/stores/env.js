import { defineStore } from "pinia";

export const EnvStore = defineStore("env", {
  state: () => ({
    dialogs: {
      cities: {
        save: false,
      },
      countries: {
        save: false,
      }
    }
  })
});