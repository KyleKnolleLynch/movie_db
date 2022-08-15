import Image from 'next/image'

type Props = {
  imgUrl: string
  title: string
  text: string
}

const Hero = ({ imgUrl, title, text }: Props) => (
  <section className='relative w-full h-128'>
    <div className='relative flex flex-col-reverse h-full max-w-7xl m-auto pb-12 z-10 text-center md:text-left'>
      <div className='text-white max-w-2xl px-4'>
        <h2 className='text-2xl md:text-5xl font-bold pb-8'>{title}</h2>
        <p className='text-lg md:text-xl'>{text}</p>
      </div>
    </div>
    <Image
      src={imgUrl}
      alt='hero-image'
      priority
      objectFit='cover'
      objectPosition='center'
      layout='fill'
    />
  </section>
)

export { Hero }
