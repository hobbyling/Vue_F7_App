<template id="gamelist">
    <f7-page hide-toolbar-on-scroll>
        <f7-navbar :title="vendor" back-link="$f7router.back()"></f7-navbar>

        <f7-toolbar tabbar>
          <f7-link v-for="(item, key) in gametype" :key="key" :tab-link="item.link"  @click="tab(item.type ,key)" :class="{'tab-link-active': visibility == item.type}">{{item.typecn}}</f7-link>
        </f7-toolbar>

        <f7-tabs animated>
          <f7-tab :id="type.type" v-for="(type, key) in gametype" :key="key" class="page-content" :class="{'tab-active': visibility == type.type}">
            <f7-list media-list class="gamelist">
              <li v-for="item in filterGames" :key="item.link">
                <a :href="'/game/'+item.vendor+'/'+item.link">
                <div class="item-content">
                  <div class="item-media">               
                    <img :src="item.icon" alt="">                 
                  </div>
                  <div class="item-inner">                
                    <div class="item-title-row">                    
                        <div class="item-title">{{item.name}}</div>
                        <div class="item-after">                   
                            <span>Go ></span>               
                        </div>                    
                    </div>
                    <div class="item-subtitle">{{item.enname}}</div>
                    <div class="item-text">{{item.type}}</div>
                  </div>
                </div>
                </a>
              </li>
            </f7-list>
          </f7-tab>
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
        if (path == "PG") {
          vm.vendorgame = response.data.pggame;
          vm.gametype = response.data.gamevendor[0].gametype;
          vm.vendor = "PG Game";
           
        } else if (path == "PTSW") {
          vm.vendorgame = response.data.ptgame;
          vm.gametype = response.data.gamevendor[1].gametype;
          vm.vendor = "PT Game";
        } else if (path == "CQ9") {
          vm.vendorgame = response.data.cq9game;
          vm.gametype = response.data.gamevendor[2].gametype;
          vm.vendor = "CQ9 Game";
        }
      });
    },
    tab: function(index, key){
      
      this.visibility = index;
      console.log(index +'/' +key);

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
<style scoped>
.tab-link-highlight {
  height: 10px;
}
</style>
