import { PortfolioPage } from "@/components/portfolio-page";
import { getProjects } from "@/data/github";

export const revalidate = 60; // revalidate every minute

export default async function Home() {
  const projects = await getProjects();
  const latestProjects = projects.slice(0, 3);
  return <PortfolioPage latestProjects={latestProjects} />;
}
