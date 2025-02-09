<template>
  <div class="dbm-page">
    <div class="dbm-section">
      <a class="dbm-scroll-to" id="services"></a>
      <div class="dbm-section-header">The Services</div>

      <!-- The "Portfolio" video. -->
      <AppVideoCard class="dbm-video-production-display">
        <source src="~/assets/video-production-preview.mp4" type="video/mp4" />
      </AppVideoCard>

      <!-- The bread and butter services. -->
      <!-- Organized as: production, post-production, distribution. -->
      <div class="dbm-production-cards">
        <div class="dbm-card">
          <div class="dbm-card-title">Video Production</div>
          <p>
            From short-form content for social media and commercial
            advertisements, to long-form content including corporate messaging,
            weddings, films, and documentaries.
          </p>
          <p>
            In addition, we are licensed by the FAA to operate drones—perfect
            for aerial shots for insurance inspections and real estate listings.
            We are also SCUBA certified for underwater photography.
          </p>
        </div>

        <div class="dbm-card">
          <div class="dbm-card-title">Post-Production Editing</div>
          <p>
            We provide standard video editing techniques (trimming, splicing,
            and merging) plus basic visual adjustments such as color grading
            (coordinating brightness, saturation, levels, and contrast across
            scenes).
          </p>
          <p>
            This also includes basic audio editing such as overdubbing music. We
            even offer to transcribe accessible subtitles.
          </p>
        </div>

        <div class="dbm-card">
          <div class="dbm-card-title">Social Media Marketing</div>
          <div class="dbm-single-width">
            <p>
              We can help you plan, execute, and distribute content for
              effective engagement on Facebook, Instagram, TikTok, and YouTube.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="dbm-section">
      <a class="dbm-scroll-to" id="rentals"></a>
      <div class="dbm-section-header">The Rentals</div>
      <div class="dbm-rental-cards">
        <div class="dbm-image-card">
          <div class="dbm-image-card-display studio"></div>
          <div class="dbm-image-card-text">
            <div class="dbm-card-title">The Studio - COMING SOON!</div>
            <p>
              Located in Spokane, Washington, our professional recording
              space will be ready for post-production ADR with high-quality audio
              equipment.
            </p>
            <p>
              The space and equipment will also be available to rent to create your
              own music or voice-over tracks.
            </p>
          </div>
        </div>

        <div class="dbm-image-card">
          <div class="dbm-image-card-display camera"></div>
          <div class="dbm-image-card-text">
            <div class="dbm-card-title">DJI Ronin 4D</div>
            <p>
              Our premier camera, the stabilizing z-axis gimbal creates
              extremely smooth shots for quicker <em>and</em> more robust
              handheld recording—all in 8K.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="dbm-section">
      <div class="dbm-section-header">The Pricing</div>
      <div class="dbm-single-width">
        <div>
          We offer flexible pricing options to meet the needs of almost any
          budget. Contact us for a free consultation—we'll work with you to
          create a tailored quote that suits the needs of your project.
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-production-cards,
.dbm-rental-cards {
  column-gap: 0.5rem;
  display: grid;
  row-gap: 0.5rem;

  @media (min-width: 640px) {
    grid-template-columns: 1fr 1fr;

    /* NOTE(vika): If the last grid item is by itself. */
    > :last-child:nth-child(odd) {
      grid-column-end: 3;
      grid-column-start: 1;
    }
  }
}

.dbm-production-cards {
  margin-top: 0.5rem;
}

.dbm-image-card-display.studio {
  background-image: url("assets/studio-preview.jpg");
}

.dbm-image-card-display.camera {
  background-image: url("assets/camera-preview.jpg");
}
</style>
