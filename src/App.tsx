import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Landing, Login, SinglePage , Register} from './pages'


//the staletime configures the time, in miliseconds, after which the cached data is considered stale.
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/landing',
    element: <Landing/>
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/singlepage',
    element: <SinglePage article={[]} url={undefined} author={undefined} urlToImage={undefined} title={undefined} description={undefined} publishedAt={undefined} />,
  },
])

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </>
  )
}

export default App
