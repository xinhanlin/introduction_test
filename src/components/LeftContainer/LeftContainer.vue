<template>
  <div class="outer">
    <div>
      <img
        src="../../assets/tintint-flipbook_7-1024x683-e1612860878313.jpg"
        style="width: 60%; display: block; margin: auto"
      />
    </div>
    <div class="left-title">
      <h3 style="margin: 30px 40px; text-align: center">
        Hi, my name is <u>linxinhan</u>.
      </h3>
    </div>
    <div class="left-container">
      <Detail :detail="detail"></Detail>
      <Worksexperience :worksexperience="worksexperience"></Worksexperience>
      <Contact :contact="contact"></Contact>
      <div class="left-bottom"></div>
    </div>
  </div>
</template>
<script>
import Detail from "./Detail.vue";
import Contact from "./Contact.vue";
import Worksexperience from "./Worksexperience.vue";
import { reactive, toRefs } from "vue";
export default {
  components: {
    Detail,
    Contact,
    Worksexperience,
  },
  setup() {
    const data = reactive({
      detail: {
        name: "林欣漢",
        graduate: "淡江大學",
        academic: "學士",
        department: "統計系",

        address: "新北市新店區",
        hobby: ["打球", "慢跑"],
      },
      contact: {
        phone: "09-03034213",
        email: "freeze1234576@gmail.com",
      },
      worksexperience: [
        { a: "土地銀行", b: "2021-6~2022-1", c: "行政助理" },
        { a: "台灣經濟新報", b: "2022-2~2022-7", c: "財務管理師" },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
};
</script>

<style>
.outer {
  height: 100%;
  flex: 2;
  padding-top: 100px;
  border-right: 2px solid black;
  background-color: azure;
}
.left-title {
  font-family: "Courier New", Courier, monospace;
}
.left-title h1 {
  text-align: center;
}
.left-container {
  height: 100%;
}
.left-bottom {
  margin-top: 40px;
}
</style>
