import { defineStore } from "pinia";
import { api } from "../boot/api";

export const CountryStore = defineStore("country", {
  state: () => ({
    loading: false,
    url: "/countries",
    items: [],
    displayItems: [],
    item: {},
    searchTerm: null
  }),
  actions: {
    getItems() {
      this.loading = true;
      api.get(this.url)
        .then(res => {
          this.items = res.data;
          this.displayItems = this.items;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    getItem() {
      this.loading = true;
      api.get(`${this.url}/${this.item.id}`)
        .then(res => {
          this.item = res.data;
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    saveItem(cb) {
      this.loading = true;
      api.post(this.url, this.item)
        .then(res => {
          this.item = res.data;
          if (cb) cb();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    deleleItem() {
      this.loading = true;
      api.delete(`${this.url}/${item.id}`)
        .then(() => {
          this.getItems();
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => this.loading = false);
    },
    search() {
      this.displayItems = this.items.filter(x => x.name.includes(this.searchTerm));
    }
  }
});