<template>
  <div class="login-card">
    <h2>Log in to explore our app</h2>
    <div class="login-body">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="text" class="card-text">
        {{ text }}
      </p>
      <slot></slot>
      <div class="d-grid gap-2">
        <button v-for="btn in btns" :key="btn.txt" class="btn" :class="btn.class">
          {{ btn.txt }}
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardComp',
  props: ['title', 'text', 'btns']
}
</script>

<style scoped>
.card {
  border: none;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
}

h2 {
  color: #3a506b;
}

button {
  background-color: #3a506b;
}
</style>