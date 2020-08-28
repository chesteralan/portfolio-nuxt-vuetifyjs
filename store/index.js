export const state = () => ({
  allItems: [],
  wordpressItems: [],
  vueItems: [],
  laravelItems: [],
  codeigniterItems: [],
  chromeItems: [],
  pythonItems: [],
  otherItems: []
})

// const sortByOrder = (a, b) => {
//   let compare = 0
//   if (a.attributes.order > b.attributes.order) {
//     compare = 1
//   } else if (b.attributes.order > a.attributes.order) {
//     compare = -1
//   }
//   return compare
// }

const sortByTitle = (a, b) => {
  const textA = a.attributes.title.toUpperCase()
  const textB = b.attributes.title.toUpperCase()
  return (textA < textB) ? -1 : (textA > textB) ? 1 : 0
}

// const sortByDate = (a, b) => {
//   return new Date(b.attributes.date) - new Date(a.attributes.date)
// }

export const mutations = {
  setAllItems (state, list) {
    list.sort(sortByTitle)
    state.allItems = list
  },
  setWordpressItems (state, list) {
    list.sort(sortByTitle)
    state.wordpressItems = list
  },
  setVueItems (state, list) {
    list.sort(sortByTitle)
    state.vueItems = list
  },
  setPythonItems (state, list) {
    list.sort(sortByTitle)
    state.pythonItems = list
  },
  setLaravelItems (state, list) {
    list.sort(sortByTitle)
    state.laravelItems = list
  },
  setCodeigniterItems (state, list) {
    list.sort(sortByTitle)
    state.codeigniterItems = list
  },
  setChromeItems (state, list) {
    list.sort(sortByTitle)
    state.chromeItems = list
  },
  setOtherItems (state, list) {
    list.sort(sortByTitle)
    state.otherItems = list
  }
}

export const actions = {
  async nuxtServerInit ({ commit }) {
    const all = await require.context('~/content/', true, /\.md$/)
    const allItems = all.keys().map((key) => {
      const res = all(key)
      res.slug = key.slice(2, -3)
      return res
    })
    await commit('setAllItems', allItems)

    const wp = await require.context('~/content/wordpress/', false, /\.md$/)
    const wordpressItems = wp.keys().map((key) => {
      const res = wp(key)
      res.slug = key.slice(2, -3)
      res.route = '/wordpress/' + res.slug
      return res
    })
    await commit('setWordpressItems', wordpressItems)

    const vue = await require.context('~/content/vuejs/', false, /\.md$/)
    const vueItems = vue.keys().map((key) => {
      const res = vue(key)
      res.slug = key.slice(2, -3)
      res.route = '/vuejs/' + res.slug
      return res
    })
    await commit('setVueItems', vueItems)

    const python = await require.context('~/content/python/', false, /\.md$/)
    const pythonItems = python.keys().map((key) => {
      const res = python(key)
      res.slug = key.slice(2, -3)
      res.route = '/python/' + res.slug
      return res
    })
    await commit('setPythonItems', pythonItems)

    const laravel = await require.context('~/content/laravel/', false, /\.md$/)
    const laravelItems = laravel.keys().map((key) => {
      const res = laravel(key)
      res.slug = key.slice(2, -3)
      res.route = '/laravel/' + res.slug
      return res
    })
    await commit('setLaravelItems', laravelItems)

    const codeigniter = await require.context('~/content/codeigniter/', false, /\.md$/)
    const codeigniterItems = codeigniter.keys().map((key) => {
      const res = codeigniter(key)
      res.slug = key.slice(2, -3)
      res.route = '/codeigniter/' + res.slug
      return res
    })
    await commit('setCodeigniterItems', codeigniterItems)

    const chrome = await require.context('~/content/chrome/', false, /\.md$/)
    const chromeItems = chrome.keys().map((key) => {
      const res = chrome(key)
      res.slug = key.slice(2, -3)
      res.route = '/chrome/' + res.slug
      return res
    })
    await commit('setChromeItems', chromeItems)

    const others = await require.context('~/content/others/', false, /\.md$/)
    const otherItems = others.keys().map((key) => {
      const res = others(key)
      res.slug = key.slice(2, -3)
      res.route = '/others/' + res.slug
      return res
    })
    await commit('setOtherItems', otherItems)
  }
}

export const getters = {
}
