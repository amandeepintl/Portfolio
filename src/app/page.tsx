import { PortfolioPage } from "@/components/portfolio-page";
import { getProjects } from "@/data/github";

export const revalidate = 3600; // revalidate every hour

export default async function Home() {
  const projects = await getProjects();
  const latestProjects = projects.slice(0, 3);
  return <PortfolioPage latestProjects={latestProjects} />;
}
