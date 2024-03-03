import React from 'react'
import { Link, To } from 'react-router-dom'

interface newsArticles {
  url: To
  author: any
  urlToImage: any
  title: any
  article: {
    author: any
    title: string
    description: string
    url: string
    publishedAt: string
    urlToImage: string
  }[]
}


const SinglePage = (article: newsArticles) => {
  return (
    <div>
      <Link
        to={article.url}
        className="w-full shadow-xl hover:shadow-2xl transition duration-300"
      >
        <div>
          <figure>
            <img
              src={article.urlToImage}
              alt={article.title}
              className="rounded-xl h-64 md:h-48  object-cover mx-auto"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">
              {article.title}
            </h2>
            <span className="text-secondary">{article.author}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default SinglePage
