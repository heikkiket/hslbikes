<template lang="html">
    <div>
        <h2>Sää {{weather.name}}ssä päin:</h2>
        <span class="temperature"><img v-bind:src="iconUrl">{{weather.main.temp}} &deg;C</span>
        <p class="weatherdesc">
            {{weather.weather[0].main}}
        </p>
        <p class="temphi-lo">Päivän ylin: {{weather.main.temp_max}}<br/>
        Yön alin: {{weather.main.temp_min}}</p>
        <p class="sunrise-sunset">Aurinko nousee: {{sunrise}}<br>
            Aurinko laskee: {{sunset}}</p>
        <p class="wind">Tuulen nopeus: {{weather.wind.speed}} m/s</p>
    </div>
</template>

<script>
export default {
    name: 'Weather',
    props: {
    },
    data () {
        return {
            apiUrl: 'https://api.openweathermap.org/data/2.5/weather',
            apikey: 'e7131e991d976c29f02e4d55d78ddc32',
            city: 'Helsinki',
            weather: null
        }
    },
    mounted() {
        this.getWeather();
    },
    watch: {
    },
    computed: {
        iconUrl() {
            return "http://openweathermap.org/img/wn/" + this.weather.weather[0].icon + "@2x.png"
        },
        sunset() {
            let dateObj = new Date(this.weather.sys.sunset * 1000);
            let UTCstring = dateObj.toUTCString();
            return UTCstring;
        },
        sunrise() {
            let dateObj = new Date(this.weather.sys.sunrise * 1000);
            let UTCstring = dateObj.toUTCString();
            return UTCstring;
        }
    },
    methods: {
        getWeather() {
            let keyPart = 'APPID=' + this.apikey;
            let cityPart = '&q=' + this.city;
            let unitsPart = '&units=metric';
            let reqUrl = this.apiUrl + '?' + keyPart + cityPart + unitsPart;
            console.log(reqUrl);
            fetch(reqUrl)
                .then((response) => {
                    return response.json();
                })
                .then((json) => {
                    this.weather = json;
                })
        }
    }
}
</script>

<style scoped>

 .temperature {
     font-size: 3rem;
 }

 .weatherdesc {
     font-size: 1.5rem;
 }

 .temphi-lo {
     font-size: 1.2rem;
 }

 .sunrise-sunset {
     font-size: 0.8rem;
 }

 .wind {
     font-size: 1.5rem;
 }
</style>
