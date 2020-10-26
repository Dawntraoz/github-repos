import { shallowMount } from "@vue/test-utils";
import axios from "axios";
import GithubRepos from "@/components/GithubRepos.vue";

describe("GithubRepos.vue", () => {
  let wrapper = undefined;

  beforeEach(async () => {
    wrapper = await shallowMount(GithubRepos, {
      stubs: {
        GithubReposItem: true
      }
    });
  });

  it("should render and have darkMode boolean set to false", async () => {
    await expect(wrapper.repos).toBe(undefined);
  });

  it("should get 0 repos from github repo when getRepos is called and each one is forked", async () => {
    const axiosGet = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
      data: [{
        fork: true,
      }]
    }));

    await wrapper.vm.getRepos();
    expect(axiosGet).toHaveBeenCalled();
    await expect(wrapper.vm.repos).toStrictEqual([]);
  });

  it("should get the repos from github repo when getRepos is called and there are not forked ones", async () => {
    const repoTest = {
      name: "my-first-repo-test",
      fork: false,
    };
    const axiosGet = jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({
      data: [repoTest]
    }));

    await wrapper.vm.getRepos();
    expect(axiosGet).toHaveBeenCalled();
    await expect(wrapper.vm.repos).toStrictEqual([repoTest]);
  });
});
