<template>
  <AppHeader />
  <div class="dbm-page-content">
    <NuxtPage />
    <div class="dbm-footer">
      <div class="dbm-logo"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-page-content {
  max-width: var(--app-max-width);
  margin: 0 auto;
}

.dbm-logo {
  background: red;
  border-radius: 50%;
  height: 6rem;
  margin: 0 auto;
  width: 6rem;
}
</style>
