<template>
  <div class="right-container">
    <Self></Self>
    <Studyeducation></Studyeducation>
    <Skill></Skill>
  </div>
</template>
<script>
import Studyeducation from "./Studyeducation.vue";
import Self from "./Self.vue";
import Skill from "./Skill.vue";
export default {
  components: {
    Studyeducation,
    Skill,
    Self,
  },
};
</script>

<style scoped>
/* 宣告中間內容區塊左右占比,如果只是更改右邊區塊,勿更改 */
.right-container {
  flex: 5;

  padding-top: 150px;
  background-color: rgb(45, 4, 180);
  color: white;
  font-size: 20px;
}
.right-container > div {
  margin: auto;
  text-align: center;
  line-height: 50px;
}
</style>
