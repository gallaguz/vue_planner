<template>
  <nav class="grey darken-2">
    <div class="nav-wrapper">
      <router-link
          to="/"
          class="left brand-logo"
      >
        <a href="#">Tasks</a>
      </router-link>
      <ul class="right">
        <router-link
            tag="li"
            to="/"
            exact
            active-class="active"
        >
          <a href="#">Create</a>
        </router-link>
        <router-link
            tag="li"
            to="/list"
            active-class="active"
        >
          <a href="#">List</a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="sass" scoped>
nav
  padding: 0 2rem
</style>
