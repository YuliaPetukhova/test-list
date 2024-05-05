<template>
  <main>
    <ListComponent class="left-block"></ListComponent>
    <RightPanel
        aria-title="right"
        title="List right"
        class="right-block">
    </RightPanel>

  </main>
</template>

<script>
import RightPanel from "@/components/RightPanel.vue";
import ListComponent from "@/components/LeftPanel.vue";

export default {
  name: 'App',
  components: {
    ListComponent,
    RightPanel,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.left-block {
  position: fixed;
  left: 0.5em;
  height: 90%;
  width: 45%;
  border: 1px solid black;
  top: 1em;
}

.right-block {
  position: fixed;
  right: 0.5em;
  top: 1em;
  height: 90%;
  width: 45%;
  border: 1px solid black;
}
</style>
