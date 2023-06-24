import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState} from 'react'

export default function Header() {
    const [nav, setNav] = useState('')
    useEffect(() => {
        setNav(window.location.pathname)
    }, [nav])
    
    return (
        <header className='relative flex items-center w-full justify-between pt-4'>
            <Link href='/'>
                <Image className='pl-7 w-fit h-12' src="/logo.svg" alt="Space Travel" width={50} height={50} />
            </Link>
            <nav className='px-2 w-[65%] backdrop-blur-xl bg-[#fff2]
            justify-evenly text-white rounded-md 
            sm:flex hidden'>
                <Link  id={'home'} href="/" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={`leading-[80px] h-20 uppercase font-light text-sm ${nav === '/' ? 'btn-animated border-b-2':null}`}><span className='font-bold md:inline-block hidden'>00 </span> Home</Link>
                <Link id={'destination'} href="/destination" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={`leading-[80px] h-20 uppercase font-light text-sm ${nav === '/destination' ? 'btn-animated border-b-2':null}`}><span className='font-bold md:inline-block hidden'>01 </span> Destination</Link>
                <Link id={'crew'} href="/crew" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={`leading-[80px] h-20 uppercase font-light text-sm ${nav === '/crew' ? 'btn-animated border-b-2':null}`}><span className='font-bold md:inline-block hidden'>02 </span> Crew</Link>
                <Link id={'technology'} href="/technology" style={{ letterSpacing: '2px', wordSpacing: '2px' }} className={`leading-[80px] h-20 uppercase font-light text-sm ${nav === '/technology' ? 'btn-animated border-b-2':null}`}><span className='font-bold md:inline-block hidden'>03 </span> Technology</Link>
            </nav>
        </header>
    )
}