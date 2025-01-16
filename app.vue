<template>
  <AppHeader />
  <div class="dbm-page-content">
    <NuxtPage />
  </div>
  <AppFooter />
</template>

<style lang="scss" scoped>
.dbm-page-content {
  flex-grow: 1;
  max-width: var(--app-max-width);
  margin: 0 auto;
}
</style>
