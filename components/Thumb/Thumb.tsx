import Image from 'next/image'

type Props = {
    imgUrl: string
}

const Thumb = ({imgUrl}: Props) => (
    <Image 
        src={imgUrl}
        alt='thumb'
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mO8nshbDwAFIgHGVexZ3gAAAABJRU5ErkJggg=='
        className='rounded-lg object-cover'
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 20vw'
    />
)

export { Thumb }