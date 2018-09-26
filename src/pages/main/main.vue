<template>
  <f7-page id="main">
    <!-- <f7-navbar>
      <f7-nav-title>{{navbarTitle}}</f7-nav-title>
    </f7-navbar> -->

    <f7-tabs swipeable>
      <f7-tab id="index" tab-active>
        <GameView></GameView>
        <p>index</p>
      </f7-tab>
      <f7-tab id="about">
        <AboutView></AboutView>
        <p>about</p>
      </f7-tab>
      <f7-tab id="setting">
        <SettingView></SettingView>
        <p>setting</p>
      </f7-tab>
    </f7-tabs>

    <f7-toolbar tabbar bottom-md>
      <f7-link tab-link="#index" tab-link-active @click="tabActived('index')">
        <i class="f7-icons">drawer_fill</i>
        <p class="tabname">Game</p>
      </f7-link>
      <f7-link tab-link="#about" @click="tabActived('about')">
        <i class="f7-icons">info_fill</i>
        <p class="tabname">About</p>
      </f7-link>
      <f7-link tab-link="#setting" @click="tabActived('setting')">
        <i class="f7-icons">gear_fill</i>
        <p class="tabname">Setting</p>
      </f7-link>
    </f7-toolbar>
  </f7-page>
</template>

<script>
// Import Component
import GameView from "./tabs/game";
import AboutView from "./tabs/about";
import SettingView from "./tabs/setting";

export default {
  name: "Main",
  data() {
    return {
      activeTab: "index"
    };
  },
  components: {
    GameView,
    AboutView,
    SettingView
  },
  methods: {
    tabActived(tab) {
      this.activeTab = tab;
    }
  },
  computed: {
    navbarTitle: function() {
      switch (this.activeTab) {
        case "index":
          return "GoldenF";
        case "about":
          return "About";
        case "setting":
          return "Setting";
      }
    }
  }
};
</script>




