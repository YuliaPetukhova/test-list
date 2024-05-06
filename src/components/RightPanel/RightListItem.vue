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
      <label>{{ listName }}</label>
    </div>
    <RightColorList v-bind:itemList="itemList.items"></RightColorList>
  </li>
</template>

<style scoped>
.list-item {
  margin: 0.5em 1em 1em 0;
  border: 1px solid black;
}

.list-label {
  cursor: pointer;
  margin: 0.5em;
  display: flex;
  justify-content: flex-start;
}
</style>