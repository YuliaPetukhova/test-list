<script>

import LeftColorListItem from "@/components/LeftPanel/LeftColorListItem.vue";

export default {
  components: {LeftColorListItem},
  props: [
    'itemList',
  ],
  data() {
    return {};
  },
  methods: {},
}
</script>

<template>
  <ul class="color-list">
    <LeftColorListItem v-for="(item, index) in itemList" v-bind:item="item" v-bind:key="index"></LeftColorListItem>
  </ul>
</template>

<style scoped>
.color-list {
  list-style-type: none;
}
</style>