<template>
  <div class="dbm-video-card">
    <video class="dbm-video-display" autoplay loop muted>
      <slot></slot>
    </video>
  </div>
</template>

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
