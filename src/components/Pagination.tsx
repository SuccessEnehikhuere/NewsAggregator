import React from 'react'
import axios from 'axios'
import { useInfiniteQuery } from 'react-query'

interface Article {
  author: string
  title: string
  url: string
  urlToImage: string
  description: string
}

const API_KEY = 'YOUR_API_KEY' // Replace with your News API key

const fetchNews = async ({ pageParam = 1 }) => {
  //pageParam ia a parameter provided by reactQUery
  const response = await axios.get<{ articles: Article[] }>(
    'https://newsapi.org/v2/everything',
    {
      params: {
        q: 'latest', // or any other search query
        apiKey: API_KEY,
        page: pageParam,
        pageSize: 10, // or any other page size
      },
    }
  )
  return response.data.articles
}

const Pagination: React.FC = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
  } = useInfiniteQuery(['news'], fetchNews, {
    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length === 0) return undefined // No more pages
      return pages.length + 1 // Increment page number
    },
  })

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching news</div>

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {data.pages.map((page, pageIndex) => (
          <React.Fragment key={pageIndex}>
            {page.map((article, index) => (
              <li key={index}>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </button>
      )}
    </div>
  )
}

export default Pagination
