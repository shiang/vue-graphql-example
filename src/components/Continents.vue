<template>
  <div>
    <div v-if="$apollo.loading">
      Loading...
    </div>
    <div v-if="continents">
      <pre>{{ JSON.stringify(continents, null, 2) }}</pre>
      <div v-for="continent in continents" :key="continent.code">
        <div>
          Code:
          <span>{{ continent.code }}</span>
        </div>
        <div>
          Name:
          <span>{{ continent.Name }}</span>
        </div>
        <div v-for="country in continent.countries" :key="country.code">
          <div>
            Code:
            <span>{{ country.code }}</span>
          </div>
          <div>
            Name: <span>{{ country.name }}</span>
          </div>
          <div>
            Emoji: <span>{{ country.emoji }}</span>
          </div>
        </div>
      </div>
    </div>
    <button type="button" @click="fetchContinents">
      Fetch Continents
    </button>
  </div>
</template>

<script>
import { QUERY_CONTINENTS } from '../graphql/queries'

export default {
  name: 'Continents',
  data() {
    return {
      continents: null
    }
  },
  apollo: {
    continents: QUERY_CONTINENTS
  },
  methods: {
    fetchContinents: async function() {
      const { data, loading } = await this.$apollo.queries.continents.refetch()
      if (data && !loading) {
        this.continents = [data.continents[0]]
      }
    }
  }
}
</script>

<style>
body {
  font-family: 'Roboto', sans-serif;
}
h1 {
  text-align: center;
}
</style>
