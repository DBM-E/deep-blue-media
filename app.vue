<template>
  <div class="app">
    <AppHeader />
    <div class="dbm-page-content">
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Deep Blue Media',
});
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.dbm-page-content {
  flex-grow: 1;
  max-width: var(--app-max-width);
  margin: 0 auto;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
