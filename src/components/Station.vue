<template lang="html">
    <tr>
        <td>{{station.name}}</td><td>{{station.bikesAvailable}}</td>
    </tr>
</template>

<script>
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
        }
    },
    watch: {
    },
    computed: {
    }
}
</script>

<style scoped>

</style>
