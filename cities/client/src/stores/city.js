import { defineStore } from "pinia";
import { api } from "../boot/api";

export const CityStore = defineStore("city", {
  state: () => ({
    loading: false,
    url: "/cities",
    item: {},
    items: []
  }),
  actions: {
    getItems(cb) {
      this.loading = true;
      api.get(this.url)
        .then((res) => {
          this.items = res.data;
          if (cb) cb();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    getItem() {
      this.loading = true;
      api.get(`${this.url}/${this.item.id}`)
        .then((res) => {
          this.items = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    saveItem(cb) {
      this.loading = true;
      api.post(this.url, this.item)
        .then((res) => {
          if (cb) cb();
          this.item = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    deleteItem() {
      this.loading = true;
      api.delete(`${this.url}/${this.item.id}`)
        .then((res) => {
          this.items = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    sortById() {
      this.items.sort((a, b) => b.id - a.id);
    }
  }
});