import Link from "next/link";


function NewsPage() {
  return (
    <>
    <ul>
        <li>
            <Link href="/news/first-news">First News Item</Link>
            
        </li>
        <li>
            <Link href="/news/second-news">Second News Item</Link>

        </li>
        <li>
            <Link href="/news/third-news">Third News Item</Link>

        </li>
    </ul>
      <h1>News Page</h1>
    </>
  );
}

export default NewsPage;
