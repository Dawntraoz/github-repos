<template>
  <div :class="darkMode ? 'dark-mode' : ''">
    <div
      class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
      <header class="container pt-4 text-right">
        <button
          @click="darkMode = !darkMode"
          class="focus:outline-none pb-1 border-b"
        >
          Toggle to {{ darkMode ? "light" : "dark" }} mode
        </button>
      </header>
      <GithubRepos />
    </div>
  </div>
</template>

<script>
import GithubRepos from "./components/GithubRepos.vue";

export default {
  name: "App",
  data() {
    return {
      darkMode: false
    };
  },
  components: {
    GithubRepos
  }
};
</script>
