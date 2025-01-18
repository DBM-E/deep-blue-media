<template>
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
      <div class="dbm-profile-card">
        <div class="dbm-profile-card-image evan"></div>
        <div class="dbm-profile-card-text">
          <div class="dbm-profile-card-title">Evan</div>
          <p class="dbm-profile-card-description">
            You should talk about your unique skills and qualifications here.
          </p>
        </div>
      </div>

      <div class="dbm-profile-card">
        <div class="dbm-profile-card-image chris"></div>
        <div class="dbm-profile-card-text">
          <div class="dbm-profile-card-title">Chris</div>
          <p class="dbm-profile-card-description">
            You should talk about your unique skills and qualifications here.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-about-us {
  margin: -0.5rem auto 0;
  max-width: 640px;
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

$dbm-profile-image-size: 8rem;
$dbm-profile-image-spacing: calc($dbm-profile-image-size / 2);

.dbm-profile-card {
  background: var(--app-card-color);
  border: 2px solid var(--app-card-border-color);
  border-radius: var(--app-border-radius);
  margin-top: $dbm-profile-image-spacing;
  position: relative;
}

.dbm-profile-card-image {
  background: var(--app-image-placeholder-color);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: var(--app-border-radius);
  height: $dbm-profile-image-size;
  left: calc(50% - $dbm-profile-image-spacing);
  position: absolute;
  top: -$dbm-profile-image-spacing;
  width: $dbm-profile-image-size;
}

.dbm-profile-card-image.evan {
  background-image: url("assets/evan-preview.png");
}

.dbm-profile-card-image.chris {
  background-image: url("assets/chris-preview.png");
}

.dbm-profile-card-text {
  padding: $dbm-profile-image-spacing 2rem 1rem;
}

.dbm-profile-card-title {
  font: 1.5rem/1 "Vollkorn", serif;
  padding: 1rem 0 0.5rem;
  text-align: center;
}
</style>
