import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      stations: [],
      apiUrl: "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
  },
  mutations: {
      setStations(state, payload) {
          state.stations = payload;
      }
  },
  actions: {
      getBikeStations({state, commit}) {
          let graphql = '{bikeRentalStations {name stationId bikesAvailable lat lon}}';
          let headers = new Headers();
          headers.append('Content-Type', 'application/graphql');

          fetch(state.apiUrl , {
              method: 'POST',
              headers: headers,
              body: graphql
          })
              .then((response) => {
                  return response.json();
              })
              .then((response) => {
                  commit('setStations', response.data.bikeRentalStations);
              })
      }
  },
  modules: {
  }
})
