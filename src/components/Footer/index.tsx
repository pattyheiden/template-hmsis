import Image from "next/image";
import Logo from "@/assets/hmsis-black.png"
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";
import { Contact } from "../Contact";

export function Footer() {
    return (
        <>
            <div className="flex lg:w-full w-screen border-t-8 border-zinc-900">
                <div className="lg:grid lg:grid-cols-4 lg:mb-4 w-[1130px] mx-auto mb-3 px-3">
                    <div className="flex flex-col items-center text-center">
                        <Image src={Logo} alt="" height={130} width={130} />
                        <span className="font-medium text-base text-zinc-700">Há 3 anos transformando pequenos sonhos em grandes negócios.</span>
                    </div>
                    <div className="flex flex-col items-center text-center my-9">
                        <span className="text-lg font-semibold text-zinc-900 mb-4">Atendimento</span>
                        <Link href="https://api.whatsapp.com/send?phone=5547988074437" target="_blank">
                            <span className="flex items-center gap-2 font-medium text-base text-zinc-700"><FaWhatsapp className="h-5 w-5 zinc-700" />(47) 98807-4437</span>
                        </Link>
                        <span className="flex items-center gap-2 font-medium text-base text-zinc-700 mt-2"><FaEnvelope className="h-5 w-5 zinc-700" />contato@hmsis.com.br</span>
                    </div>
                    <div className="flex flex-col items-center text-center my-9">
                        <span className="text-lg font-semibold text-zinc-900 mb-4">Redes Sociais</span>
                        <div className="flex gap-2 ">
                            <Link href="https://www.instagram.com/hmsis_/" target="_blank">
                                <FaInstagram className="h-5 w-5 text-zinc-700 hover:text-zinc-800" />
                            </Link>
                            <Link href="https://www.facebook.com/hmsissistemas" target="_blank">
                                <FaFacebook className="h-5 w-5 text-zinc-700 hover:text-zinc-800" />
                            </Link>
                        </div>
                    </div>
                    <div id="contact" className="flex flex-col items-center text-center my-9">
                        <span className="text-lg font-semibold text-zinc-900 mb-4">Vamos conversar?</span>
                        <span className="font-medium text-base text-zinc-700">
                            Queremos conhecê-lo melhor e <br /> entender suas necessidades.
                            <Contact title="Quero tirar minhas dúvidas" className="bg-blue hover:bg-blue/90 transition px-6 py-2 rounded-lg mt-4 text-white font-medium"/>
                            {/* <Contact>
                                <button className="bg-blue hover:bg-blue/90 transition px-6 py-2 rounded-lg mt-4 text-white font-medium">Quero tirar minhas dúvidas</button>
                            </Contact> */}
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center bg-zinc-900 py-0.5 px-3">
                <span className="font-medium text-sm text-white text-center">© Copyright 2023 • HMsis Sistemas</span>
            </div>
        </>
    )
}