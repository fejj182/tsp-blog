<template>
  <div id="blog-header">
    <div
      v-editable="blok"
      class="blog-post-header__content"
      :style="blogPostHeaderStyle"
      role="img"
      :aria-label="blok.image.alt"
    >
      <div class="blog-post-header__text">
        <h1>
          {{ blok.title }}
        </h1>

        <div class="blog-post-header__text__divisor" />

        <h2>
          {{ blok.summary }}
        </h2>

        <div
          v-if="blok.author && blok.published"
          class="blog-post-header__published"
        >
          <span class="blog-post-header__author published-item">
            <v-icon>mdi-account-circle</v-icon>
            <p>{{ blok.author }}</p>
          </span>

          <p class="published-item">
            {{ publishedDate }}
          </p>

          <p class="published-item">
            <v-icon>mdi-clock-outline</v-icon>{{ blok.readingTime }} mins
          </p>
        </div>
      </div>
    </div>
    <img
      v-if="!blok.arrowHidden"
      class="arrow-down-icon"
      src="../assets/arrow-down-icon.svg"
      alt="Icon of a arrow down"
    >
  </div>
</template>

<script>
import { getImageMetaData } from '../utils/image'

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  computed: {
    blogPostHeaderStyle () {
      if (this.blok.image) {
        const { url } = getImageMetaData(this.blok.image.filename)

        return {
          'background-image': `url(https:${url})`
        }
      }

      return {}
    },
    publishedDate () {
      return this.blok.published.substring(0, 10)
    }
  }
}
</script>

<style lang="scss">
#blog-header {
  .arrow-down-icon {
    display: block;
    margin: 0 auto;
    transform: translateY(-50%);
  }
  .blog-post-header__content {
    position: relative;
    width: 100%;
    min-height: 60vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-origin: top;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .blog-post-header__text {
      margin-top: -5%;
      padding: 1rem;
      background: rgba(192, 192, 192, 0.625);
      color: #fff;
      text-align: center;
      h1 {
        font-size: 70px;
      }

      h2,
      i {
        font-size: 28px;
      }

      .published-item {
        margin: 0 1.5rem;
      }

      p {
        font-size: 18px;
        display: inline;
      }
      i {
        margin-right: 0.5rem;
        color: white;
      }

      .blog-post-header__published {
        display: flex;
        justify-content: space-around;
        padding: 0.5rem 0;
        padding-top: 1rem;
        max-width: 500px;
        margin: 0 auto;
      }

      .blog-post-header__text__divisor {
        margin: 1.5rem auto;
        width: 40%;
        height: 2px;
        background-color: #fff;
      }
    }
  }
}

@media screen and (max-width: 992px) {
  #blog-header {
    .blog-post-header__content {
      .blog-post-header__text {
        margin-top: -10vh;
        padding: 0.5rem;
        h1 {
          font-size: 32px;
          font-weight: 600;
        }
        h2,
        i {
          font-size: 22px;
          margin-right: 0.25rem;
        }
        p {
          font-size: 16px;
        }
        .published-item {
          margin: 0.25rem;
        }
      }
    }
  }
}

@media screen and (max-width: 600px) {
  #blog-header {
    .blog-post-header__content {
      .blog-post-header__text {
        width: 100%;
      }
    }
  }
}
</style>
