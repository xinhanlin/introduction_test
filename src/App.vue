<template>
  <div class="wrapper-o">
    <div ref="header" class="header"></div>
    <div class="middle-container">
      <LeftContainer></LeftContainer>
      <RightContainer></RightContainer>
    </div>
  </div>
</template>
<script>
import LeftContainer from "./components/LeftContainer/LeftContainer.vue";
import RightContainer from "./components/RightContainer/RightContainer.vue";

export default {
  components: { LeftContainer, RightContainer },
  setup() {},
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0px;
  padding: 0px;
  background-color: whites;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: black;
}
.middle-container {
  display: flex;
  flex-direction: row;
}
</style>
