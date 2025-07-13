<script setup>
// import { VueLenis, useLenis } from 'lenis/vue'
// const lenisOptions = {


//   // easing: function (x) {
//   //   return Math.sin((x * Math.PI) / 2);
//   // }
// }

// const lenis = useLenis((lenis) => {
//   // called every scroll
//   console.log(lenis)
// })

// watch(
//   lenis,
//   (lenis) => {
//     // lenis instance
//     console.log(lenis)
//   },
//   { immediate: true }
// )
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <VueLenis root :options="lenisOptions" /> -->
    <NuxtPage />
  </div>
</template>
