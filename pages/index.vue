<template>
  <AppVideoCard :src="splashData.src" :title="splashData.title" />

  <div class="dbm-services">
    <AppCard
      class="dbm-service-card"
      v-for="item in serviceData"
      :title="item.title"
      :description="item.description"
    />
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
  { title: "Video Production", description: "Real estate, wedding, corporate" },
  {
    title: "Video Editing",
    description:
      "Short form (e.g. social media) and long form (e.g. documentaries)",
  },
  { title: "Equipment Rental", description: "Cameras and drones" },
  { title: "Studio Recordings", description: "In a studio" },
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
.dbm-card {
  background: var(--app-card-color);
  padding: 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
}

.dbm-card:not(:first-child) {
  margin-top: 0.5rem;
}

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

.dbm-about-us {
  max-width: 640px;
  margin: 0 auto;
}

.dbm-services,
.dbm-profiles {
  display: grid;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }

  @media (min-width: 601px) {
    column-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
