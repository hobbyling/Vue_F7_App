<template>
  <!-- App -->
  <div id="app">
    <f7-view id="main-view" url="/" main></f7-view>
  </div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  methods: {
    getData: function() {
      const vm = this;

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
    }
  }
};
</script>

<style lang="sass">
@import "./css/style";
@import "./css/color";
</style>