import Link from "next/link";

export default function MainHeader() {
  return (
    <header>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/news">News</Link>
      </nav>
    </header>
  );
}
