<script>
export default {
  props: [
    'item',
  ],
  data() {
    return {
    };
  },
  methods: {
    getValueInput(e) {
      console.log(e);
    },
  },
}
</script>

<template>
  <li class="color-list-item">
    <label>
      <input type="checkbox" class="checkbox" :checked="item.checked" @input="getValueInput($event.target.checked)">
      {{ item.name }}
      <input type="number" min="0" :value="item.number" @input="getValueInput($event.target.value)">
      <input type="color" class="color" :value="item.color" @input="getValueInput($event.target.value)">
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