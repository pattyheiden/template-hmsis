import Link from "next/link";
import { IoClose, IoCheckmark  } from "react-icons/io5";

export function Plans() {
    return (
        <div className="lg:w-[1130px] mx-auto">
            <div className="flex flex-col items-center mt-30 mb-30">
                <span className="text-zinc-950 text-2xl font-extrabold">Planos oferecidos</span>
                <span className="text-zinc-700 text-lg font-semibold"> para fazer sua loja virtual de sucesso</span>
            </div>
            <div className="grid lg:grid-cols-2 pt-30 gap-6 lg:w-[900px] mb-2 mx-auto">
                <div className="col-span-1 items-center justify-center text-center bg-white rounded-b-lg">
                    <div className="flex bg-blue text-center h-20 items-center justify-center rounded-t-lg">
                        <span className="text-white font-semibold text-xl">START</span>
                    </div>
                    <div className="border-x border-b border-zinc-50 rounded-b-lg bg-zinc-50/50">
                        <div className="flex justify-center text-center pt-30">
                            <span className="text-base font-semibold pr-1">R$</span>
                            <span className="text-5xl font-bold">450</span>
                            <span className="text-base font-semibold pl-1">00</span>
                        </div>
                        <span className="text-lg font-medium">mensal</span>
                        <div className="divide-y px-8">
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Produtos ilimitados</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Responsivo</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Tráfego Ilimitado (Escalável)</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Configuração de frete (Frenet)</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Mercado Pago ou Pagseguro</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Whatsapp Chat</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Proteção SSL</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Painel Administrativo</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Suporte online</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Hospedagem R$80/mês</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoClose  className="h-4 w-4 text-red-800" />Integração com ERP</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoClose  className="h-4 w-4 text-red-800" />Integração com Marketplaces</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoClose  className="h-4 w-4 text-red-800" />Controle de estoque</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoClose  className="h-4 w-4 text-red-800" />Gerenciador Financeiro</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoClose  className="h-4 w-4 text-red-800" />Frente de caixa</div>
                        </div>
                        <div className="pt-12 pb-3">
                            <Link href="/checkout" target="_blank">
                                <button className="bg-blue hover:bg-blue/80 text-white text-base font-semibold px-9 py-3 rounded-lg">Contratar</button>
                            </Link>
                        </div>
                        <div className="pb-6">
                            <span className="font-normal text-sm">Opcional (R$50,00)<br />
                                e-mail personalizado<br />
                                (contato@meunegocio.com.br)
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 items-center justify-center text-center bg-white rounded-b-lg">
                    <div className="flex relative bg-blue text-center h-20 items-center justify-center rounded-t-lg overflow-hidden">
                        <div
                            className="absolute transform -translate-y-18 w-[155px] rotate-38 bg-sky-50 text-center py-1 right-[-35px] top-[32px]">
                            <span className="text-xs font-semibold text-blue">POPULAR</span>
                        </div>
                        <span className="text-white font-semibold text-xl">ADVANCED</span>
                    </div>
                    <div className="border-x border-b border-zinc-50 rounded-b-lg bg-zinc-50/50">
                        <div className="flex justify-center text-center pt-30">
                            <span className="text-base font-semibold pr-1">R$</span>
                            <span className="text-5xl font-bold">650</span>
                            <span className="text-base font-semibold pl-1">00</span>
                        </div>
                        <span className="text-lg font-medium">mensal</span>
                        <div className="divide-y px-8">
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Produtos ilimitados</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Responsivo</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Tráfego Ilimitado (Escalável)</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Configuração de frete (Frenet)</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Mercado Pago ou Pagseguro</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Whatsapp Chat</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Proteção SSL</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Painel Administrativo</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Suporte online</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Hospedagem R$80/mês</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Integração com ERP</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Integração com Marketplaces</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Controle de estoque</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Gerenciador Financeiro</div>
                            <div className="flex gap-2 items-center justify-center pt-4 pb-4"><IoCheckmark  className="h-4 w-4 text-green-800" />Frente de caixa</div>
                        </div>
                        <div className="pt-12 pb-3">
                            <Link href="/checkout" target="_blank">
                                <button className="bg-blue hover:bg-blue/80 text-white text-base font-semibold px-9 py-3 rounded-lg">Contratar</button>
                            </Link>
                        </div>
                        <div className="pb-6">
                            <span className="font-normal text-sm">Opcional (R$50,00)<br />
                                e-mail personalizado<br />
                                (contato@meunegocio.com.br)
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}