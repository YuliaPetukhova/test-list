<script>
import {ref} from "vue";

export default {
  setup(props) {
    const localItems = ref(props.items);
    return {localItems: localItems}
  },
  props: [
    'items',
  ],
  methods: {
    deleteItemColor (e, item) {
      e.preventDefault();
      let index = this.localItems.findIndex(localItem => {
        return localItem.itemName === item.itemName;
      })
      this.localItems.splice(index, 1);
    }
  },
}
</script>

<template>
  <li class="color-list-item">
    <span v-for="(localItem, i) in localItems" :key="i">
      <input
          readonly
          @click="deleteItemColor($event, localItem)"
          type="color"
          class="square"
          :value="localItem.color"
          v-if="localItem.checked"
      >
    </span>
  </li>
</template>

<style scoped>
.color-list-item {
  display: flex;
  flex-wrap: wrap;
}

.square {
  width: 1.5em;
  height: 1.5em;
  margin: 0.3em;
}

input {
  outline: none;
  padding: 0;
  border: none;
  cursor: pointer;
}

input[type="color" i]::-webkit-color-swatch-wrapper {
  padding: 0;
  border: none;
  cursor: pointer;
}
</style>