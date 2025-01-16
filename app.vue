<template>
  <AppHeader />
  <div class="dbm-page-content">
    <NuxtPage />
    <div class="dbm-footer">
      <div class="dbm-footer-separator"></div>
      <div class="dbm-logo"></div>

      <div class="dbm-contact">
        <div class="dbm-contact-cta">
          <p>Ready to make an inquiry?</p>
          <p>
            Whether you need to capture the perfect moment or craft a compelling
            story, we can help make it happen.
          </p>
        </div>
        <div class="dbm-contact-info">
          <div class="dbm-contact-item">
            <MdiIcon class="dbm-contact-icon" icon="mdiEmail" />
            <div class="dbm-contact-label">chris@deepbluemedia.us</div>
          </div>
          <div class="dbm-contact-item">
            <MdiIcon class="dbm-contact-icon" icon="mdiPhone" />
            <div class="dbm-contact-label">(509)-273-9481</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dbm-page-content {
  max-width: var(--app-max-width);
  margin: 0 auto;
}

$dbm-logo-size: 10rem;
$dbm-logo-spacing: calc($dbm-logo-size / 2);

.dbm-footer {
  background: var(--app-accent-color);
  margin-top: $dbm-logo-spacing;
  position: relative;
}

.dbm-logo {
  background: url("assets/logo.png");
  background-position: center center;
  background-repeat: norepeat;
  background-size: contain;
  border-radius: 50%;
  height: $dbm-logo-size;
  left: calc(50% - $dbm-logo-spacing);
  margin: 0 auto;
  position: absolute;
  top: -$dbm-logo-spacing;
  width: $dbm-logo-size;
}

.dbm-footer-separator {
  border-bottom: 1rem solid white;
  border-top: 0.125rem solid white;
  background: var(--app-accent-color);
  height: 0.25rem;
}

.dbm-contact {
  padding: 0.75rem 2rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
    padding: 0.75rem 1rem;
  }

  @media (min-width: 601px) {
    column-gap: calc($dbm-logo-size + 2rem);
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

.dbm-contact-info {
  @media (min-width: 601px) {
    order: 1;
  }
}

.dbm-contact-item {
  align-items: center;
  display: flex;
  padding: 0.5rem 0;

  @media (min-width: 601px) {
    justify-content: flex-end;
  }
}

.dbm-contact-icon {
  align-items: center;
  border-radius: 50%;
  display: flex;
  flex-shrink: 0;
  height: 1.5rem;
  justify-content: center;
  margin-right: 0.5rem;
  width: 1.5rem;
}
</style>
