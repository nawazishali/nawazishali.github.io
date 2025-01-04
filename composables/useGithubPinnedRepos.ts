export type GithubPinnedRepose = {
  author: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
}[];

export const useGithubPinnedRepos = () => {
  let pinnedRepos: Ref<GithubPinnedRepose> = ref([]);

  let getGithubPinnedRepos = async (username: string) => {
    let response = await $fetch<GithubPinnedRepose>(`https://pinned.berrysauce.dev/get/${username}`, {
      method: "GET",
    });
    pinnedRepos.value = response
  };

  return {pinnedRepos, getGithubPinnedRepos}
};
