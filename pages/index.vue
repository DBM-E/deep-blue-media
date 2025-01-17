<template>
  <AppVideoCard :src="splashData.src" :title="splashData.title" />

  <div class="dbm-service-cards">
    <AppCard
      class="dbm-service-card"
      v-for="item in serviceData"
      :title="item.title"
      :description="item.description"
    />
  </div>

  <div class="dbm-card">
    <div class="dbm-card-header">About Us</div>
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

  <div class="dbm-profiles">
    <AppCard
      class="dbm-profile-card"
      v-for="item in profileData"
      :title="item.title"
      :tagline="item.tagline"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
const splashData = {
  title: "Video Production",
  src: "_nuxt/assets/video-production-preview.mp4",
};

const serviceData = [
  {
    title: "Photography",
    description: "Wedding photo shoots, Scuba certified",
  },
  { title: "Video Production", description: "Real estate, wedding, corporate" },
  { title: "Equipment Rental", description: "Cameras and drones" },
  { title: "Studio Recordings", description: "In a studio" },
  {
    title: "Video Editing",
    description:
      "Short form (e.g. social media) and long form (e.g. documentaries)",
  },
];

const profileData = [
  {
    title: "Evan",
    tagline: "Employee",
    description:
      "You should talk about your unique skills and qualifications here.",
  },
  {
    title: "Chris",
    tagline: "Employee",
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

.dbm-card-header {
  font: 400 1.5rem/1 "Vollkorn", san-serif;
  text-align: center;
}

.dbm-profiles {
  display: grid;

  margin-top: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 601px) {
    column-gap: 0.5rem;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
