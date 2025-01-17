<template>
  <div class="dbm-profile-card">
    <div class="dbm-profile-card-image"></div>
    <div class="dbm-profile-card-text">
      <div class="dbm-profile-card-title">{{ props.title }}</div>
      <p class="dbm-profile-card-description">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src?: string | null;
  title: string;
  description: string;
}>();
</script>

<style lang="scss" scoped>
$dbm-profile-image-size: 8rem;
$dbm-profile-image-spacing: calc($dbm-profile-image-size / 2);

.dbm-profile-card {
  background: var(--app-card-color);
  border: 1px solid var(--app-card-border-color);
  border-radius: var(--app-border-radius);
  margin-top: $dbm-profile-image-spacing;
  position: relative;
}

.dbm-profile-card-image {
  background: red;
  border-radius: var(--app-border-radius);
  height: $dbm-profile-image-size;
  left: calc(50% - $dbm-profile-image-spacing);
  position: absolute;
  top: -$dbm-profile-image-spacing;
  width: $dbm-profile-image-size;
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
