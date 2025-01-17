<template>
  <div class="dbm-app-card">
    <div class="dbm-app-card-image"></div>
    <div class="dbm-app-card-text">
      <div class="dbm-app-card-title">{{ props.title }}</div>
      <div v-if="props.tagline" class="dbm-card-tagline">
        {{ props.tagline }}
      </div>
      <p class="dbm-app-card-description">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  src?: string | null;
  title: string;
  tagline?: string | null;
  description: string;
}>();
</script>

<style lang="scss" scoped>
.dbm-app-card {
  display: flex;
  flex-direction: row;
}

.dbm-app-card-image {
  background: var(--app-image-placeholder-color);
  border-radius: var(--app-border-radius);
  flex-shrink: 0;
  margin: 0 auto;
  height: 8rem;
  width: 8rem;

  @media (max-width: 600px) {
    height: 6rem;
    width: 6rem;
  }
}

.dbm-app-card-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 0 0 0 0.75rem;
}

.dbm-app-card-title {
  font: 1.5rem/1 "Vollkorn SC", serif;
}
</style>
