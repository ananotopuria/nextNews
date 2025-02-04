import NewsList from '@/components/news-list';

export default async function NewsPage() {


  const response = await fetch('http://localhost:8080/news');

  if(!response.ok){
    throw new Error()
  }
  const news = await response.json("Failed to fetch news");

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}