<template>
  <!-- App -->
  <div id="app">
    <f7-view id="main-view" url="/" main></f7-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      setting: []
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData: function() {
      const vm = this;

      const localsetting = localStorage.getItem("Setting");

      // 若localstorage裡有值，將值帶入setting；若沒有值，將blue寫進setting
      if (localsetting) {
        vm.setting = JSON.parse(localsetting);
        console.log(vm.setting);
      } 
      // else{
      //   vm.setting.color = 'blue';
      //   vm.setting.colorcss = 'color-theme-blue';
      //   vm.setting.theme = 'Light';
      //   vm.setting.themecss = ''; 
      // }

      document.querySelector("body").className = "";

      // 若主題有值，將class寫入html
      if (vm.setting.themecss) {
        document.querySelector("body").classList.add(vm.setting.themecss);
      }

      // 若顏色有值，將class寫入html
      if (vm.setting.colorcss) {
        document.querySelector("body").classList.add(vm.setting.colorcss);
      }
    }
  }
};
</script>

<style lang="sass">
@import "./css/all";
</style>