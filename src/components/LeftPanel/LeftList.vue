<script>
import LeftListItem from "@/components/LeftPanel/LeftListItem.vue";
import {ColorStore} from "@/data/ColorStore";

export default {
  components: {LeftListItem},
  data() {
    return {
      ColorStore,
    };
  },
}
</script>

<template>
  <ul class="list">
    <LeftListItem
        v-for="(itemList, index) in ColorStore.data"
        v-bind:itemList="itemList"
        v-bind:key="index"></LeftListItem>
  </ul>
</template>

<style scoped>
.list {
  display: flex;
  padding: 1em;
  list-style-type: none;
  flex-direction: column;
}
</style>