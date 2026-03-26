import NewsItems from "@/components/news/news-items";

export default async function NewsPageDetails({ params }) {
  const { slug } = await params;
  return <NewsItems title={slug} />;
}
