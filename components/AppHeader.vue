<template>
  <div class="dbm-sticky-header">
    <div class="dbm-header-card">
      <a class="dbm-header-link" href="/"></a>
      <div class="dbm-header-text">
        <div class="dbm-header-title">Deep Blue Media</div>
        <div class="dbm-header-subtitle">Video Production Company</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-sticky-header {
  background: var(--app-card-color);
  border-bottom: 1px solid #345;
  position: sticky;
  top: 0;
  z-index: 100;
}

.dbm-header-card {
  max-width: var(--app-max-width);
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 600px) {
    padding: 1rem 0;
  }
}

.dbm-header-link {
  position: absolute;
  top: 0;
  height: 100%;
  left: 0;
  width: 100%;
}

.dbm-header-text {
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 600px) {
    padding: 0 1rem;
  }
}

.dbm-header-title {
  font: 400 3.5rem/1 "Vollkorn SC", serif;
  letter-spacing: 0;

  @media (max-width: 600px) {
    font-size: 2rem;
  }
}

.dbm-header-subtitle {
  font: 400 1.5rem/1 "Vollkorn", serif;
  margin-top: 0.25rem;

  @media (max-width: 600px) {
    font-size: 1.125rem;
  }
}
</style>
