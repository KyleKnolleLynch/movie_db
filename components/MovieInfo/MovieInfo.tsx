import Image from 'next/image'
//  Helpers
import { calcTime, convertMoney } from '../../helpers'
//  Components
import { Thumb } from '../Thumb/Thumb'
import { Pill } from '../Pill/Pill'
//  Types
import { Crew } from '../../api/types'

type Props = {
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

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) => (
  <section className='relative w-full h-auto p-4'>
    <div className='relative h-full min-h-128 flex flex-col md:flex-rows max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90'>
      MovieInfo
    </div>
  </section>
)

export { MovieInfo }
