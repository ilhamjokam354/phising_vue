import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Facebook from "./views/Facebook.vue";
import Youtube from "./views/Youtube.vue";
import LoginInstagram from "./views/LoginInstagram.vue"
import LoginFacebook from "./views/LoginFacebook.vue"
import LoginYoutube from "./views/LoginYoutube.vue"
import ProsesInstagram from "./views/ProsesInstagram.vue"
import ProsesFacebook from "./views/ProsesFacebook.vue"
import ProsesYoutube from "./views/ProsesYoutube.vue"
import Profile from "./views/Profile.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  mode : "history",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/instagram",
      name: "instagram",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/facebook",
      name: "facebook",
      components: {
        header: AppHeader,
        default: Facebook,
        footer: AppFooter
      }
    },
    {
      path: "/youtube",
      name: "youtube",
      components: {
        header: AppHeader,
        default: Youtube,
        footer: AppFooter
      }
    },
    {
      path : "/login/instagram",
      name : "login instagram",
      components : {
        default : LoginInstagram
      }  
    },
    {
      path : "/login/facebook",
      name : "login facebook",
      components : {
        default : LoginFacebook
      }  
    },
    {
      path : "/login/youtube",
      name : "login youtube",
      components : {
        default : LoginYoutube
      }  
    },
    {
      path : "/proses/instagram",
      name : "proses instagram",
      components : {
        header: AppHeader,
        default : ProsesInstagram,
        footer : AppFooter
      }  
    },
    {
      path : "/proses/facebook",
      name : "proses facebook",
      components : {
        header: AppHeader,
        default : ProsesFacebook,
        footer : AppFooter
      }  
    },
    {
      path : "/proses/youtube",
      name : "proses youtube",
      components : {
        header: AppHeader,
        default : ProsesYoutube,
        footer : AppFooter
      }  
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    }

  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
