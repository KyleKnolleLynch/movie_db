import { useState } from 'react'
import type { NextPage } from 'next'
//  Fetch hook
import { useFetchMovies } from '../api/fetchHooks'
//  Config
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../config'
//  Components
import { Header } from '../components/Header/Header'
import { Hero } from '../components/Hero/Hero'
import { Grid } from '../components/Grid/Grid'
import { Card } from '../components/Card/Card'
import { Spinner } from '../components/Spinner/Spinner'

const Home: NextPage = () => {
  const [query, setQuery] = useState('')

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query)

  console.log(data)

  return (
    <div className='relative h-screen overflow-y-scroll'>
      <Header setQuery={setQuery} />
      <main>
        {!query && data && data.pages ? (
          <Hero
            imgUrl={
              data?.pages[0].results[0]?.backdrop_path
                ? IMAGE_BASE_URL +
                  BACKDROP_SIZE +
                  data.pages[0].results[0].backdrop_path
                : '/no_image.jpg'
            }
            title={data.pages[0].results[0].title}
            text={data.pages[0].results[0].overview}
          />
        ) : null}

        <Grid />
        <Card />
        <Spinner />
      </main>
    </div>
  )
}

export default Home
