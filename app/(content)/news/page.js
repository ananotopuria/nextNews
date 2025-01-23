import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";

function NewsPage() {
  return (
    <>
    <NewsList news={DUMMY_NEWS}/>
      <h1>News Page</h1>
    </>
  );
}

export default NewsPage;
