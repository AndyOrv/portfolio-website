import react from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href="/"
          passHref
        >
          <span span className="text-xl">
            Andrew Orvis
          </span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a
            className="mr-5 hover:text-gray-900 hover:animate-pulse"
            href="#about"
          >
            About
          </a>
          <a
            className="mr-5 hover:text-gray-900 hover:animate-pulse"
            href="#whatido"
          >
            What I Do
          </a>
          <a
            className="mr-5 hover:text-gray-900 hover:animate-pulse"
            href="#portfolio"
          >
            Portfolio
          </a>
          <a
            className="mr-5 hover:text-gray-900 hover:animate-pulse"
            href="#skills"
          >
            Skills
          </a>
        </nav>
      </div>
    </header>
  )
}
