<template>
  <f7-page>
    <f7-navbar back-link="$f7router.back()">
      <f7-nav-title>佈景主題</f7-nav-title>
    </f7-navbar> 

    <f7-block-title>佈景主題</f7-block-title>
    <f7-list form>
        <f7-list-item radio v-for="item in themestyle" :key="item.theme" name="theme-radio" :value="item.theme" :title="item.name" @click="changeTheme(item.theme, item.css)" :checked="setting.theme == item.theme"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data: function() {
    return {
      themestyle: {},
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

      // 取得theme選項
      const api = "./static/data.json";
      this.$http.get(api).then(function(response) {
        vm.themestyle = response.data.themestyle;
      });

      const localsetting = localStorage.getItem("Setting");

      // 若localstorage裡有值
      if (localsetting) {
        vm.setting = JSON.parse(localsetting);
        console.log(vm.setting);
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
    changeTheme: function(theme, css) {
      const vm = this;
      vm.setting.theme = theme;
      vm.setting.themecss = css;

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
