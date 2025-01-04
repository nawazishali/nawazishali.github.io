export type GithubPinnedRepos = {
  author: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}[];

export const useGithubPinnedRepos = () => {
  let pinnedRepos: Ref<GithubPinnedRepos> = ref([]);

  let getGithubPinnedRepos = async (username: string) => {
    let response = await $fetch<GithubPinnedRepos>(
      `https://pinned.berrysauce.dev/get/${username}`,
      {
        method: "GET",
      }
    );
    pinnedRepos.value = response;
  };

  return { pinnedRepos, getGithubPinnedRepos };
};
