<template>
  <nav class="navbar-navbar-expand-lg-bg-light">
    <div class="container justify-content-evenly d-flex align-items-center">

      <router-link to="/" class="nav-item">
        <span class="material-icons-outlined">home</span>
      </router-link>

      <router-link to="/products" class="nav-item">
        <span class="material-icons-outlined">storefront</span>
      </router-link>

      <router-link to="/profile" class="nav-link active" aria-current="page">
        <span class="material-icons-outlined">person</span>
      </router-link>

      <router-link to="/login" class="nav-item">
        <span class="material-icons-outlined">
          logout
        </span>
      </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar-navbar-expand-lg-bg-light {
  background-color: #3A506B;
}

.material-icons-outlined {
  color: white;
  font-size: 2.5em;
  padding: 0.3em;
  margin: 0.1em;
}

.nav-item:nth-child(1) {
  float: left;
}
</style>