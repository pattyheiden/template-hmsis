'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode } from 'react'
import { IoClose } from 'react-icons/io5'

interface ContactProps {
    title: string,
    className?: string
}

export function Contact({title, className} : ContactProps) {
    return (
        <div className='sr-only'>
            <Dialog.Root>            
            <Dialog.Trigger className={className}>{title}</Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay className='fixed inset-0 bg-black/50' />
                <Dialog.Content className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs lg:max-w-2xl lg:p-8  bg-zinc-50 text-zinc-900 p-6 rounded-lg'>
                    <div>
                        <div className='flex flex-col space-y-4'>
                            <Dialog.Close><IoClose className='h-5 w-5 fixed right-4 top-4 text-zinc-800 hover:text-zinc-600' /></Dialog.Close>
                            <Dialog.Title className='flex items-center justify-center text-center text-xl font-bold text-zinc-900'>Estamos aqui para <br className='lg:hidden'/> te ouvir</Dialog.Title>
                            <input type='text' placeholder='Nome' className='border-b border-zinc-900 bg-gray-200/40 rounded-t-lg h-10 pl-3 placeholder-zinc-500 text-lg outline-none focus:ring-4 focus:ring-zinc-100'/>
                            <input type='email' placeholder='E-mail' className='border-b border-zinc-900 bg-gray-200/40 rounded-t-lg h-10 pl-3 placeholder-zinc-500 text-lg outline-none focus:ring-4 focus:ring-zinc-100' />
                            <textarea rows={6} placeholder='Mensagem' className='border-b border-zinc-900 bg-gray-200/40 rounded-t-lg placeholder-zinc-500 text-lg pl-3 pt-2 outline-none focus:ring-4 focus:ring-zinc-100' />
                        </div>
                        <div>
                            <button className='bg-blue hover:bg-blue/90 transition px-6 py-3 rounded-lg mt-4 text-white text-lg font-semibold w-full'>Enviar</button>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
        </div>
    )
}