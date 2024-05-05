<script>

import RightColorListItem from "@/components/RightPanel/RightColorListItem.vue";

export default {
  components: {RightColorListItem},
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
  <button class="action-btn">Сортировать\Перемешать</button>

  <ul class="color-list">
    <RightColorListItem v-for="(item, index) in itemList" v-bind:item="item" v-bind:key="index"></RightColorListItem>
  </ul>
</template>

<style scoped>
.color-list {
  list-style-type: none;
}

.action-btn {
  margin: 1em;
}
</style>