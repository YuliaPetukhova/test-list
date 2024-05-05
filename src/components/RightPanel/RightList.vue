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
        v-for="(itemList, listName) in ColorStore.data"
        v-bind:itemList="itemList"
        v-bind:listName="listName"
        v-bind:key="listName"
    ></RightListItem>
  </ul>
</template>

<style scoped>
.list {
  list-style-type: none;
}
</style>