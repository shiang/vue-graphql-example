<template>
  <div>
    <h1>Hello from Vue</h1>
    <div v-if="$apollo.loading">
      Loading...
    </div>
    <div v-if="!$apollo.loading">
      <pre>{{ JSON.stringify(events, null, 2) }}</pre>
      <div v-for="event in events" :key="event.id">
        <h2>{{ event.name }}</h2>
        <div>
          By:
          <span>{{
            event.owner.first_name + ' ' + event.owner.last_name
          }}</span>
        </div>
        <div>
          Email: <span>{{ event.owner.email }}</span>
        </div>
      </div>
    </div>
    <button type="button" @click="refetchEvents">
      Refetch Events
    </button>
  </div>
</template>

<script>
import { QUERY_EVENTS } from './graphql/queries'

export default {
  name: 'App',
  apollo: {
    events: QUERY_EVENTS
  },
  methods: {
    refetchEvents: function() {
      this.$apollo.queries.events.refetch()
      // console.log(data)
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
