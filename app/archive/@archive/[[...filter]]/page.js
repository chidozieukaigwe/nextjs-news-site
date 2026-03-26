import NewsList from "@/components/news/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params;
  console.log("Filter:", filter);
  const links = getAvailableNewsYears();
  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/archive/${link}`}>{link}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
  // const news = getNewsForYear(year);
  // return <NewsList news={news} />;
}
