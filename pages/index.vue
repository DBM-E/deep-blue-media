<template>
  <div class="dbm-section">
    <a class="dbm-scroll-to" id="services"></a>
    <div class="dbm-section-header">The Services</div>

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
              for aerial shots for insurance inspections and real estate
              listings. We are also SCUBA certified for underwater photography.
            </p>
          </div>
        </div>

        <div class="dbm-video-production-section">
          <div class="dbm-video-production-title">Video Editing</div>
          <div class="dbm-video-production-description">
            <p>
              We provide standard editing from trimming, splicing and merging to
              color grading. We can also do basic audio enhancements with music
              and subtitles.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="dbm-services">
      <AppCard
        class="dbm-service-card"
        v-for="item in serviceData"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>

  <div class="dbm-section">
    <a class="dbm-scroll-to" id="pricing"></a>
    <div class="dbm-section-header">The Pricing</div>
    <div class="dbm-pricing">
      <p>
        We offer flexible pricing options to meet the needs of almost any
        budget. Contact us for a free consultation—we'll work with you to create
        a tailored quote that suits the needs of your project.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const serviceData = [
  {
    title: "Marketing",
    description:
      "Trimming, splicing, merging clips. Color grading. Mixing audio. Subtitles. ",
  },
  { title: "Studio Recordings", description: "In a studio" },
  { title: "Equipment Rental", description: "DJI Ronin 4D. Drones." },
];
</script>

<style lang="scss" scoped>
.dbm-services {
  column-gap: 0.5rem;
  display: grid;
  row-gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 601px) and (max-width: 1023px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
}
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

.dbm-pricing {
  max-width: 640px;
  margin: 0 auto;
}
</style>
