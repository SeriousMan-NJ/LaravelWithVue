export default {
  state: {
    postList: []
  },
  mutations: {
    getPostList (state, postList) {
      state.postList = postList
    }
  },
  actions: {
    getPostList ({ commit, state }) {
      fetch(`http://homestead.global.com/api/post`)
      .then(response => response.json())
      .then(posts => commit('getPostList', posts))
    }
  }
}
