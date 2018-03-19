export default {
  state: {
    post: {
      title: '',
      content: ''
    },
    isSaved: null
  },
  mutations: {
    updateTitle (state, title) {
      state.post.title = title
    },
    updateContent (state, content) {
      state.post.content = content
    },
    isSaved (state, isSaved) {
      console.log(isSaved)
      state.isSaved = isSaved
    },
  },
  actions: {
    submitPost ({ commit, state }) {
      fetch(`http://homestead.global.com/api/post`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: state.post.title,
          content: state.post.content
        })
      })
      .then(response => commit('isSaved', response.ok))
    },
    resetSaved ({ commit }) {
      commit('isSaved', null)
    }
  }
}
