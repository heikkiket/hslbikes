<template>
  <div id="app">
      <h1>HSL pyörämäärät</h1>
      <label>
          Suodata aseman nimellä:
          <input type="text" @input="updateFilter" />
      </label>
      <table>
        <thead><tr><th>Aseman nimi</th><th>Pyöriä saatavilla</th></tr></thead>
        <tbody>
            <Station v-bind:key="station.stationId" v-for="station in stations" :station="station" />
        </tbody>
    </table>
  </div>
</template>

<script>
import Station from './components/Station.vue'
import debounce from 'debounce'

export default {
    name: 'app',
    components: {
        Station
    },
    data() {
        return {
            keyword: ''
        }
    },
    mounted() {
        this.$store.dispatch('getBikeStations');
    },
    computed: {
        stations() {
            if(this.keyword == '') {
                return this.$store.state.stations;
            } else {
                return this.$store.state.stations.filter((station) => {
                    if(station.name.toLowerCase().search(this.keyword.toLowerCase()) === -1) {
                        return false;
                    }
                    return true;
                });
            }
        }
    },
    methods: {
        // Wait 250 milliseconds until updating the search key
        updateFilter: debounce(function(e) {
            this.keyword = e.target.value;
            }, 250),
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
     border-collapse: collapse;
 }

 label, input {
     margin: 0.5rem;
 }

 th {
     font-weight: bold;
 }

</style>
