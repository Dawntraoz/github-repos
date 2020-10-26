import { shallowMount } from "@vue/test-utils";
import App from "@/App.vue";

describe("App.vue", () => {
  it("should render and have darkMode boolean set to false", () => {
    const wrapper = shallowMount(App, {
      stubs: {
        GithubRepos: true
      }
    });
    expect(wrapper.darkMode).toBeFalsy();
  });
});
