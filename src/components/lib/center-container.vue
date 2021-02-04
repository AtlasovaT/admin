<template>
  <div class="center-container">
    <slot />
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
}
</style>

<script>
export default {
  name: "center-container"
};
</script>
