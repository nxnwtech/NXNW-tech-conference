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

import VueScrollTo from 'vue-scrollto' 

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
  Vue.use(VueScrollTo, {
    offset: -80,
  });
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap'
  })

  head.meta.push({
    key: 'og:title',
    name: 'title',
    property: 'og:title',
    content: 'nxnwtech X Conference'
  })
  head.meta.push({
    key: 'og:description',
    name: 'description',
    property:"og:description",
    content: 'nxnwtech X is a one day, technology themed, not for profit, community conference to be hosted in LYIT Campus on Thursday 3rd June 2021.'
  })
  head.meta.push({
    key: 'og:url',
    name: 'url',
    property:"og:url",
    content: 'https://www.nxnwtech.com'
  })
  head.meta.push({
    key: 'og:image',
    name: 'image',
    property: 'og:image',
    content: 'https://www.nxnwtech.com/assets/social-card-logo.png'
  })
  head.meta.push({
    key: 'og:image:type',
    name: 'image:type',
    property: 'og:image:type',
    content: 'image/png'
  })
  head.meta.push({
    key: 'og:image:width',
    name: 'image:width',
    property: 'og:image:width',
    content: '1024'
  })
  head.meta.push({
    key: 'og:image:height',
    name: 'image:height',
    property: 'og:image:height',
    content: '1024'
  })

  head.meta.push({
    key: 'twitter:card',
    name: 'twitter:card',
    property: 'twitter:card',
    content: 'summary_large_image'
  })
  head.meta.push({
    key: 'twitter:site',
    name: 'twitter:site',
    property: 'twitter:site',
    content: '@nxnwtech'
  })
  head.meta.push({
    key: 'twitter:title',
    name: 'twitter:title',
    property: 'twitter:title',
    content: 'nxnwtech X Conference'
  })
  head.meta.push({
    key: 'twitter:description',
    name: 'twitter:description',
    property: 'twitter:description',
    content: 'nxnwtech X is a one day, technology themed, not for profit, community conference to be hosted in LYIT Campus on Thursday 3rd June 2021.'
  })
  head.meta.push({
    key: 'twitter:image',
    name: 'twitter:image',
    property: 'twitter:image',
    content: 'https://www.nxnwtech.com/assets/social-card-logo.png'
  })
}
