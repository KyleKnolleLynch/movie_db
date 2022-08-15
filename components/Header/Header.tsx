import { Dispatch, SetStateAction } from 'react'
import Link from 'next/link'
import Image from 'next/image'
//  Components
import { SearchInput } from '../SearchInput/SearchInput'

type Props = {
  setQuery?: Dispatch<SetStateAction<string>>
}

const Header = ({ setQuery }: Props) => {
  return (
    <header className='sticky flex top-0 z-40 w-full h-24 bg-zinc-900'>
      <div className='flex justify-between w-full max-w-7xl h-full mx-auto px-4'>
        <Link href='/'>
          <div className='flex items-center cursor-pointer'>
            <div>
              <Image
                width='60'
                height='60'
                src='/rmdb-logo-small.svg'
                alt='rmdb-logo'
              />
            </div>
            <div className='invisible md:visible'>
              <h2 className='text-white text-2xl font-bold pl-4'>Movie DB</h2>
            </div>
          </div>
        </Link>
        {setQuery && (
          <div className='flex items-center relative'>
            <SearchInput setQuery={setQuery} />
          </div>
        )}
      </div>
    </header>
  )
}

export { Header }
