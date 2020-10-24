<template>
  <v-app id="app">
    <v-app-bar v-show="true" id="header" app color="primary">
      <a href="/">
        <img
          id="logo"
          src="~/assets/Logo-1.png"
          alt="trainspotter-logo"
          @load="onLogoLoad"
        >
        <span> Click to return to home </span>
      </a>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      logoLoaded: false
    }
  },
  computed: {
    isMobile () {
      return window.innerWidth < 600
    }
  },
  methods: {
    onLogoLoad () {
      this.logoLoaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
#app * {
  font-family: "Raleway", sans-serif;
  font-weight: 500;
}

#header {
  a {
    display: inline-block;
    max-width: 66.67%;
  }
}

span {
  display: none;
}

#logo {
  margin-top: 0.5rem;
  width: 70%;
}

@media only screen and (max-width: 600px) {
  #logo {
    width: 95%;
  }
}
</style>
