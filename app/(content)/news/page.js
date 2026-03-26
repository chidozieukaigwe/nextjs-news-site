import NewsList from "@/components/news/news-list";

export default async function NewsPage() {
  /**
   * We are making a server side request to fetch the news data from our backend API. We can acheive this as this is server component and we can make direct calls to server side resources. We now do not have to make/utilize client side code like useState and useEffect to fetch the data. We can directly fetch the data and render it on the server side. This is one of the main advantages of using server components in Next.js 13. We can fetch data directly on the server and render it without having to worry about client side rendering and hydration issues.
   */
  const response = await fetch("http://localhost:8080/news");

  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }

  const news = await response.json();

  return (
    <div id="news">
      <h1>News Page</h1>
      <NewsList news={news} />
    </div>
  );
}
