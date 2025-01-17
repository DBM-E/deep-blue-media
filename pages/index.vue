<template>
  <!-- <AppVideoCard :src="splashData.src" :title="splashData.title" /> -->

  <div class="dbm-section">
    <div class="dbm-section-header">The Services</div>
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
    <div class="dbm-section-header">The Company</div>
    <div class="dbm-about-us">
      <p>
        <strong>Deep Blue Media</strong> is a video production company based in
        Spokane, Washington.
      </p>
      <p>
        We specialize in combining our love of adventure with our expertise in
        video production, culminating in content that is exciting to direct and
        extraordinary to experience.
      </p>
      <!-- TODO(vika): Inquire whether there are service limits re: distance. -->
    </div>
  </div>

  <div class="dbm-section">
    <div class="dbm-section-header">The Crew</div>
    <div class="dbm-profiles">
      <ProfileCard
        class="dbm-profile-card"
        v-for="item in profileData"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const splashData = {
  title: "Video Production",
  src: "_nuxt/assets/video-production-preview.mp4",
};

const serviceData = [
  {
    title: "Video Production",
    description: "Filming for social media, documentaries, weddings.",
  },
  {
    title: "Video Editing",
    description:
      "Trimming, splicing, merging clips. Color grading. Mixing audio. Subtitles. ",
  },
  { title: "Studio Recordings", description: "In a studio" },
  { title: "Equipment Rental", description: "DJI Ronin 4D. Drones." },
];

const profileData = [
  {
    title: "Evan",
    description:
      "You should talk about your unique skills and qualifications here.",
  },
  {
    title: "Chris",
    description:
      "You should talk about your unique skills and qualifications here.",
  },
];
</script>

<style lang="scss" scoped>
.dbm-section {
  padding: 0.5rem 2rem;

  @media (max-width: 600px) {
    padding: 0.5rem 1rem;
  }
}

.dbm-section-header {
  font: 400 2rem/1 "Vollkorn SC", san-serif;
  letter-spacing: -0.025em;
  padding: 1rem 0;
  text-align: center;
}

.dbm-services {
  column-gap: 0.5rem;
  display: grid;
  row-gap: 0.5rem;

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

.dbm-about-us {
  max-width: 640px;
  margin: 0 auto;
}

.dbm-profiles {
  column-gap: 0.5rem;
  display: grid;
  row-gap: 1rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 601px) {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
