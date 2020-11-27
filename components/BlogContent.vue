<template>
  <div id="blog-content" v-editable="blok">
    <div class="blog-post-header__text">
      <h3 v-if="blok.title">
        {{ blok.title }}
      </h3>

      <p v-for="(paragraph, index) in paragraphs" :key="index">
        {{ paragraph }}
      </p>

      <v-card v-if="blok.graphic">
        <v-img :src="blok.graphic" contain />
      </v-card>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      paragraphs: []
    }
  },
  created () {
    this.paragraphs = this.blok.content
      .split('\n')
      .filter(paragraph => paragraph !== '')
  }
}
</script>

<style lang="scss">
#blog-content {
  padding: 1rem 4rem;
  h3 {
    margin-bottom: 2rem;
    font-size: 24px;
    font-weight: 600;
  }
  p {
    font-size: 20px;
  }
  .v-card {
    width: 32.5%;
    margin: 3rem auto 1rem;
  }
}

@media screen and (max-width: 992px) {
  #blog-content {
    padding: 1rem 2rem;
    p {
      font-size: 18px;
    }
    .v-card {
      width: 50%;
      margin: 2rem auto 0;
    }
  }
}

@media screen and (max-width: 600px) {
  #blog-content {
    h3 {
      font-size: 20px;
    }
    p {
      font-size: 16px;
    }
    .v-card {
      width: 95%;
      margin: 2rem auto 0;
    }
  }
}
</style>
