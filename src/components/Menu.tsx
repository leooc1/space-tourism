import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Menu({ nav }: { nav: string }) {
    const [hamburger, setHamburger] = useState(true)

    function toggleMenu() {
        const icon = document.querySelector('#hmb')
        icon?.classList.toggle('-rotate-90')
        
        if(icon?.classList.contains('-rotate-90')){
            setHamburger(false)
        }
        else{setHamburger(true)}

        const menu = document.querySelector('#menu')
        menu?.classList.toggle('h-0')
        menu?.classList.toggle('bg-[#0B0E17]')
        menu?.classList.toggle('h-96')
        const navbar = document.querySelector('#navbar')
        setTimeout(() => {
        navbar?.classList.toggle('hidden')
        navbar?.classList.toggle('flex')
        }, 150)
    }

    return (
        <div id='menu' className={`absolute w-full py-3 transition-menu h-0 top-0 z-10 sm:hidden flex justify-center items-center`}>
            <Image id='hmb' className='top-6 right-5 float-right absolute transition-menu' 
            src={`${ hamburger ? '/shared/icon-hamburger.svg':'/shared/icon-close.svg' }`} alt="" width={40} height={40} onClick={()=>toggleMenu()} />
            <nav id='navbar' className='text-white hidden flex-col gap-8 text-3xl'>
                <Link href="/" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={` uppercase font-light text-center ${nav === '/' ? 'btn-animated border-b-2' : null}`}><span className='font-bold md:inline-block hidden'>00 </span> Home</Link>
                <Link href="/destination" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={` uppercase font-light text-center ${nav === '/destination' ? 'btn-animated border-b-2' : null}`}><span className='font-bold md:inline-block hidden'>01 </span> Destination</Link>
                <Link href="/crew" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={` uppercase font-light text-center ${nav === '/crew' ? 'btn-animated border-b-2' : null}`}><span className='font-bold md:inline-block hidden'>02 </span> Crew</Link>
                <Link href="/technology" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={` uppercase font-light text-center ${nav === '/technology' ? 'btn-animated border-b-2' : null}`}><span className='font-bold md:inline-block hidden'>03 </span> Technology</Link>
            </nav>
        </div>
    )
}
