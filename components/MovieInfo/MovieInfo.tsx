import Image from 'next/image'
//  Helpers
import { calcTime, convertMoney } from '../../helpers'
//  Components
import { Thumb } from '../Thumb/Thumb'
import { Pill } from '../Pill/Pill'
//  Types
import { Credits, Crew } from '../../api/types'

type Props = {
  creditsPromise: Promise<Credits>
  thumbUrl: string
  backgroundImgUrl: string
  title: string
  year: string
  summary: string
  rating: number
  directors: Crew[]
  time: number
  budget: number
  revenue: number
}

const MovieInfo = async ({
  creditsPromise,
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  time,
  budget,
  revenue,
}: Props) => {
  const credits = await creditsPromise

  //  Get the directiors only
  const directors = credits.crew.filter(member => member.job === 'Director')

  return (
    <section className='relative w-full h-auto p-4'>
      <div className='relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90'>
        <div className='relative w-full h-96 md:h-auto md:w-1/3'>
          <Thumb imgUrl={thumbUrl} />
          <div className='absolute top-4 left-4 w-10 h-10 rounded-full flex justify-center items-center bg-white text-black text-sm font-bold'>
            {rating}
          </div>
        </div>

        <div className='w-full text-center text-white px-0 py-4 md:w-2/3 md:py-0 md:px-8 md:text-left'>
          <h2 className='text-2xl.md:text-4xl font-bold pb-4'>
            {title} ({year})
          </h2>
          <h3 className='text-lg font-bold'>Summary</h3>
          <p className='mb-8 text-sm md:text-lg'>{summary}</p>
          <div>
            <div>
              <h3 className='text-lg font-bold'>
                Director{directors.length > 1 ? 's' : ''}
              </h3>
              <div>
                {directors.map(director => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </div>
            </div>
            <div className='mt-8'>
              <h3 className='text-lg font-bold'>Movie info</h3>
              <Pill className='ml-0' text={`Running time: ${calcTime(time)}`} />
              <Pill text={`Budget: ${convertMoney(budget)}`} />
              <Pill text={`Revenue: ${convertMoney(revenue)}`} />
            </div>
          </div>
        </div>
      </div>
      <Image
        src={backgroundImgUrl}
        alt='thumb'
        priority
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8nshbDwAFIgHGVexZ3gAAAABJRU5ErkJggg=='
        fill
      />
    </section>
  )
}

export { MovieInfo }
