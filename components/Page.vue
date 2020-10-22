<template>
  <div v-editable="blok" class="page">
    <component :is="component.component" v-for="component in blok.body" :key="component._uid" :blok="component" />
  </div>
</template>

<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
}
</script>
