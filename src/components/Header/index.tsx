'use client'
import Logo from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { PiList } from "react-icons/pi"

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };
    const closeMenuOnScroll = () => {
        setIsOpen(false);
    };
    useEffect(() => {
        window.addEventListener('scroll', closeMenuOnScroll);

        return () => {
            window.removeEventListener('scroll', closeMenuOnScroll);
        };
    }, []);
    return (
        <div className="lg:w-[1130px] lg:justify-between lg:mx-auto flex h-32 w-auto items-center justify-around px-2 ">
            <div className='block'>
                <Link href="/">
                    <Image src={Logo} alt='HMsis Sistemas' width={100} height={100} />
                </Link>
            </div>
            <div className='lg:hidden block' onClick={handleToggle}>
                <PiList className="h-8 w-8 text-white" />
            </div>
            {
                isOpen && (
                    <div className="fixed top-28 left-0 w-full flex items-center justify-center transition duration-300 z-10">
                        <div className="bg-zinc-100 w-full rounded text-base ">
                            <ul className='divide-y divide-zinc-400'>
                                <li className="pl-16 pt-6 pb-6 hover:bg-zinc-200">
                                    <Link href="/" className="text-zinc-800 hover:text-indigo-500">
                                        Home
                                    </Link>
                                </li>
                                <li className="pl-16 pt-6 pb-6 hover:bg-zinc-200">
                                    <Link href="#benefit" className="text-zinc-800 hover:text-indigo-500">
                                        Vantagens
                                    </Link>
                                </li>
                                <li className="pl-16 pt-6 pb-6 hover:bg-zinc-200">
                                    <Link href="#plans" className="text-zinc-800 hover:text-indigo-500">
                                        Planos
                                    </Link>
                                </li>
                                <li className="pl-16 pt-6 pb-6 hover:bg-zinc-200">
                                    <Link href="#clients" className="text-zinc-800 hover:text-indigo-500">
                                        Clientes
                                    </Link>
                                </li>
                                <li className="pl-16 pt-6 pb-6">
                                    <Link href="#contact" className="text-zinc-800 hover:text-indigo-500">
                                        Contato
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>


                )
            }
            <div className='lg:flex gap-6 text-lg font-medium hidden'>
                <Link href="/" className='text-white hover:text-zinc-200 transition'>
                    Home
                </Link>
                <Link href="#benefit" className='text-white hover:text-zinc-200 transition'>
                    Vantagens
                </Link>
                <Link href="#plans" className='text-white hover:text-zinc-200 transition '>
                    Planos
                </Link>
                <Link href="#clients" className='text-white hover:text-zinc-200 transition'>
                    Clientes
                </Link>
                <Link href="https://api.whatsapp.com/send?phone=5547988074437" target='_blank' className='text-white hover:text-zinc-200 transition'>
                    Contato
                </Link>
            </div>
            <div className='lg:flex gap-6 hidden'>
                <Link href="https://www.instagram.com/hmsis_/" target='_blank' arial-label="Instagram">
                    <FaInstagram className='h-6 w-6 text-white hover:text-zinc-200 transition' />
                </Link>
                <Link href="https://www.facebook.com/hmsissistemas" target='_blank' arial-label="Facebook">
                    <FaFacebook className='h-6 w-6 text-white hover:text-zinc-200 transition' />
                </Link>
            </div>
        </div>
    )
}