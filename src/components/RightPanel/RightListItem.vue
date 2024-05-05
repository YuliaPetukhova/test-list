<script>

import RightColorList from "@/components/RightPanel/RightColorList.vue";

export default {
  components: {RightColorList},
  props: [
    'itemList',
    'listName',
  ],
}
</script>

<template>
  <li class="list-item">
    <div class="list-label">
      <label class="check">
        {{ listName }}
      </label>
    </div>
    <RightColorList v-bind:itemList="itemList"></RightColorList>
  </li>
</template>

<style scoped>
.list-item {
  cursor: pointer;
  margin: 0.5em 1em 1em 0;
  border: 1px solid black;
}

.list-label {
  cursor: pointer;
  margin: 0.5em;
  display: flex;
  justify-content: flex-start;
}

.check {
  cursor: pointer;
}
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