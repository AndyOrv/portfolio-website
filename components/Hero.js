import Image from 'next/image'

export default function Hero() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="mb-8 leading-relaxed">Hello, I&apos;m Shirley</h1>
            <p className="title-font sm:text-4xl text-3xl mb-4  font-medium text-gray-900">
              I&apos;m a Game Developer and I make games that people love
            </p>
            <br className="my-3" />
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-9 focus:outline-none hover:bg-blue-600 rounded text-lg">
                My Work
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-9 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Let&apos;s Talk
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
              width={720}
              height={600}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
