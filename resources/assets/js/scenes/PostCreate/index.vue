<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <a href="/post">View Posts</a>
                <form v-on:submit.prevent="onSubmit">
                  <div>
                    <label>Title</label>
                    <input v:value="post.title" @input="updateTitle" type="text"  />
                  </div>
                  <div>
                    <label>Content</label>
                    <textarea v:value="post.content" @input="updateContent"></textarea>
                  </div>
                  <input type="submit" value="Submit" />
                  <div v-if="isSaved === true">Post is successfully saved</div>
                  <div v-else-if="isSaved === false">Cannot save post</div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        mounted() {
            console.log('Component PostCreate mounted.')
        },
        beforeDestroy() {
            this.$store.dispatch('resetSaved')
        },
        methods: {
          updateTitle (e) {
            this.$store.commit('updateTitle', e.target.value)
          },
          updateContent (e) {
            this.$store.commit('updateContent', e.target.value)
          },
          onSubmit () {
            this.$store.dispatch('submitPost')
          }
        },
        computed: {
          isSaved () {
            return this.$store.state.postCreate.isSaved
          }
        }
    }
</script>
