<template lang="html">
    <div id="app">
        <h1>HSL pyörämäärät</h1>
        <p>
            <small>Heikki Ketoharju 2020</small>
        </p>
        <nav>
            <button @click="showTab('stations')">Asemat</button>
            <button @click="showTab('weather')">Sää</button>
        </nav>
        <Stations v-show="curTab('stations')"></Stations>
        <Weather v-show="curTab('weather')"></Weather>
    </div>
</template>

<script>
import Stations from './Stations.vue'
import Weather from './components/Weather.vue'
export default {
    name: 'app',
    components: {
        Stations,
        Weather
    },
    props: {
    },
    data () {
        return {
            tab: 'stations'
        }
    },
    watch: {
    },
    computed: {
    },
    methods: {
        showTab(tab) {
            this.tab = tab;
        },
        curTab(tab) {
            if (tab === this.tab) {
                return true;
            }
            return false;
        }
    }
}
</script>

<style scoped>

</style>
