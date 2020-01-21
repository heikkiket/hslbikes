<template>
  <div id="app">
      <h1>HSL pyörämäärät</h1>
      <label>
          Suodata: 
          <input type="text" />
      </label>
      <table>
        <thead><tr><td>Aseman nimi</td><td>Pyöriä saatavilla</td></tr></thead>
        <tbody>
            <Station v-bind:key="station.stationId" v-for="station in stations" :station="station" />
        </tbody>
    </table>
  </div>
</template>

<script>
import Station from './components/Station.vue'

export default {
    name: 'app',
    components: {
        Station
    },
    data() {
        return {
            test: 'foo'
        }
    },
    mounted() {
        this.$store.dispatch('getBikeStations');
    },
    computed: {
        stations() {
            return this.$store.state.stations;
        }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

 table, tr, td {
     border: 1px solid black;
 }

 table {
     margin: 0 auto;
 }

 label, input {
     margin: 0.5rem;
 }

</style>
