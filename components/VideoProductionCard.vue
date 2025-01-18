<template>
  <div class="dbm-video-production-card">
    <AppVideoCard
      class="dbm-video-production-display"
      src="_nuxt/assets/video-production-preview.mp4"
    />
    <div class="dbm-video-production-text">
      <div class="dbm-video-production-section">
        <div class="dbm-video-production-title">Video Production</div>
        <div class="dbm-video-production-description">
          <p>
            From short-form content for social media and commercial
            advertisements, to long-form content including weddings,
            documentaries, and corporate messaging.
          </p>
          <p>
            In addition, we are licensed by the FAA to operate drones—perfect
            for aerial shots for insurance inspections and real estate listings.
            We are also SCUBA certified for underwater photography.
          </p>
        </div>
      </div>

      <div class="dbm-video-production-section">
        <div class="dbm-video-production-title">Video Editing</div>
        <div class="dbm-video-production-description">
          <p>
            Standard editing from trimming, splicing and merging to color
            grading. We can also do basic audio enhancements with music and
            subtitles.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-video-production-card {
  column-gap: 0.5rem;
  display: grid;
  overflow: hidden;
  row-gap: 0.5rem;
}

.dbm-video-production-text {
  column-gap: 0.5rem;
  display: grid;
  overflow: hidden;
  row-gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
}

.dbm-video-production-section {
  background: var(--app-card-color);
  border: 2px solid var(--app-card-border-color);
  border-radius: var(--app-border-radius);
  padding: 1rem;

  @media (min-width: 640px) {
    padding: 1rem 2rem;
  }
}

.dbm-video-production-title {
  font: 500 1.5rem/1 "Vollkorn", san-serif;
  padding: 0.5rem 0;
  text-align: center;
}

.dbm-video-production-description {
  margin: 0 auto;
  max-width: 640px;
}
</style>
