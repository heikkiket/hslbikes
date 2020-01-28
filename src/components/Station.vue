<template lang="html">
    <div class="row">
        <div class="col col-6">{{station.name}} </div><div class="col"><button @click="hideshow()" id="hideshow">Näytä kartalla</button></div><div class="col">{{station.bikesAvailable}}</div>
        <div class="col-12" v-show="mapToggled">
            <div v-bind:id="dynId" class="map"></div>
        </div>
    </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
export default {
    name: 'Station',
    props: {
        station: {
            type: Object,
            required: true
        },
    },
    data () {
        return {
            mapToggled: false,
            map: null
        }
    },
    methods: {
        hideshow() {
            this.mapToggled = !this.mapToggled;
            this.map = L.map(this.dynId).setView([this.station.lat, this.station.lon], 13);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
            }).addTo(this.map);
            L.marker([this.station.lat, this.station.lon]).addTo(this.map);

            //HACK to get map loading work
            this.map.mapObject._onResize();
        }
    },
    watch: {
    },
    computed: {
        dynId() {
            return "map-" + this.station.stationId;
        }
    }
}
</script>

<style>
 #hideshow {
     font-size: 0.6em;
     height: 1.2rem;
 }

 .map{
     height: 250px;
     width: 400px;
 }
</style>
