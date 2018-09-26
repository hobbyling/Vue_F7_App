<template>
  <f7-page class="WebPage">

    <f7-navbar title="官方網站" back-link="$f7router.back()"></f7-navbar>
    
    <f7-block>
        <img :src="qrcode" alt="" class="qrcode">
        <p>https://goldenf.co</p>
        <f7-button fill href="https://goldenf.co" target="_blank" external>前往官網</f7-button>

    </f7-block>
    

  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      qrcode: "./static/img/qrcode.png"
    };
  }
};
</script>

<style lang="scss" scoped>
.qrcode {
  margin: 0 auto;
  display: block;
  width: 250px;
  height: 250px;
}

p {
  display: block;
  text-align: center;
  font-size: 20px;
  margin-top: 30px;
}
</style>

