<script>
import {ref} from "vue";

export default {
  setup(props) {
    const localItem = ref(props.item);
    return {localItem: localItem}
  },
  props: [
    'item',
  ],
  methods: {
    deleteItemColor(e) {
      e.preventDefault();
      this.localItem.count--;
    }
  },
}
</script>

<template>
  <li v-if="item.checked">
    <input
        readonly
        @click="deleteItemColor($event)"
        type="color"
        class="square"
        v-for="(e, i) in localItem.count"
        :key="i"
        :value="localItem.color">
  </li>
</template>

<style scoped>
li {
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