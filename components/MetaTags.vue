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
          hid: this.blok.ogTitle._uid,
          name: this.blok.ogTitle.title,
          content: this.blok.ogTitle.description
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
