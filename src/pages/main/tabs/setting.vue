<template>
  <f7-page class="SettingView">
    <f7-list>     
        <f7-list-item link="/setting/theme/" title="佈景主題"></f7-list-item>
        <f7-list-item link="/setting/color/" title="色彩主題"></f7-list-item>
    </f7-list>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      setting: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: function() {
      const vm = this;
      const api = "./static/data.json";
      this.$http.get(api).then(function(response) {
        vm.setting = response.data.setting;
      });
    }
  },
  computed: {
    modestatus: function() {
      const vm = this;
      const mode = document.querySelector("input").checked;
      console.log(mode);
      if (mode) {
        vm.setting.mode == "Dark mode";
        return "Dark mode";
      } else {
        vm.setting.mode == "Light mode";
      }
      return vm.setting.mode;
    }
  }
};
</script>
