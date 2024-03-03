<template>
  <h1>Hello App!</h1>
  <p>
    <router-link to="/">Go to Home</router-link>
  </p>
  <p>
    <v-btn to="/googleMap">Go to Abou</v-btn>
  </p>

  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
