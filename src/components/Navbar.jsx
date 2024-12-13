import React from 'react'
import { CustomButton } from './'
import Link from 'next/link'
import Image from "next/image";

const Navbar = () => {
  return (
    <header className='w-full  absolute z-10'>
    <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4  bg-transparent'>
      <Link href='/' className='flex justify-center items-center'>
        <Image
          src='/logo.svg'
          alt='logo'
          width={118}
          height={18}
          className='object-contain'
        />
      </Link>

      <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='border-3 border-blue-300 rounded-full bg-white min-w-[130px] text-lg'
        className="border-spacing-2"
      />
    </nav>
  </header>
  )
}

export default Navbar
