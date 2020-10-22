<template>
  <div>
    <div
      v-editable="blok"
      class="blog-post-header__content"
      :style="blogPostHeaderStyle"
    >
      <h1>
        {{ blok.title }}
      </h1>

      <Carousel :stories="stories" />
    </div>
  </div>
</template>

<script>
import { getImageMetaData } from '../utils/image'
import Carousel from './Carousel'

export default {
  components: {
    Carousel
  },
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      stories: []
    }
  },
  computed: {
    blogPostHeaderStyle () {
      if (this.blok.image) {
        const { url } = getImageMetaData(this.blok.image)

        return {
          'background-image': `url(https:${url})`
        }
      }

      return {}
    }
  },
  created () {
    const stories = this.blok.stories.split('\n').filter(story => story !== '')
    stories.forEach((slug) => {
      this.getStory(slug)
    })
  },
  methods: {
    getStory (slug) {
      this.$storyapi
        .get('cdn/stories/' + slug, {
          version: 'published'
        })
        .then((response) => {
          this.stories.push(response.data.story)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post-header__content {
  position: relative;
  width: 100%;
  height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-origin: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  h1 {
    color: white;
    text-align: center;
    padding-top: 2rem;
    font-size: 52px;
  }
}

@media only screen and (max-width: 600px) {
  .blog-post-header__content {
    height: calc(100vh - 56px);
    height: calc(var(--vh, 1vh) * 100 - 56px);

    h1 {
      font-size: 40px;
    }
  }
}
</style>
