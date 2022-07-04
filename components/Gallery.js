import Image from 'next/image'
export default function Gallery() {
  return (
    <div className="container px-5 py-24 mx-auto flex flex-wrap">
      <div className="flex w-full mb-20 flex-wrap">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            id="portfolio"
          >
            Portfolio
          </h1>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>
      </div>
      <div className="flex flex-wrap md:-m-2 -m-1">
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/Portfolio/Blunder Buster/BB-3.png"
              width={500}
              height={300}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/Portfolio/Signing of the Dead/SOTD-2.PNG"
              width={500}
              height={300}
            />
          </div>
          <div className="md:p-2 p-1 w-full">
            <Image
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="/Portfolio/Tropical Island/Trop-1.png"
              width={600}
              height={360}
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-wrap w-1/2">
          <div className="md:p-2 p-1 w-full">
            <Image
              alt="gallery"
              className="w-full h-full object-cover object-center block"
              src="/Portfolio/Signing of the Dead/SOTD-3.PNG"
              width={600}
              height={360}
              layout="responsive"
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/Portfolio/Marbles Game/SB-3.png"
              width={500}
              height={300}
            />
          </div>
          <div className="md:p-2 p-1 w-1/2">
            <Image
              alt="gallery"
              className="w-full object-cover h-full object-center block"
              src="/Portfolio/Blunder Buster/BB-2.png"
              width={500}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
