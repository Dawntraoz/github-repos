import { shallowMount } from "@vue/test-utils";
import GithubReposItem from "@/components/GithubReposItem.vue";

describe("GithubReposItem.vue", () => {
  let wrapper = undefined;

  beforeEach(() => {
    wrapper = shallowMount(GithubReposItem, {
      props: {
        repository: {
          name: "test-repo",
        },
        bgColor: '#fff'
      }
    });
  })

  it("should render the component with the props sended", () => {
    expect(!!wrapper).toBeTruthy();
  });

  it("should render the component without the props filled", () => {
    wrapper = shallowMount(GithubReposItem, {
      props: {}
    });
    expect(!!wrapper).toBeTruthy();
  });
});
