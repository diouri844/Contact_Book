import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
/*export default defineNuxtConfig({
    
});*/

export default {
  modules: ['@nuxtjs/supabase'],
  components: {
     global: true,
     dirs: ['~/components'],
    }
}
