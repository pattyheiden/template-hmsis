import Logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaFacebook } from "react-icons/fa6";

export function Header() {
    return (
        <div className="flex h-32 w-[1130px] mx-auto items-center justify-between">
            <div>
                <Link href="/">
                    <Image src={Logo} alt='HMsis Sistemas' width={100} height={100} />
                </Link>
            </div>
            <div className='flex gap-6 text-lg font-medium'>
                <Link href="" className='text-white hover:text-zinc-200 transition'>
                    Home
                </Link>
                <Link href="" className='text-white hover:text-zinc-200 transition'>
                    Vantagens
                </Link>
                <Link href="" className='text-white hover:text-zinc-200 transition '>
                    Planos
                </Link>
                <Link href="" className='text-white hover:text-zinc-200 transition'>
                    Clientes
                </Link>
                <Link href="" className='text-white hover:text-zinc-200 transition'>
                    Contato
                </Link>
            </div>
            <div className='flex gap-6'>
                <FaInstagram className='h-6 w-6 text-white hover:text-zinc-200 transition' />
                <FaFacebook className='h-6 w-6 text-white hover:text-zinc-200 transition' />
            </div>
        </div>
    )
}