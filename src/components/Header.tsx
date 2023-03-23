import Image from 'next/image'
import Link from 'next/link'

import profileImage from '../assets/profile.png'

export default function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full"
            src={profileImage}
            width={50}
            height={50}
            alt="logo"
          />
        </Link>
        <h1>THEBRABUS BLOG</h1>
      </div>

      <div>
        <Link
          href="https://portfolio-thebrabus.vercel.app"
          target="_blank"
          className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center rounded-full"
        >
          Checkout my Portfolio
        </Link>
      </div>
    </header>
  )
}
