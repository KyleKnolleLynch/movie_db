import { Dispatch, SetStateAction, ChangeEvent, useState, useRef } from 'react'
import Image from 'next/image'

type Props = {
  setQuery: Dispatch<SetStateAction<string>>
}

const TIME = 300  // milliseconds

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = useState('')
  const timer = useRef<NodeJS.Timeout>()

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value

    clearTimeout(timer.current)

    setText(value)

    timer.current = setTimeout(() => {
        setQuery(value)
    }, TIME)
  }

  return (
    <>
      <input
        type='text'
        className='h-10 p-4 pr-14 md:w-96 rounded-full text-md bg-zinc-700 text-white focus:outline-none focus:border focus:border-solid focus:border-cyan-200'
        placeholder='Search Movie'
        value={text}
        onChange={handleInput}
      />
      <div className='absolute right-4 top-8'>
        <Image width='30' height='32' src='/tmdb-logo.svg' alt='tmdb-logo' />
      </div>
    </>
  )
}

export { SearchInput }
