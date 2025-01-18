<template>
  <div class="dbm-section">
    <a class="dbm-scroll-to" id="services"></a>
    <div class="dbm-section-header">The Services</div>

    <!-- The "Portfolio" video. -->
    <AppVideoCard
      class="dbm-video-production-display"
      src="_nuxt/assets/video-production-preview.mp4"
    />

    <!-- The bread and butter services. -->
    <div class="dbm-video-production-text">
      <div class="dbm-card">
        <div class="dbm-card-title">Video Production</div>
        <p>
          From short-form content for social media and commercial
          advertisements, to long-form content including corporate messaging,
          weddings, films, and documentaries.
        </p>
        <p>
          In addition, we are licensed by the FAA to operate drones—perfect for
          aerial shots for insurance inspections and real estate listings. We
          are also SCUBA certified for underwater photography.
        </p>
      </div>

      <div class="dbm-card">
        <div class="dbm-card-title">Post-Production Editing</div>
        <p>
          We provide standard video editing techniques (trimming, splicing, and
          merging) plus basic visual adjustments such as color grading
          (coordinating brightness, saturation, levels, and contrast across
          scenes).
        </p>
        <p>
          This also includes basic audio editing such as overdubbing music. We
          even offer to transcribe accessible subtitles.
        </p>
      </div>
    </div>

    <div class="dbm-card">
      <div class="dbm-card-title">Social Media Marketing</div>
      <div class="dbm-single-width">
        <p>
          We can help you plan, execute, and distribute content for effective
          engagement on Facebook, Instagram, TikTok, and YouTube.
        </p>
      </div>
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

.dbm-video-production-text {
  column-gap: 0.5rem;
  display: grid;
  margin: 0.5rem 0;
  overflow: hidden;
  row-gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
}

.dbm-pricing {
  max-width: 640px;
  margin: 0 auto;
}
</style>
