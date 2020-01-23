// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

import '~/styles/main.scss';

/** font awesome **/
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import { faGithubSquare, faTwitterSquare, faLinkedin, faReplyd} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import vWow from 'v-wow'

import VueShowdown from 'vue-showdown'

config.autoAddCss = false;
library.add(faGithubSquare, faTwitterSquare, faLinkedin, faReplyd)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('font-awesome', FontAwesomeIcon)
  Vue.use(vWow)
  Vue.use(VueShowdown, {
    // set default flavor of showdown
    flavor: 'github',
    // set default options of showdown (will override the flavor options)
    options: {
      emoji: false,
    },
  })
}
