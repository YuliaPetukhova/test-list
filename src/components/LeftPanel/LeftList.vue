<script>
import LeftListItem from "@/components/LeftPanel/LeftListItem.vue";
import {ColorStore} from "@/data/ColorStore";

export default {
  components: {LeftListItem},
  data() {
    return {
      ColorStore,
      listNumber: 4,
    };
  },
  methods: {},
}
</script>

<template>
  <ul class="list">
    <LeftListItem
        v-for="(itemList, listName) in ColorStore.data"
        v-bind:itemList="itemList"
        v-bind:listName="listName"
        v-bind:key="listName"></LeftListItem>
  </ul>
</template>

<style scoped>
.list {
  list-style-type: none;
}
</style>