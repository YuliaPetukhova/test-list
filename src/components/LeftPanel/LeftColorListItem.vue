<script>
import {ref} from 'vue'

export default {
  setup(props) {
    const localItem = ref(props.item);
    return {localItem: localItem}
  },
  props: [
    'item',
  ],
}
</script>

<template>
  <li class="color-list-item">
    <label>
      <input type="checkbox" class="checkbox" v-model="localItem.checked">
      {{ item.itemName }}
      <input type="number" min="0" v-model="localItem.number">
      <input type="color" class="color" v-model="localItem.color">
    </label>
  </li>
</template>

<style scoped>
input {
  outline: none;
  width: 30px;
  padding: 0;
  margin-left: 15px;
  border: 1px solid rgba(86, 84, 84, 0.97);
}

label span {
  height: 10px;
  width: 10px;
  border: 1px solid grey;
  display: inline-block;
  position: relative;
}

[type=checkbox]:checked + span:before {
  content: '\002E';
  position: absolute;
  font-size: 30px;
  top: -23px;
  left: 1px;
}

input[type="color" i]::-webkit-color-swatch-wrapper {
  padding: 0;
  border: none;
}
</style>