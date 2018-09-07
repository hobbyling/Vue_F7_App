<template>
  <f7-page id="GameView" class="GameView" @ptr:refresh="loadMore">

    <f7-block-title class="title">游戏厂商</f7-block-title>
    <f7-block class="row">
      
        <f7-col class="logo">
          <a href="/vendor/pg">
            <img :src="pglogo" alt="">
          </a>
        </f7-col>
        <f7-col class="logo">
          <a href="/vendor/pt">
            <img :src="skylogo" alt="">
          </a>
        </f7-col>
        <f7-col class="logo">
          <a href="/vendor/cq9">
            <img :src="cq9logo" alt="">
          </a>
        </f7-col>
  
    </f7-block>
    <!-- <hr> -->
    <f7-block-title class="title">推荐游戏</f7-block-title>

    <f7-block class="hotgame">
      <f7-swiper  :params="{ observer: true, slidesPerView: 'auto', speed:500,  effect: 'slide', spaceBetween: 10 }">
        <f7-swiper-slide v-for="(item, key) in hotgamelist" :key="key" class="row">
          <img :src="item.cover" alt="" class="gamecover">      
          <div class="cover">
            <a :href="'/vendor/gamedetail/'+item.link" external target="_blank">       
              <h2>{{item.name}}</h2>
              <br/>
              <h5>{{item.enname}}</h5>
              <br/>
              <h6>{{item.vendor}} / {{item.type}}</h6>
            </a>          
          </div>        
        </f7-swiper-slide>
      </f7-swiper>   
    </f7-block>

    <f7-block class="othergame">
      <f7-swiper  :params="{ observer: true, slidesPerView: 'auto', speed:500,  effect: 'slide', spaceBetween: 10 }">
        <f7-swiper-slide>
          <f7-block-title class="title">老虎机游戏</f7-block-title>
          <f7-list media-list class="gamelist">
            <li v-for="item in slotgamelist" :key="item.link">
              <div class="item-content">
                <div class="item-media">
                  <a :href="'/vendor/'+item.vendor+'/'+item.link">
                    <img :src="item.icon" alt="">
                  </a>
                </div>
                <div class="item-inner">
                  <a :href="'/vendor/'+item.vendor+'/'+item.link">
                    <div class="item-title-row">                    
                        <div class="item-title">{{item.name}}</div>
                        <div class="item-after">                   
                            <span>Go ></span>               
                        </div>                    
                    </div>
                  </a>
                  <div class="item-subtitle">{{item.enname}}</div>
                  <div class="item-text">{{item.vendor}}</div>
                </div>
              </div>
            </li>
          </f7-list>
        </f7-swiper-slide>
        <f7-swiper-slide>
          <f7-block-title class="title">棋牌游戏</f7-block-title>
          <f7-list media-list class="gamelist">
            <li v-for="item in cardgamelist" :key="item.link">
              <div class="item-content">
                <div class="item-media">
                  <a :href="'/vendor/'+item.vendor+'/'+item.link">
                    <img :src="item.icon" alt="">
                  </a>
                </div>
                <div class="item-inner">
                  <a :href="'/vendor/'+item.vendor+'/'+item.link">
                    <div class="item-title-row">                    
                        <div class="item-title">{{item.name}}</div>
                        <div class="item-after">                   
                            <span>Go ></span>               
                        </div>                    
                    </div>
                  </a>
                  <div class="item-subtitle">{{item.enname}}</div>
                  <div class="item-text">{{item.vendor}}</div>
                </div>
              </div>
            </li>
          </f7-list>
        </f7-swiper-slide>
      </f7-swiper>   
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
      pglogo: "./static/img/vendor/partner-pg-black.png",
      skylogo: "./static/img/vendor/partner-skywind.png",
      cq9logo: "./static/img/vendor/partner-cq9.png"
    };
  },
  created() {
    this.getData();
    this.getSlotGame();
    this.getCardGame();
  },
  methods: {
    getData: function() {
      const vm = this;
      const api = "./static/data.json";
      this.$http.get(api).then(function(response) {
        const hotgame = response.data.pggame;
        const ranNum = 3;

        for (var i = 0; i < ranNum; i++) {
          var ran = Math.floor(Math.random() * hotgame.length);
          vm.hotgamelist.push(hotgame.splice(ran, 1)[0]);
        }

        const hotgame1 = response.data.ptgame;

        for (var i = 0; i < ranNum; i++) {
          var ran1 = Math.floor(Math.random() * hotgame1.length);
          vm.hotgamelist.push(hotgame1.splice(ran1, 1)[0]);
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
    getSlotGame: function() {
      const vm = this;
      const api = "./static/data.json";
      this.$http.get(api).then(function(response) {
        const ranNum = 2;

        let slottemp = response.data.pggame;
        let slot = slottemp.filter(function(item) {
          return item.type == "老虎机游戏";
        });

        for (var i = 0; i < ranNum; i++) {
          var ran = Math.floor(Math.random() * slot.length);
          vm.slotgamelist.push(slot.splice(ran, 1)[0]);
        }

        let slottemp1 = response.data.ptgame;
        let slot1 = slottemp1.filter(function(item) {
          return item.type == "老虎机游戏";
        });

        for (var i = 0; i < ranNum; i++) {
          var ran = Math.floor(Math.random() * slot1.length);
          vm.slotgamelist.push(slot1.splice(ran, 1)[0]);
        }

        // 隨機排序
        for (let i = 0, l = vm.slotgamelist.length; i < l; i++) {
          let rc = parseInt(Math.random() * l);
          const empty = vm.slotgamelist[i];
          vm.slotgamelist[i] = vm.slotgamelist[rc];
          vm.slotgamelist[rc] = empty;
        }
      });
    },
    getCardGame: function() {
      const vm = this;
      const api = "./static/data.json";
      this.$http.get(api).then(function(response) {
        let cardtemp = response.data.pggame;
        let card = cardtemp.filter(function(item) {
          return item.type == "棋牌游戏";
        });

        let cardtemp1 = response.data.ptgame;
        let card1 = cardtemp1.filter(function(item) {
          return item.type == "棋牌游戏";
        });

        vm.cardgamelist = card.concat(card1);

        // 隨機排序
        for (let i = 0, l = vm.cardgamelist.length; i < l; i++) {
          let rc = parseInt(Math.random() * l);
          const empty = vm.cardgamelist[i];
          vm.cardgamelist[i] = vm.cardgamelist[rc];
          vm.cardgamelist[rc] = empty;
        }
      });
    },
    openGame: function(btn) {
      window.open(btn);
    },
    loadMore(event, done) {
      done();
    }
  }
};
</script>
