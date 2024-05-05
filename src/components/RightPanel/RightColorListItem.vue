<script>
export default {
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
  <li class="color-list-item" v-if="item.checked">

    <div>
      {{ item.itemName }} : {{ item.color }} - {{ item.number }}
    </div>
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