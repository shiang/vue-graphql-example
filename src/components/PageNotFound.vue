<template>
  <div>
    <h1>Oops!</h1>
    <h2>
      It looks like the
      <template v-if="resource">
        {{ resource }}
      </template>
      you are looking for doesn't exist
    </h2>
    <router-link :to="{ name: 'home' }">
      Go Home
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true
    }
  }
}
</script>
