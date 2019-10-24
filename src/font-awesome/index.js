import Vue from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import * as far from '@fortawesome/free-regular-svg-icons'
import * as fas from '@fortawesome/free-solid-svg-icons'

library.add([
  fas.faDownload,
  fas.faExternalLinkAlt,
  fas.faSearch,
  fas.faSignInAlt,
  fas.faSpinner,
])

Vue.component('fa', FontAwesomeIcon)
