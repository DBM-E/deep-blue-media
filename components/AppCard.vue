<template>
  <div class="dbm-card">
    <div class="dbm-card-image"></div>
    <div class="dbm-card-text">
      <div class="dbm-card-title">{{ props.title }}</div>
      <div v-if="props.tagline" class="dbm-card-tagline">
        {{ props.tagline }}
      </div>
      <p class="dbm-card-description">
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
.dbm-card {
  background: var(--app-card-color);
  border-radius: var(--app-border-radius);
  display: flex;
  flex-direction: row;
  padding: 1.5rem 2rem;

  @media (max-width: 600px) {
    padding: 1rem;
  }
}

.dbm-card-image {
  background: red;
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

.dbm-card-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0 0.75rem;
}

.dbm-card-title {
  font: 1.5rem/1 "Vollkorn SC", serif;
}
</style>
