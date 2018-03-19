<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <HomeLink />
                <a href="/post/create">Creat new post</a>
                <div v-for="post in postList">
                  <h3>{{ post.title }}</h3>
                  <p>{{ post.content }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import HomeLink from '../../components/HomeLink'

    export default {
        mounted() {
            console.log('Component PostList mounted.')
            this.getPostList()
        },
        methods: {
          getPostList () {
            this.$store.dispatch('getPostList')
          }
        },
        computed: {
          postList () {
            return this.$store.state.postList.postList
          }
        },
        components: {
          HomeLink
        }
    }
</script>
