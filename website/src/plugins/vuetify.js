import '@fortawesome/fontawesome-free/css/all.css'

import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'fa'
  },
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.grey.darken4
      },
      light: {
        primary: '#2e2e5e',
        accent: '#BCBCDC'
      }
    }
  }
})
