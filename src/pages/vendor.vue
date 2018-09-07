<template id="gamelist">
    <f7-page>
        <f7-navbar :title="vendor" back-link="$f7router.back()">

        </f7-navbar>
        <!-- <f7-toolbar tabbar>
          <f7-link tab-link="#all" tab-link-active @click="visibility = 'all'">All</f7-link>
          <f7-link tab-link="#slot" @click="visibility = 'tiger'">老虎机</f7-link>
          <f7-link tab-link="#card" @click="visibility = 'card'">棋牌</f7-link>
        </f7-toolbar> -->
        <f7-toolbar tabbar>
          <f7-link v-for="(item, key) in gametype" :key="key" :tab-link="item.link" tab-link-active @click="tab(item.type)">{{item.typecn}}</f7-link>
        </f7-toolbar>

        <f7-tabs>
          <f7-tab :id="type.type" v-for="(type, key) in gametype" :key="key" class="page-content" :class="{'tab-active': visibility == type.type}">
            <f7-list media-list class="gamelist">
              <li v-for="item in filterGames" :key="item.link">
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
                    <div class="item-text">{{item.type}}</div>
                  </div>
                </div>
              </li>
            </f7-list>
          </f7-tab>

          <!-- <f7-tab id="slot" class="page-content">
            <f7-list media-list class="gamelist">
              <li v-for="item in slotGames" :key="item.link">
                <div class="item-content">
                  <div class="item-media">
                    <a :href="'/vendor/gamedetail/'+item.link">
                      <img :src="item.icon" alt="">
                    </a>
                  </div>
                  <div class="item-inner">
                    <a :href="'/vendor/gamedetail/'+item.link">
                      <div class="item-title-row">                    
                          <div class="item-title">{{item.name}}</div>
                          <div class="item-after">                   
                              <span>Go ></span>               
                          </div>                    
                      </div>
                    </a>
                    <div class="item-subtitle">{{item.enname}}</div>
                    <div class="item-text">{{item.type}}</div>
                  </div>
                </div>
              </li>
            </f7-list>
          </f7-tab>

          <f7-tab id="card" class="page-content">
            <f7-list media-list class="gamelist">
              <li v-for="item in cardGames" :key="item.link">
                <div class="item-content">
                  <div class="item-media">
                    <a :href="'/vendor/gamedetail/'+item.link">
                      <img :src="item.icon" alt="">
                    </a>
                  </div>
                  <div class="item-inner">
                    <a :href="'/vendor/gamedetail/'+item.link">
                      <div class="item-title-row">                    
                          <div class="item-title">{{item.name}}</div>
                          <div class="item-after">                   
                              <span>Go ></span>               
                          </div>                    
                      </div>
                    </a>
                    <div class="item-subtitle">{{item.enname}}</div>
                    <div class="item-text">{{item.type}}</div>
                  </div>
                </div>
              </li>
            </f7-list>
          </f7-tab>

          <f7-tab id="fish" class="page-content">
            <f7-list media-list class="gamelist">
              <li v-for="item in fishGames" :key="item.link">
                <div class="item-content">
                  <div class="item-media">
                    <a :href="'/vendor/gamedetail/'+item.link">
                      <img :src="item.icon" alt="">
                    </a>
                  </div>
                  <div class="item-inner">
                    <a :href="'/vendor/gamedetail/'+item.link">
                      <div class="item-title-row">                    
                          <div class="item-title">{{item.name}}</div>
                          <div class="item-after">                   
                              <span>Go ></span>               
                          </div>                    
                      </div>
                    </a>
                    <div class="item-subtitle">{{item.enname}}</div>
                    <div class="item-text">{{item.type}}</div>
                  </div>
                </div>
              </li>
            </f7-list>
          </f7-tab> -->
        </f7-tabs> 
    </f7-page>
</template>

<script>

export default {
  data() {
    return {
      vendorgame: [],
      vendor: '',
      gametype: [],
      visibility: "tiger"
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData: function() {
      const vm = this;
      const api = "./static/data.json";
      const path = vm.$f7Route.params.vendor;
      console.log(path);
      this.$http.get(api).then(function(response) {
        if (path == "pg") {
          vm.vendorgame = response.data.pggame;
          vm.gametype = response.data.gamevendor[0].gametype;
          vm.vendor = "PG Game";
           
        } else if (path == "pt") {
          vm.vendorgame = response.data.ptgame;
          vm.gametype = response.data.gamevendor[1].gametype;
          vm.vendor = "PT Game";
        } else if (path == "cq9") {
          vm.vendorgame = response.data.cq9game;
          vm.gametype = response.data.gamevendor[2].gametype;
          vm.vendor = "CQ9 Game";
        }
      });
    },
    tab: function(index){
      console.log(index);
      this.visibility = index;
    }
  },
  computed: {
    filterGames: function(){
      const vm = this;
      var filters = [];
      if (vm.visibility == 'all'){
        return vm.vendorgame;
      } else if(vm.visibility == 'tiger'){
        this.vendorgame.forEach(function(item) {
          if (item.type == "老虎机游戏") {
            filters.push(item);
          }
        });
        return filters;
      } else if(vm.visibility == 'card'){
        this.vendorgame.forEach(function(item) {
          if (item.type == "棋牌游戏") {
            filters.push(item);
          }
        });
        return filters;
      } else if(vm.visibility == 'fish'){
        this.vendorgame.forEach(function(item) {
          if (item.type == "捕鱼游戏") {
            filters.push(item);
          }
        });
        return filters;
      } else if(vm.visibility == 'arcade'){
        this.vendorgame.forEach(function(item) {
          if (item.type == "街机游戏") {
            filters.push(item);
          }
        });
        return filters;
      }
    },

    slotGames: function() {
      var tigergame = [];
      this.vendorgame.forEach(function(item) {
        if (item.type == "老虎机游戏") {
          tigergame.push(item);
        }
      });
      return tigergame;
    },
    cardGames: function() {
      var cardgame = [];
      this.vendorgame.forEach(function(item) {
        if (item.type == "棋牌游戏") {
          cardgame.push(item);
        }
      });
      return cardgame;
    },
    fishGames: function() {
      var cardgame = [];
      this.vendorgame.forEach(function(item) {
        if (item.type == "捕鱼游戏") {
          cardgame.push(item);
        }
      });
      return cardgame;
    }
  }
};
</script>
