<template>
  <f7-page class="gamedetail">
    <f7-navbar :title="game.name" back-link="$f7router.back()"></f7-navbar>

    <f7-block class="intro">
      <f7-row>
        <f7-col width="40"><img :src="game.icon" alt="" class="logo"></f7-col>
        <f7-col width="60">
          <h2>{{game.name}}</h2>
          <h4>{{game.enname}}</h4>
          <a class="button-round button-fill external button" :href="game.play">試玩</a> <span class="gametype">{{game.type}}</span>
        </f7-col>
      </f7-row>

      <span class="compatible">Compatible with</span>
      <f7-row>      
        <f7-col class="icon" v-for="item in game.platform" :key="item.device">
          <img :src="item.icon" alt="">
          <span class="device">{{item.device}}</span>
        </f7-col>
      </f7-row>

      <f7-block class="video">
        <video class="afterglow" width="100%" controls :poster="game.cover" :src="game.video"  @click="videoControl"></video>
      </f7-block>
    </f7-block>

    
    <f7-block strong>
      <f7-row>
        <f7-col class="story">
          {{game.story}}
        </f7-col>
      </f7-row>
    </f7-block>
  </f7-page>
</template>

<script>
export default {
  data() {
    return {
      game: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: function() {
      const vm = this;
      const vendor = vm.$f7Route.params.vendor;
      const path = vm.$f7Route.params.game;
      const api = "./static/data.json";
      let data;
      
      console.log(vendor+"/"+path);

      this.$http.get(api).then(function(response) {

        if(vendor == "PG"){
          data = response.data.pggame;
        } else if(vendor == "PTSW"){
          data = response.data.ptgame;
        } else if(vendor == "CQ9"){
          data = response.data.cq9game;
        }

        vm.game = data.find(function(element) {
          return element.link == path;
        });
      });
    },
    openGame: function(btn) {
      console.log(btn);
      window.open(btn);
    },
    videoControl: function() {
      const vi = document.querySelector("video");
      if (vi.paused == false) {
        vi.pause();
      } else {
        vi.play();
      }
    }
  }
};
</script>
