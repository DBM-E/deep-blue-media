<template>
  <div class="dbm-card">
    <div class="dbm-card-header">Services</div>
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
      v-for="item in profileData"
      :title="item.title"
      :tagline="item.tagline"
      :description="item.description"
    />
  </div>
</template>

<script setup lang="ts">
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
}

.dbm-profiles {
  column-gap: 0.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 0.5rem;
  margin-top: 0.5rem;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
</style>
