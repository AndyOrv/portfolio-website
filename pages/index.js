import Header from '../components/Header'
// import WebGLView from '../components/WebGLView'
import Hero from '../components/Hero'
import WhatDo from '../components/WhatDo'
import Gallery from '../components/Gallery'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      {/* <WebGLView /> */}
      <Hero />
      <WhatDo />
      <Gallery />
      <Blog />
      <Footer />
    </>
  )
}
