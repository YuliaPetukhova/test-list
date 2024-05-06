<script>
import RightColorListItem from "@/components/RightPanel/RightColorListItem.vue";
import RightColorMixedListItem from "@/components/RightPanel/RightColorMixedListItem.vue";

export default {
  components: {RightColorListItem, RightColorMixedListItem},
  props: [
    'itemList',
  ],
  data() {
    return {
      showSortButton: false,
      mixedItems: [],
    };
  },
  methods: {
    randomItem() {
      this.mixedItems = [];
      this.itemList.forEach((item) => {
        for (let i = 1; i <= item.count; i++) {
          this.mixedItems.push(item);
        }
      })
      this.mixedItems.sort(() => Math.random() - 0.5);
    }
  },
}
</script>

<template>
  <div class="action-btn" @click="showSortButton = !showSortButton">
    <button v-if="showSortButton">Сортировать</button>
    <button v-else @click="randomItem()">Перемешать</button>
  </div>

  <ul v-if="!showSortButton">
    <RightColorListItem
        v-for="(item, index) in itemList"
        v-bind:item="item"
        v-bind:key="index"
    ></RightColorListItem>
  </ul>
  <ul v-else>
    <RightColorMixedListItem v-bind:items="mixedItems"></RightColorMixedListItem>
  </ul>
</template>

<style scoped>
ul {
  padding: 0;
  list-style-type: none;
}

.action-btn {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 0;
  padding: 0.5em;
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