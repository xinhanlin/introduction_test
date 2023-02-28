<template>
  <div class="studyeducationouter">
    <div class="studyeducationtitle"><h1>教育/培訓經歷</h1></div>
    <div class="studyeducationlink">
      <router-link to="/study1"><h4>python (2021-7-8)</h4></router-link>
      <router-link to="/study2"><h4>線上自學Mysql (2022-1-2)</h4></router-link>
      <router-link to="/study3"><h4>物聯網課程(2022-9-12)</h4></router-link>
      <router-link to="/study4"><h4>自學線上課程(2023-12-2)</h4></router-link>
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
