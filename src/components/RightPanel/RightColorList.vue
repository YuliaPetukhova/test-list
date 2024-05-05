<script>

import RightColorListItem from "@/components/RightPanel/RightColorListItem.vue";

export default {
  components: {RightColorListItem},
  props: [
    'itemList',
  ],
  data() {
    return {
      showSortButton: false,
    };
  },
  methods: {},
}
</script>

<template>
  <div class="action-btn" @click="showSortButton = !showSortButton">
    <button v-if="showSortButton">Сортировать</button>
    <button v-else>Перемешать</button>
  </div>

  <ul class="color-list">
    <RightColorListItem v-for="(item, index) in itemList" v-bind:item="item" v-bind:key="index"></RightColorListItem>
  </ul>
</template>

<style scoped>
ul {
  padding: 0;
}

.color-list {
  list-style-type: none;
}

.action-btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0.5em;
}

button {
  cursor: pointer;
  background-color: #3498f8;
  border: none;
  border-radius: 0.5em;
  padding: 0.3em;
  color: white;
}
</style>