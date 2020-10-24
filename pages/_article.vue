<template>
  <section class="util__container">
    <component :is="story.content.component" v-if="story.content.component" :key="story.content._uid" :blok="story.content" />
  </section>
</template>

<script>

export default {
  asyncData (context) {
    // Load the JSON from the API
    const article = context.app.context.params.article
    return context.app.$storyapi.get('cdn/stories/' + article, {
      version: 'draft'
    }).then((res) => {
      return res.data
    })
  },
  data () {
    return {
      story: { content: {} }
    }
  },
  mounted () {
    // use the bridge to listen to events
    this.$storybridge.on(['input', 'published', 'change'], (event) => {
      if (event.action === 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      } else {
        // window.location.reload()
        this.$nuxt.$router.go({
          path: this.$nuxt.$router.currentRoute,
          force: true
        })
      }
    })
  }
}
</script>

<style lang="scss">
.container {
  max-width: 100%;
  padding: 0;
}
</style>
