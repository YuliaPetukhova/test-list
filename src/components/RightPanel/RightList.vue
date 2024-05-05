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
        v-for="(list, index) in ColorStore.data"
        v-bind:list="list"
        v-bind:index="index"
        v-bind:key="index"
    ></RightListItem>
  </ul>
</template>

<style scoped>
.list {
  list-style-type: none;
}
</style>