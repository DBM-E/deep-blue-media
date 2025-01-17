<template>
  <div class="dbm-video-card">
    <div class="dbm-video-link"></div>
    <video class="dbm-video-display">
      <source :src="props.src" type="video/mp4" />
      Hello
    </video>
    <div class="dbm-video-label">{{ props.title }}</div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string;
  title: string;
}>();
</script>

<style lang="scss" scoped>
.dbm-video-card {
  background: black;
  border-radius: var(--app-border-radius);
  height: 480px;
  margin-top: 1rem;
  position: relative;
  overflow: hidden;
}

.dbm-video-display {
  height: 100%;
  margin: 0 auto;
}

.dbm-video-label {
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
  bottom: 0;
  left: 0;
  padding: 4rem 2rem 1rem;
  position: absolute;
  width: 100%;
  z-index: 1;

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
  }
}
</style>
