import { allProjects, Project } from "./portfolio";

export async function getProjects(): Promise<Project[]> {
  try {
    const res = await fetch("https://api.github.com/users/amandeepintl/repos?sort=updated&per_page=100", {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      console.error("Failed to fetch GitHub projects", res.statusText);
      return allProjects; // fallback to static if API fails
    }

    const repos = await res.json();
    const manualDataMap = new Map(allProjects.map((p) => [p.name.toLowerCase(), p]));

    const mergedProjects: Project[] = repos
      .filter((repo: any) => !repo.fork && repo.name.toLowerCase() !== "amandeepintl") // filter out forks and profile README
      .map((repo: any) => {
        const manual = manualDataMap.get(repo.name.toLowerCase());

        return {
          name: manual?.name || repo.name,
          category: manual?.category || "Open Source Project",
          description: manual?.description || repo.description || "No description provided.",
          repo: repo.html_url,
          live: manual?.live || repo.homepage || undefined,
          language: manual?.language || repo.language || "TypeScript",
          tags: manual?.tags || repo.topics || [],
          highlight: manual?.highlight || `Updated in ${new Date(repo.pushed_at).toLocaleString('default', { month: 'long', year: 'numeric' })}.`,
          pushedAt: repo.pushed_at
        };
      })
      .sort((a: Project, b: Project) => new Date(b.pushedAt).getTime() - new Date(a.pushedAt).getTime());

    return mergedProjects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return allProjects;
  }
}
