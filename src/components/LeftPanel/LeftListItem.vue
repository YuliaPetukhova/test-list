<script>
import LeftColorList from "@/components/LeftPanel/LeftColorList.vue";
import {ref} from "vue";

export default {
  components: {LeftColorList},
  setup(props) {
    const localItemList = ref(props.itemList);
    return {localItemList: localItemList}
  },
  props: [
      'itemList',
  ],
  data() {
    return {
      showColorList: false,
    };
  },
  methods: {
    onListCheckboxClick() {
      this.localItemList.items.forEach((item) => {
        item.checked = !this.localItemList.checked;
      });
    },
    changeCheckboxMark() {
      let checkedItems = this.localItemList.items
          .filter((el) => {
            return el.checked;
          }).length;

      if (checkedItems && checkedItems < this.localItemList.items.length) {
        return 'checkbox-dot'
      }
    }
  }
}
</script>

<template>
  <li class="list-item">
    <p class="list-label">
      <button @click="showColorList = !showColorList">
        <img v-if="showColorList" src="../../../public/вниз.png" alt="Стрелка вниз">
        <img v-else src="../../../public/вперед.png" alt="Стрелка вперед">
      </button>
      <label class="check" :class="changeCheckboxMark()">
        <input type="checkbox" class="check__input" v-model="this.localItemList.checked" @click="onListCheckboxClick()">
        <span></span>
        {{ itemList.name }}
      </label>
    </p>
    <LeftColorList v-if="showColorList" v-bind:itemList="itemList.items"></LeftColorList>
  </li>
</template>

<style scoped>
input {
  outline: none;
  padding: 0;
}

.checkbox-dot>span {
  height: 11px;
  width: 11px;
  border: 1px solid grey;
  display: inline-block;
  position: relative;
  border-radius: 3px;
}

.checkbox-dot>.check__input {
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
}

.checkbox-dot>[type=checkbox]:checked + span:before {
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