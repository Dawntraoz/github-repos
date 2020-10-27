<template>
  <div class="container">
    <header class="pt-4">
      <h2 class="font-bold text-lg md:text-2xl">
        Github Repositories
      </h2>
    </header>
    <div v-if="repos && repos.length > 0" class="flex flex-wrap pt-4 md:-mr-6">
      <div
        v-for="repo in repos"
        :key="repo.id"
        class="w-full md:w-1/2 lg:w-1/3 md:pr-6 pb-4"
      >
        <GithubReposItem
          :repository="repo"
          :bg-color="repo.language ? colors[repo.language].color : '#ffffff'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import GithubReposItem from "./GithubReposItem.vue";

export default {
  name: "GithubRepos",
  data() {
    return {
      repos: [],
      colors: {}
    };
  },
  methods: {
    getColors() {
      axios
        .get(
          "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
        )
        .then(res => (this.colors = res.data));
    },
    getRepos() {
      axios.get("https://api.github.com/users/dawntraoz/repos").then(res => {
        this.repos = res.data
          .filter(repo => !repo.fork)
          .sort(
            (repo1, repo2) => repo2.stargazers_count - repo1.stargazers_count
          )
          .slice(0, 6);
      });
    }
  },
  async mounted() {
    await this.getColors();
    this.getRepos();
  },
  components: {
    GithubReposItem
  }
};
</script>
