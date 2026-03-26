import NewsList from "@/components/news/news-list";
import { getLatestNews } from "@/lib/news";

/**
 * default.js file when dealing with parallel routes is used to render the default content when no specific route is matched. In this case, it will render the latest news when the user visits the /archive route without specifying a year.
 */
export default async function LatestNewsPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News </h2>
      <NewsList news={latestNews} />
    </>
  );
}
