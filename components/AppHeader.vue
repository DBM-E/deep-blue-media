<template>
  <div class="dbm-sticky-header">
    <div class="dbm-header-card">
      <NuxtLink class="dbm-header-link" to="/"></NuxtLink>
      <div class="dbm-header-text">
        <div class="dbm-header-title">Deep Blue Media</div>
        <div class="dbm-header-subtitle">Media Production Company</div>
      </div>
    </div>

    <div class="dbm-nav-card">
      <div class="dbm-nav-links">
        <NuxtLink class="dbm-nav-link" to="/services">Services</NuxtLink>
        <NuxtLink class="dbm-nav-link" to="/rentals">Rentals</NuxtLink>
        <NuxtLink class="dbm-nav-link" to="/about">About</NuxtLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-sticky-header {
  background: var(--app-card-color);
  position: sticky;
  top: 0;
  z-index: 100;
}

.dbm-header-card {
  max-width: var(--app-max-width);
  margin: 0 auto;
  padding: 2rem 0;
  position: relative;

  @media (max-width: 639px) {
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

  @media (max-width: 639px) {
    padding: 0 1rem;
  }
}

.dbm-header-title {
  font: 400 3.5rem/1 "Vollkorn SC", serif;
  letter-spacing: 0;

  @media (max-width: 639px) {
    font-size: 2rem;
  }
}

.dbm-header-subtitle {
  font: 400 1.5rem/1 "Vollkorn", serif;
  margin-top: 0.25rem;

  @media (max-width: 639px) {
    font-size: 1.125rem;
  }
}

.dbm-nav-card {
  border-bottom: 2px solid var(--app-card-border-color);
  border-top: 2px solid var(--app-card-border-color);
}

.dbm-nav-links {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  max-width: var(--app-max-width);

  @media (min-width: 640px) {
    padding: 0 2rem;
  }
}

.dbm-nav-link {
  color: white;
  flex-grow: 1;
  font: 700 1rem/1.6 "Lato", sans-serif;
  letter-spacing: 0.75px;
  padding: 0.75rem;
  text-align: center;
  text-decoration: none;
  transition-duration: 0.4s;
  width: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.0625);
  }

  @media (min-width: 640px) {
    padding: 1rem;
  }
}
</style>
