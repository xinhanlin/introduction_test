<template>
  <div class="outer-skill">
    <div class="outermaincontainer">
      <div class="maincontainer">
        <div class="main">工作經驗</div>
      </div>
      <div class="triangle"></div>
    </div>

    <div class="item">
      <ul v-for="(item, index) in worksexperience" :key="index">
        <li>{{ item.a }}</li>
        <li>時間:{{ item.b }}</li>
        <li>職稱{{ item.c }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["worksexperience"],
  setup() {},
};
</script>
<style scoped>
.outer-skill {
  width: 90%;
  margin: 50px auto;
  border-bottom: 2px solid yellowgreen;
}
.outermaincontainer {
  overflow: hidden;
  margin: 10px 0px 10px 0px;
}

.maincontainer {
  float: left;
  width: 60%;
  height: 40px;
  line-height: 40px;
  background-color: aquamarine;
  border-radius: 7px 0px 0px 7px;
  font-size: 20px;
}
.main {
  text-align: center;
  font-weight: bold;
}
.triangle {
  float: left;

  border-top: 20px solid transparent;
  border-left: 20px solid aquamarine;
  border-bottom: 20px solid transparent;
  border-right: 20px solid transparent;
}
.item {
  width: 80%;
  margin: 10px 0px 10px -10px;
}
.item ul li:first-child {
  list-style-type: circle;
  font-weight: 1000;
}
.item ul li {
  list-style-type: none;
  height: 30px;
  line-height: 30px;
  margin-left: 10px;
}
</style>
