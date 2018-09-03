// Import Vue
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

// Import F7
import Framework7 from 'framework7/dist/framework7.esm.bundle.js';

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue/dist/framework7-vue.esm.bundle.js';

// Import F7 Styles
import Framework7Styles from 'framework7/dist/css/framework7.css';

// Import Icons and App Custom Styles
import IconsStyles from './css/icons.css';

// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app';



// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7)
Vue.use(VueAxios, axios)

// Init App
new Vue({
  el: '#app',
  data: {
    data: [],
  },
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    id: 'io.framework7.testapp', // App bundle ID
    name: 'Framework7', // App name
    theme: 'md', // auto/md/ios
    // App routes
    routes: Routes,
    hideNavbarOnPageScroll: true,
    view: {
      pushState: true,
      // pushStateRoot: "/demoapp/"
      pushStateRoot: process.env.PUSH_STATE
    }
  },
  // Register App Component
  components: {
    app: App
  },


});
