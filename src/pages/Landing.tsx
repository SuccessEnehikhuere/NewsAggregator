import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchData } from '../utilis'
import axios from 'axios'
import { SinglePage } from '.'
import NewsComponent from '../components/search'
import Pagination from '../components/Pagination'
import Header from '../components/Header'

interface Article {
  url: string
  author: any
  urlToImage: any
  title: any
  description: any
}


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
          q: query, // search query
          apiKey: API_KEY
        },
      }
    )
    setArticles(response.data.articles)
  } catch (error) {
    console.error('Error fetching news:', error)
  }
}

// useEffect(()=>{
//   fetchNews()
// })

// const handleSearch = () => {
//   fetchNews()
// }

return (
    <section>
      <Header/>
      {/* <NewsComponent /> */}
      <div className="mx-auto py-6 bg-slate-50">
        <form
          style={{ gridTemplateColumns: '1fr auto' }}
          className="grid mb-20 w-4/5 lg:w-1/2 bg-white rounded-md shadow-md p-8 mx-auto "
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full py-1.5 px-2.5 rounded-l-md bg-[#f8fafc] border-[1px] border-slate-200"
          />
          <button onClick={()=>fetchNews()} className='text-white bg-primary rounded-r-md py-1.5 px-2.5 tracking-wider' type='submit'>Search</button>
        </form>
  
        <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => {
            return <SinglePage article={[]} key={index} {...article} />
          })}
        </div>
      </div>
      <Pagination />
    </section>

)










  // const [articles, setArticles] = useState<Article[]>([]);
  // const [query, setQuery] = useState<string>('')

  // const fetchNews = async () => {
  //   try {
  //     const response = await axios.get<{ articles: Article[] }>(
  //       'https://newsapi.org/v2/everything',
  //       {
  //         params: {
  //           q: query? query : 'everything', // Example query for latest news
  //           apiKey: API_KEY, // replace with your API key
  //         },
  //       }
  //     );
  //     setArticles(response.data.articles);
  //   } catch (error) {
  //     console.error('Error fetching news:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchNews();
  // }, []); // Fetch news only once when the component mounts


  // return (
  // )
}

export default Landing
