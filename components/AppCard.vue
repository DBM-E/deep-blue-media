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
  background: var(--app-card-color);
  border: 1px solid var(--app-card-border-color);
  border-radius: var(--app-border-radius);
  overflow: hidden;
}

.dbm-app-card-image {
  background: var(--app-image-placeholder-color);
  flex-shrink: 0;
  height: 8rem;
  width: 100%;
}

.dbm-app-card-text {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  padding: 0.75rem 1rem;
}

.dbm-app-card-title {
  font: 1.5rem/1 "Vollkorn", serif;
  padding: 0.5rem 0;
  text-align: center;
}
</style>
