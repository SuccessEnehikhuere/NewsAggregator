import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchData } from '../utilis';
import axios from 'axios'
import { SinglePage } from '.';



interface Article {
  author: string | any
  title: string
  url: string
  urlToImage: string
  description: string
  publishedAt: string
}[]

const API_KEY: string = '95ee27b835b146aa9f970467509705e3'


const Landing: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([])
  const [query, setQuery] = useState<string>('')

  const fetchNews = async () => {
    try {
      const response = await axios.get<{ articles: Article[] }>(
        'https://newsapi.org/v2/everything',
        {
          params: {
            q: query ? query : 'everything', // Example query for latest news
            apiKey: API_KEY, 
          },
        }
      )
      console.log(response.data.articles);  
      setArticles(response.data.articles)

    } catch (error) {
      console.error('Error fetching news:', error)
    }
  }

  useEffect(() => {
    fetchNews()
  }, []) // Fetch news only once when the component mounts
  

  return (
    <section>
      <div className="mx-auto my-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter search query"
        />
        <button onClick={() => fetchNews()}>Search</button>

        

        {/* <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul> */}
  
      <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, index) => {
          return <SinglePage article={[]} key={index} {...article} />
        })}
      </div>
    

       
      </div>
    </section>

  )
}


export default Landing

