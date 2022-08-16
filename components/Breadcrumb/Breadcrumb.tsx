import Link from 'next/link'

type Props = {
  title: string
}

const Breadcrumb = ({ title }: Props) => (
  <section className='bg-zinc-800'>
    <div className='flex items-center max-w-7xl m-auto p-4 text-white text-lg'>
      <Link href='/'>
        <span className='hover:opacity-80 duration-300 cursor-pointer '>
          Home
        </span>
      </Link>
      <span className='block px-2'>|</span>
      <span className='font-bold truncate'>{title}</span>
    </div>
  </section>
)

export { Breadcrumb }
