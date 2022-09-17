<template>
   <Login v-show="login_in" @display_singup="toggel_pages" @RenderHome="RendringUserHome"/>
   <SingUp v-show="sing_up" @dsiplay_login="toggel_pages" />
    <!--<NuxtWelcome />-->
    <UserHome v-if="is_home" v-bind:User="UserLoginIn"/>
</template>


<script>
import Login from "@/.nuxt/components/Login.vue";
import SingUp from "@/.nuxt/components/SingUp.vue";
import UserHome from "@/.nuxt/components/UserHome.vue"
export default {
  components: {
    Login,
    SingUp,
    UserHome
  },
  data(){
    return{
      'login_in':true,
      'sing_up':false,
      'is_home':false,
      'UserLoginIn' : {}
    }
  },
  methods:{
    toggel_pages(){
      this.login_in = !this.login_in;
      this.sing_up = !this.sing_up;
    },
    RendringUserHome(user){
      this.is_home = true;
      this.login_in = false;
      // update the session user :
      this.UserLoginIn = user;
    }
  }
}
</script>


<style>
@import "@fortawesome/fontawesome-free/css/all.min.css";
:root {
  --color-p1: #001D4A;
  --color-p2: #27476E;
  --color-p3: #006992;
  --color-p4: #EAF8BF;
  --color-p5: #ECA400;
  --text-color-1: #fff;
  --text-color-2: #eee;
  --text-color-3: #ccc;
  --font-family-1: cursive;
  --font-family-2: fantasy;
  --font-family-3: emoji;
  --size-xsm: 8px;
  --size-sm : 12px;
  --size-lg : 18px;
  --size-xlg : 25px;
  --border-simple : 1px;
  --border-complex-p3 : 5px solid var(--color-p3);
  --border-complex-p4 : 5px solid var(--color-p4);
  --border-complex-p5 : 5px solid var(--color-p5);
  --padding-simple: 5px 10px;
  --radius : 20px;
  --default-outline : none;
  --margin-center:50px 90px; 
  --margin-responsive-1: 30px 50px;
  --margin-responsive-2: 1% 50%;
}
*{
  background-color: var(--color-p1);
}
</style>t