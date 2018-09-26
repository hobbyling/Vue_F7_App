<template>
<div>
  <!-- <f7-navbar>
    <f7-nav-title>About</f7-nav-title>
  </f7-navbar> -->

  <f7-page name="about" class="about">
    <div class="poster">
      <img :src="bgimg" alt="" class="about-poster">
      <p class="slogan1">GOLDENF</p>
      <p class="slogan2">为您精心打造最佳多平台系统整合方案</p>
    </div>
    <f7-block class="row">
      
      <f7-col width="50" tablet-width="25" link="#">
        <a href="/about/goldenf/">
          <f7-card class="about-item" inner>
            <i class="f7-icons">GF</i>
            <p>GoldenF</p>
          </f7-card>
        </a>
      </f7-col>
      
      <f7-col width="50" tablet-width="25">
        <a href="/about/partner/">
          <f7-card class="about-item" inner>
            <i class="f7-icons">persons</i> 
            <p>合作伙伴</p>
          </f7-card>
        </a>
      </f7-col>
      <f7-col width="50" tablet-width="25">
        <a href="/about/web/">
          <f7-card class="about-item" inner>
            <i class="f7-icons">world</i> 
            <p>官方网站</p>
          </f7-card>
        </a>
      </f7-col>
      <f7-col width="50" tablet-width="25">
        <a href="/about/privacy/">
          <f7-card class="about-item" inner>
            <i class="f7-icons">lock</i> 
            <p>隐私政策</p>
          </f7-card>
        </a>
      </f7-col>

    </f7-block>
  </f7-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgimg: "./static/img/about/bg.png"
    };
  }
};
</script>