<script>

import RightColorList from "@/components/RightPanel/RightColorList.vue";

export default {
  components: {RightColorList},
  props: [
    'itemList',
    'listName',
  ],
  data() {
    return {
      showColorList: false,
    };
  },
  methods: {}
}
</script>

<template>
  <li class="list-item">
    <p class="list-label">
      <button @click="showColorList = !showColorList">
        <img v-if="showColorList" src="../../../public/вниз.png" alt="Стрелка вниз">
        <img v-else src="../../../public/вперед.png" alt="Стрелка вперед">
      </button>
      <label class="check">
        {{ listName }}
      </label>
    </p>
    <RightColorList v-if="showColorList" v-bind:itemList="itemList"></RightColorList>
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

button {
  all: unset;
  cursor: pointer;
  margin-right: 0.5em;
}

img {
  width: 20px;
  height: 20px;
}
</style>