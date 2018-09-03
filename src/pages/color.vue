<template>
  <f7-page class="ColorPage">

    <f7-navbar title="Color" back-link="$f7router.back()"></f7-navbar>

    <f7-block-title>視覺</f7-block-title>
    <f7-list form>
        <f7-list-item radio v-for="item in colorstyle" :key="item.color" name="color-radio" :value="item.color" :title="item.name" @click="changeColor(item.color, item.css)" :checked="setting.color == item.color"></f7-list-item>
    </f7-list>

  </f7-page>
</template>
<script>
export default {
  // props: ["colorselect"],
  data() {
    return {
      colorstyle: {},
      setting: {
        theme: "Light",
        themecss: "",
        color: "blue",
        colorcss: ""
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: function() {
      const vm = this;

      // 取得color選項
      const api = "./static/data.json";
      this.$http.get(api).then(function(response) {
        vm.colorstyle = response.data.colorstyle;
      });

      // 取得localstorage
      const localsetting = localStorage.getItem("Setting");

      console.log(localsetting);
      // 若localstorage裡有值
      if (localsetting) {
        vm.setting = JSON.parse(localsetting);
      }

      document.querySelector("body").className = "";

      // 若主題有值
      if (vm.setting.themecss) {
        document.querySelector("body").classList.add(vm.setting.themecss);
      }

      // 若顏色有值
      if (vm.setting.colorcss) {
        document.querySelector("body").classList.add(vm.setting.colorcss);
      }
    },
    changeColor: function(color, css) {
      const vm = this;
      vm.setting.color = color;
      vm.setting.colorcss = css;

      let changeSetting = JSON.stringify(vm.setting);

      localStorage.setItem("Setting", changeSetting);

      document.querySelector("body").className = "";
      // 若主題有值
      if (vm.setting.themecss) {
        document.querySelector("body").classList.add(vm.setting.themecss);
      }

      // 若顏色有值
      if (vm.setting.colorcss) {
        document.querySelector("body").classList.add(vm.setting.colorcss);
      }
    }
  }
};
</script>
