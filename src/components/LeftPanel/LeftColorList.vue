<script>
import LeftColorListItem from "@/components/LeftPanel/LeftColorListItem.vue";

export default {
  components: {LeftColorListItem},
  props: [
    'itemList',
  ],
}
</script>

<template>
  <ul>
    <LeftColorListItem
        v-for="(item, index) in itemList"
        v-bind:item="item"
        v-bind:key="index"
    ></LeftColorListItem>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
}
</style>