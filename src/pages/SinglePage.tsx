import React from 'react'
import { Link, To } from 'react-router-dom'

interface newsArticles {
  url: any
  author: any
  urlToImage: any
  title: any
  description: any
  article: {
    author: any
    title: string
    publishedAt: string
    urlToImage: string
  }[]
}



const SinglePage = (article: newsArticles) => {
  return (
    <div className="w-full shadow-md hover:shadow-lg transition duration-300">
      <figure>
        <img
          src={article.urlToImage}
          alt={article.title}
          className="rounded-xl h-64 md:h-48  object-cover mx-auto"
        />
      </figure>
      <div className="items-center text-center">
        <h2 className="capitalize tracking-wider">{article.title}</h2>
        <p>
          <span className="text-secondary">{article.author}</span>
        </p>
        <p>
          <span>{article.description}</span>
          <a href={article.url} target="_blank">
            <button>read more</button>
          </a>
        </p>
      </div>
    </div>
  )
}

export default SinglePage
