<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <GoogleMap :api-key="API_KEY" style="width: 100%; height: 100vh" :center="center" :zoom="5">
          <Marker :options="markerOptions" />
        </GoogleMap>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'
import { getGuns } from '../services/guns'

const API_KEY = 'AIzaSyCPEPpl0BfIcEn2TqJkpGFUrosQ6cfHHMY'
//const API_KEY = import.meta.env.MAPS_API_KEY

const center = ref({ lat: 40, lng: -100 })
const markerOptions = ref({ position: center, label: 'L', title: 'LADY LIBERTY' })

onMounted(() => {
  const guns = getGuns()
  console.log('PEDROOO', guns)
})
</script>

<style lang="scss" scoped></style>
