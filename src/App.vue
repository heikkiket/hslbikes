<template>
  <div id="app">
      <h1>HSL pyörämäärät</h1>
      <p>
          <small>Heikki Ketoharju 2020</small>
      </p>
      <label>
          Suodata aseman nimellä:
          <input type="text" @input="updateFilter" />
      </label>
      <div id="wrapper">
          <div class="row"><div class="col col-6">Aseman nimi</div><div class="col">Näytä</div><div class="col">Pyöriä saatavilla</div></div>
          <Station v-bind:key="station.stationId" v-for="station in stations" :station="station" />
      </div>
  </div>
</template>

<script>
import Station from './components/Station.vue'
import debounce from 'debounce'
import 'leaflet/dist/leaflet.css'

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

 #wrapper {
     max-width: 600px;
     margin: 0 auto;
 }

 .col {
     border: 1px solid black;
 }


 label, input {
     margin: 0.5rem;
 }

 th {
     font-weight: bold;
 }

</style>
