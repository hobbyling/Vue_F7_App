<template id="gamelist">
    <f7-page>
        <f7-navbar title="PG Game" back-link="$f7router.back()">
          <!-- <f7-subnavbar>
            <p class="segmented">
              <f7-button :class="{'seg-active': visibility == 'all'}" @click="visibility = 'all'" href="#">All</f7-button>     
              <f7-button :class="{'seg-active': visibility == 'tiger'}" @click="visibility = 'tiger'" href="#">老虎机</f7-button>   
              <f7-button :class="{'seg-active': visibility == 'card'}" @click="visibility = 'card'" href="#">棋牌</f7-button>
            </p>
          </f7-subnavbar> -->
        </f7-navbar>
        <f7-toolbar tabbar>
          <f7-link tab-link="#all" tab-link-active @click="visibility = 'all'">All</f7-link>
          <f7-link tab-link="#slot" @click="visibility = 'tiger'">老虎机</f7-link>
          <f7-link tab-link="#card" @click="visibility = 'card'">棋牌</f7-link>
        </f7-toolbar>

        <f7-tabs swipeable>
          <f7-tab id="all" class="page-content" tab-active>
            <f7-list media-list class="gamelist">
              <li v-for="item in vendorgame" :key="item.link">
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

          <f7-tab id="slot" class="page-content">
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
        </f7-tabs>
    </f7-page>
</template>

<script>
export default {
  data() {
    return {
      vendorgame: [],
      visibility: "all"
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
        } else if (path == "pt") {
          vm.vendorgame = response.data.ptgame;
        }
      });
    }
  },
  computed: {
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
    }
  }
};
</script>
