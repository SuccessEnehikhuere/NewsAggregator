// NewsComponent.tsx
import React, { useState } from 'react'
import axios from 'axios'

interface Article {
  title: string
  url: string
}

const API_KEY: string = '95ee27b835b146aa9f970467509705e3'

const NewsComponent: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [query, setQuery] = useState<string>('')

  const fetchNews = async () => {
    try {
      const response = await axios.get<{ articles: Article[] }>(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: query, // search query
            apiKey: API_KEY // replace with your API key
          },
        }
      )
      setArticles(response.data.articles)
    } catch (error) {
      console.error('Error fetching news:', error)
    }
  }

  const handleSearch = () => {
    fetchNews()
  }

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search query"
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsComponent
