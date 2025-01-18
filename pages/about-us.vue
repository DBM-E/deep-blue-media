<template>
  <div class="dbm-section">
    <div class="dbm-section-header">The Company</div>
    <div class="dbm-single-width">
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
const profileData = [
  {
    title: "Evan",
    description:
      "You should talk about your unique skills and qualifications here.",
  },
  {
    title: "Chris",
    description:
      "You should talk about your unique skills and qualifications here. Licensed pilot, certified scuba diver, and other skills that enhance your ability to deliver these services.",
  },
];
</script>

<style lang="scss" scoped>
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
