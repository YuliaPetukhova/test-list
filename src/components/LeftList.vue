<script>
import LeftListItem from "@/components/LeftListItem.vue";
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
        v-for="(list, index) in ColorStore.data"
        v-bind:list="list"
        v-bind:index="index"
        v-bind:key="index"></LeftListItem>
  </ul>
</template>

<style scoped>
.list {
  list-style-type: none;
}
</style>