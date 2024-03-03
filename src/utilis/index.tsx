import axios from 'axios';

const newsArticleUrl: string = 'https://newsapi.org'

export const fetchData = axios.create({
  baseURL: newsArticleUrl
})

