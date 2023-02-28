<template>
  <div class="outer-contact">
    <div class="outermaincontainer">
      <div class="maincontainer">
        <div class="main">聯繫方式</div>
      </div>
      <div class="triangle"></div>
    </div>

    <div class="item">
      <div>電話:{{ contact.phone }}</div>
      <div>Email:{{ contact.email }}</div>
    </div>
    <div class="border"></div>
  </div>
</template>
<script>
export default {
  props: ["contact"],
  setup() {},
};
</script>
<style scoped>
.outer-contact {
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
  margin: 10px 0px 10px 60px;
  position: relative;
}
.item > div {
  height: 50px;
  line-height: 50px;

  position: relative;
  right: 16px;
}
</style>
