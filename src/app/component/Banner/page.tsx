import React from 'react'

const Banner = () => {
  return (
    <main className="bg-[url('/Bg.jpg')] h-[100vh] bg-cover bg-center text-white ">
        {/* navbar */}
        <nav className='flex justify-around items-center h-20'>
            <ul>
                <li className='text-3xl font-bold italic'>Filtro</li>
            </ul>
            <ul className='flex gap-20 font-semibold text-lg'>
                <li>Home</li>
                <li>Explore Us</li>
                <li>Brands</li>
                <li>Contact Us</li>
            </ul>
            <ul className='flex gap-x-5'>
                <button className='p-2 bg-Brown rounded-md w-36'>Login</button>
                <button className='p-2 bg-Brown rounded-md w-36'>Sign Up</button>
            </ul>
        </nav>
    </main>
  )
}

export default Banner