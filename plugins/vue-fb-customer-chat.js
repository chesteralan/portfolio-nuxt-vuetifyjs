import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 794526983952261, //  change 'null' to your Facebook Page ID,
  theme_color: '#0084ff', // theme color in HEX
  locale: 'en_US' // default 'en_US'
})
