'use client'
import * as Form from '@radix-ui/react-form'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaWhatsapp } from 'react-icons/fa6'

export default function Orcamento() {
    const defaultSelectValue = 'escolha um plano'
    const [selectedValue, setSelectedValue] = useState<string>(defaultSelectValue)
    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Faça algo com o valor selecionado, por exemplo, envie para o servidor.
        console.log('Valor selecionado:', selectedValue)
    }
    return (
        <div className='flex flex-col lg:mx-auto justify-center lg:min-h-[70vh] lg:w-[650px] lg:my-0 w-auto space-y-6 px-6 my-32'>
            <div className='flex flex-col justify-center items-center text-center gap-3'>
                <span className='text-2xl font-semibold text-zinc-900'>Peça um orçamento</span>
                <span className='text-base font-normal text-zinc-700'>
                    Estamos comprometidos em oferecer soluções personalizadas e competitivas para atender às suas necessidades. 
                    Se você está procurando serviços de alta qualidade com preços justos, está no lugar certo! 
                    Mande sua mensagem. Nosso time entrará em contato em breve para discutir os detalhes do seu projeto e fornecer um orçamento personalizado.
                </span>
            </div>
            <Form.Root className='flex flex-col lg:w-[800px] space-y-6 sr-only'>
                <Form.Field className='text-zinc-900' name='Nome'>
                    <Form.Control asChild>
                        <input
                            placeholder='Nome'
                            className="bg-zinc-100 w-full h-10 rounded-lg pl-3 placeholder-zinc-500 text-lg"
                            type="name"
                            required
                        />
                    </Form.Control>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Nome é obrigatório.
                    </Form.Message>
                </Form.Field>

                <Form.Field className='text-zinc-900' name='E-mail'>
                    <Form.Control asChild>
                        <input
                            placeholder='E-mail'
                            className="bg-zinc-100 w-full h-10 rounded-lg pl-3 placeholder-zinc-500 text-lg"
                            type="email"
                            required
                        />
                    </Form.Control>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Insira seu e-mail
                    </Form.Message>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                        Favor usar um e-mail válido
                    </Form.Message>
                </Form.Field>

                <Form.Field className='text-zinc-900' name='Telefone'>
                    <Form.Control asChild>
                        <input
                            placeholder='Telefone'
                            className="bg-zinc-100 w-full h-10 rounded-lg pl-3 placeholder-zinc-500 text-lg"
                            type="phone"
                            required
                        />
                    </Form.Control>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Informe seu telefone
                    </Form.Message>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="typeMismatch">
                        Informe o telefone com DDD
                    </Form.Message>
                </Form.Field>

                <Form.Field className='text-zinc-900' name='Plano'>
                    <Form.Control asChild>
                        <select
                            value={selectedValue}
                            onChange={handleSelectChange}
                            className='bg-zinc-100 w-full h-10 rounded-lg pl-3 placeholder-zinc-500 text-lg'
                        >
                            <option value="escolha um plano" disabled>
                                Escolha um plano
                            </option>
                            <option value="start">Start</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </Form.Control>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Selecione um plano
                    </Form.Message>
                </Form.Field>

                <Form.Field className='text-zinc-900' name='Mensagem'>
                    <Form.Control asChild>
                        <textarea
                            placeholder='Mensagem'
                            className='bg-zinc-100 w-full h-28 rounded-lg pl-3 pt-2 placeholder-zinc-500 text-lg'
                            required
                        />
                    </Form.Control>
                    <Form.Message className="text-[13px] text-white opacity-[0.8]" match="valueMissing">
                        Assunto obrigatório
                    </Form.Message>
                </Form.Field>
                <Form.Submit asChild>
                    <button className="flex items-center justify-center w-full text-white text-base font-semibold bg-blue h-10 rounded-lg hover:bg-blue/90 transition">
                        Pedir orçamento
                    </button>
                </Form.Submit>
            </Form.Root>
            <div className='flex items-center justify-center pt-30 sr-only'>
                <span className='font-bold text-lg text-zinc-900'>Também atendemos por Whatsapp</span>
            </div>
            <div className='flex justify-center'>
                <Link href="https://api.whatsapp.com/send?phone=5547988074437" target="_blank">
                    <button className="flex items-center font-medium text-base text-white bg-green-600 hover:bg-green-700 h-10 px-6 gap-2 rounded-lg transition"><FaWhatsapp className="h-5 w-5 zinc-700" />(47) 98807-4437</button>
                </Link>
            </div>
        </div>
    )
}