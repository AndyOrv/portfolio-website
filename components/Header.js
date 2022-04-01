export default function Header() {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-xl">Logo Goes Here</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">About</a>
          <a className="mr-5 hover:text-gray-900">What I Do</a>
          <a className="mr-5 hover:text-gray-900">Portfolio</a>
          <a className="mr-5 hover:text-gray-900">Lets Talk</a>
        </nav>
      </div>
    </header>
  )
}
