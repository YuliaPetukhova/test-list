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
  data() {
    return {};
  },
  methods: {},
}
</script>

<template>
  <div class="color-list-item" v-if="item.checked">
    <input disabled type="color" class="square" v-for="(e, i) in localItem.count" :key="i" :value="localItem.color">
  </div>
</template>

<style scoped>
.color-list-item {
  display: flex;
  flex-wrap: wrap;
}
.square {
  width: 1.5em;
  height: 1.5em;
  margin: 5px;
}

input {
  outline: none;
  padding: 0;
}

input[type="color" i]::-webkit-color-swatch-wrapper {
  padding: 0;
  border: none;
  cursor: pointer;
}
</style>