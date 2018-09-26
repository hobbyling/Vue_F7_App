<template>
  <f7-page id="GameView" class="GameView" @ptr:refresh="loadMore">
    <div class="banner">
      <f7-swiper pagination navigation :params="{ observer: true }">
        <f7-swiper-slide v-for="(item, key) in banner" :key="key">
          <img :src="item.img" alt="" @click.prevent="touchbanner" :id="item.link">
        </f7-swiper-slide>
      </f7-swiper>
    </div>

    <f7-block-title class="title">热门游戏</f7-block-title>

    <f7-block class="hotgame">
      <f7-swiper :params="{observer: true, slidesPerView: 'auto', speed:500,  effect: 'slide', spaceBetween: 10 }">
        <f7-swiper-slide v-for="(item, key) in hotgamelist" :key="key" class="row">
          <img :src="item.cover" alt="" class="gamecover">      
          <div class="cover" @click.prevent="touchhotgame" :id="'/game/'+item.vendor+'/'+item.link">
               
              <h2>{{item.name}}</h2>
              <br/>
              <!-- <a :href="'/game/'+item.vendor+'/'+item.link" external target="_blank">     -->
              <h5>{{item.enname}}</h5>
              <br/>
              <h6>{{item.vendor}} / {{item.type}}</h6>
            <!-- </a>           -->
          </div>        
        </f7-swiper-slide>
      </f7-swiper>   
    </f7-block>

    <f7-block-title class="title">游戏厂商</f7-block-title>
    <f7-block class="row">
      <f7-col width="33" class="logo">
        <f7-button round raised href="/game/PG" class="vendor-btn">PG</f7-button>
      </f7-col>
      <f7-col width="33" class="logo">
        <f7-button round raised href="/game/PTSW" class="vendor-btn">PT SW</f7-button>
      </f7-col>
      <f7-col width="33" class="logo">
        <f7-button round raised href="/game/CQ9" class="vendor-btn">CQ9</f7-button>
      </f7-col>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      hotgamelist: [],
      slotgamelist: [],
      cardgamelist: [],
      pglogo: "./static/img/vendor/partner-pg-logo.png",
      skylogo: "./static/img/vendor/partner-skywind-logo.png",
      cq9logo: "./static/img/vendor/partner-cq9-logo.png",
      banner:[]
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
        // 寫入banner資料
        vm.banner = response.data.banner;

        // 從pg遊戲列表隨機選出三種
        const ranNum = 3;

        const pggame = response.data.pggame;
        for (var i = 0; i < ranNum; i++) {
          var ran = Math.floor(Math.random() * pggame.length);
          vm.hotgamelist.push(pggame.splice(ran, 1)[0]);
        }
        
        // 從pt遊戲列表隨機選出三種
        const ptgame = response.data.ptgame;
        for (var i = 0; i < ranNum; i++) {
          var ran1 = Math.floor(Math.random() * ptgame.length);
          vm.hotgamelist.push(ptgame.splice(ran1, 1)[0]);
        }

        // 從cq9遊戲列表隨機選出三種
        const cq9game = response.data.cq9game;
        for (var i = 0; i < ranNum; i++) {
          var ran2 = Math.floor(Math.random() * cq9game.length);
          vm.hotgamelist.push(cq9game.splice(ran2, 1)[0]);
        }

        // 隨機排序
        for (let i = 0, l = vm.hotgamelist.length; i < l; i++) {
          let rc = parseInt(Math.random() * l);
          const empty = vm.hotgamelist[i];
          vm.hotgamelist[i] = vm.hotgamelist[rc];
          vm.hotgamelist[rc] = empty;
        }
      });
    },
    openGame: function(btn) {
      window.open(btn);
    },
    loadMore(event, done) {
      done();
    },
    touchbanner: function(e){
      console.log(e);
 
      window.location.href="#!"+e.path[0].id;
      setTimeout(function(){
        window.location.reload();
      }, 4);
    },
    touchhotgame: function(e){
      console.log(e);
      var link = e.path[0].id;
      if(link == ''){
        link = e.path[1].id;
      }
      console.log(link);
      window.location.href="#!"+link;
      setTimeout(function(){
        window.location.reload();
      }, 4);
    }
  }
};
</script>

<style lang="scss" scoped>
.banner{
  height: 220px;
}

.hotgame{
  .swiper-slide {
    width: 200px;
    // border: 1px solid #a8a8a8;
    border-radius: 5px;
    box-shadow: 0 0px 4px #a8a8a8;
    position: relative;
    .cover {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .4);
        position: absolute;
        display: block;
    }
    h2,
    h5,
    h6 {
        display: inline-block;
        margin: 0;
        margin-left: 10px;
        font-weight: 700;
        color: #fff;
    }
    h2 {
        margin-top: 25px;
    }
    h5 {
        font-weight: 300;
        margin-top: -5px;
    }
    h6 {
        margin-top: 10px;
    }
    .game-type {
        margin: 0;
        color: #a8a8a8;
        font-size: 1.17em;
    }
    .gamecover {
        width: 100%;
        -moz-border-topright-radius: 5px;
        -webkit-border-topright-radius: 5px;
        -moz-border-topleft-radius: 5px;
        -webkit-border-topleft-radius: 5px;
        margin: 0 auto;
        display: block;
    }
  }
}

.logo {
  
  a{
    height: 40px; 
    background: rgba(255,255,255,.03);
    
  }
  img{
    width: 80%;
    margin: 0 auto;
    vertical-align: middle;
  }
}
</style>

