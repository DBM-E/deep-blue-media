<template>
  <div class="dbm-service-splash-card">
    <AppVideoCard src="_nuxt/assets/video-production-preview.mp4" />
    <div class="dbm-service-splash-text">
      <div class="dbm-service-splash-title">Video Production</div>
      <div class="dbm-service-splash-description">
        <p>
          From short-form content for social media, to long-form content
          including weddings, documentaries, and corporate messaging.
        </p>
        <p>
          In addition, we are licensed by the FAA to operate drones—perfect for
          aerial shots for real estate listings and insurance inspections. We
          are also SCUBA certified for underwater photography.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-service-splash-card {
  background: var(--app-card-color);
  border-radius: var(--app-border-radius);
  overflow: hidden;
}

.dbm-service-splash-text {
  border: 2px solid var(--app-card-border-color);
  border-radius: 0 0 var(--app-border-radius) var(--app-border-radius);
  border-top: 0;
  padding: 1rem 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
}

.dbm-service-splash-title {
  font: 500 1.5rem/1 "Vollkorn", san-serif;
  padding: 0.5rem 0;
  text-align: center;
}

.dbm-service-splash-description {
  margin: 0 auto;
  max-width: 640px;
}
</style>
