<template lang="html">
    <div id="app">
        <h1>HSL pyörämäärät</h1>
        <p>
            <small>Heikki Ketoharju 2020</small>
        </p>
        <nav>
            <ul class="nav nav-tabs justify-content-center">
                <li class="nav-item">
                    <a class="nav-link" :class="{active:tab=='stations'}" @click="showTab('stations')">Asemat</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" :class="{active:tab=='weather'}" @click="showTab('weather')">Sää</a>
                </li>
            </ul>
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
            tab: 'stations',
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
 nav {
     margin: 0 auto 2rem auto;
     text-align: center;
 }

</style>
