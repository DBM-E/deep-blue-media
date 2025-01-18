<template>
  <div class="dbm-video-card">
    <video class="dbm-video-display" autoplay loop muted>
      <source :src="props.src" type="video/mp4" />
    </video>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
}>();
</script>

<style lang="scss" scoped>
.dbm-video-card {
  aspect-ratio: 1.9/1;
  background: black;
  width: 100%;
}

.dbm-video-display {
  display: block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
}
</style>
