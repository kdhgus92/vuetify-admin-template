import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

const theme = {

  // primary:colors.red,
  // secondary: '#9C27B0'
  primary: colors.deepOrange,
  secondary: colors.red.lighten4, // #FFCDD2
  accent: colors.indigo.base, // #3F51B5
}

export default new Vuetify({
  breakpoint: {
    thresholds: {
      // xs: 360
    },
    mobileBreakpoint: 'xs'
  },
  theme: {
    themes: {
      light:theme,
      dark: theme
    }
  }
});
