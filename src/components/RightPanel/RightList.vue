<script>
import {ColorStore} from "@/data/ColorStore";
import RightListItem from "@/components/RightPanel/RightListItem.vue";

export default {
  components: {RightListItem},
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
    <RightListItem
        v-for="(itemList, index) in ColorStore.data"
        v-bind:itemList="itemList"
        v-bind:listName="itemList.name"
        v-bind:key="index"
    ></RightListItem>
  </ul>
</template>

<style scoped>
.list {
  padding: 1em;
  list-style-type: none;
}
</style>