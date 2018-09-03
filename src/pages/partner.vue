<template>
  <f7-page class="PartnerPage">

    <f7-navbar title="合作夥伴" back-link="$f7router.back()"></f7-navbar>
    <f7-block-title>合作伙伴</f7-block-title>
    <f7-block strong class="row partners">
        <f7-col width="33" v-for="item in partners" :key="item.name" class="item">
            <img :src="item.logo" alt="">
        </f7-col>
    </f7-block>

    <f7-block-title>策略伙伴</f7-block-title>
    <f7-block strong class="row partners">
        <f7-col width="33" class="item">
            <img :src="beplay" alt="">
        </f7-col>
        <f7-col width="33" class="item">
            <img :src="niu" alt="">
        </f7-col>
    </f7-block>

  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      partners: [],
      beplay: "./static/img/partner/partner-beplay.png",
      niu: "./static/img/partner/partner-niugame.png"
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
        vm.partners = response.data.partners;
      });
    }
  }
};
</script>
