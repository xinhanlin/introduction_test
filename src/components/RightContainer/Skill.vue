<template>
  <div class="studyeducationouter">
    <div class="studyeducationtitle"><h1>掌握技能</h1></div>
    <div class="studyeducationlink">
      <router-link to="/skill1"><h4>html,css</h4></router-link>
      <router-link to="/skill2"><h4>javascript ES6</h4></router-link>
      <router-link to="/skill3"><h4>Vue框架</h4></router-link>
    </div>

    <router-view></router-view>
  </div>
</template>
<style scoped>
.studyeducationouter {
  width: 80%;
  height: 800px;
}
.right-container .studyeducationtitle h1 {
  color: aqua;
}
.router-link-active {
  text-decoration: none;
  color: rgb(212, 236, 118);
}
a {
  text-decoration: none;
  color: white;
}
</style>
