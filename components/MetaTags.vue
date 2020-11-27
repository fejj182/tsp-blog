<template>
  <div />
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },

  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: this.blok.metaTitle._uid,
          name: 'description',
          content: this.blok.metaTitle.description
        },
        { hid: 'og:title', property: 'og:title', content: this.blok.ogTitle },
        { hid: 'og:description', property: 'og:description', content: this.blok.ogDescription },
        { hid: 'og:image', property: 'og:image', content: this.blok.ogImage },
        { hid: 'og:type', property: 'og:type', content: 'article' }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
