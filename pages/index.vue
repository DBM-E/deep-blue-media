<template>
  <div class="dbm-section">
    <a class="dbm-scroll-to" id="services"></a>
    <div class="dbm-section-header">The Services</div>
    <ServiceSplashCard />
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
        budget. Contact us to schedule a free consultation—we'll work with you
        to assess the needs of your project and provide a tailored quote.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const serviceData = [
  {
    title: "Video Editing",
    description:
      "Trimming, splicing, merging clips. Color grading. Mixing audio. Subtitles. ",
  },
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

.dbm-pricing {
  max-width: 640px;
  margin: 0 auto;
}
</style>
