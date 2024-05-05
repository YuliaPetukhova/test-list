<template>
  <main class="panel">
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

.panel{
  display: flex;
  height: 100%;
}

.left-block {
  margin-left: 0;
  margin-right: 0;
  width: 45%;
  border: 1px solid black;
}

.right-block {
  margin-left: auto;
  margin-right: 0;
  width: 45%;
  border: 1px solid black;
}
</style>
