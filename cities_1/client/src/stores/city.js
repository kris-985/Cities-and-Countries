import { defineStore } from "pinia";
import { api } from "../boot/api";

export const CityStore = defineStore("city", {
  state: () => ({
    loading: false,
    url: "/cities",
    item: {},
    items: [],
    displayItems: [],
    searchTerm: null
  }),
  actions: {
    getItems(cb) {
      this.loading = true;
      api.get(this.url)
        .then((res) => {
          this.items = res.data;
          this.displayItems = this.items;
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
    },
    search() {
      this.displayItems = this.items.filter(x => x.name.includes(this.searchTerm));
    }
  }
});
