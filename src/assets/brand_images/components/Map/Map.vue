<!-- <template>
  <ol-map
    :loadTilesWhileAnimating="true"
    :loadTilesWhileInteracting="true"
    style="height: 400px"
    ref="map"
  >
    <ol-view
      ref="view"
      :center="center"
      :rotation="rotation"
      :zoom="zoom"
      :projection="projection"
    />

    <ol-tile-layer>
      <ol-source-osm />
    </ol-tile-layer>

    <ol-geolocation :projection="projection" @change:position="geoLocChange">
      <template>
        <ol-vector-layer :zIndex="2">
          <ol-source-vector>
            <ol-feature ref="positionFeature">
              <ol-geom-point :coordinates="position"></ol-geom-point>
              <ol-style>
                <ol-style-icon :src="hereIcon" :scale="0.1"></ol-style-icon>
              </ol-style>
            </ol-feature>
          </ol-source-vector>
        </ol-vector-layer>
      </template>
    </ol-geolocation>
  </ol-map>
</template>

<script setup lang="ts">
import hereIcon from "@/assets/here.png";
import { ref } from "vue";
import type { View } from "ol";
import type { ObjectEvent } from "ol/Object";

const center = ref([40, 40]);
const projection = ref("EPSG:4326");
const zoom = ref(12);
const rotation = ref(0);
const view = ref<View>();
const map = ref(null);
const position = ref([]);

const geoLocChange = (event: ObjectEvent) => {
  console.log("AAAAA", event);
  position.value = event.target.getPosition();
  view.value?.setCenter(event.target?.getPosition());
};
</script> -->
<template>
  <div>
    <div class="map-title"></div>
    <div id="map" style="height: 400px; width: 100%"></div>
  </div>
</template>

<script>
export default {
  name: "MapView",
  props: {
    latitude: { type: Number, default: 0 },
    longitude: { type: Number, default: 0 },
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const myLatLng = { lat: this.latitude, lng: this.longitude };
      const map = new google.maps.Map(document.getElementById("map"), {
        center: myLatLng,
        zoom: 20,
      });

      new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: "Hello World!",
      });
    },
  },
};
</script>

<style>
.map-title {
  text-align: center;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
}
</style>
