import Image from "next/image";
import bg from '@/assets/bg.webp'
import { Lottiefile } from "../Lottiefile";

export function Slide() {

    return (
        <div>
            <div className="lg:absolute lg:-mb-0 lg:block -mb-40 hidden">
                <Image src={bg} alt="background" loading="lazy" width={1920} height={960} />
            </div>
            <div className="lg:grid lg:grid-cols-3 lg:w-[1130px] lg:mt-0 lg:py-10 mt-10 mx-auto items-center">
                <div className="lg:col-span-1 lg:mx-0 lg:mt-0 lg:text-left lg:items-start lg:px-0 flex flex-col mt-16 items-center text-center px-6">
                    <h1 className="text-zinc-950 text-3xl font-bold">Crie sua loja virtual <br />e aumente seu negócio.</h1>
                    <span className="lg:mt-0 text-zinc-950 text-lg font-medium mt-6">Leve sua marca para o mundo digital.</span>
                </div>
                <div className="lg:col-span-2 lg:-mt-10 lg:px-0 mt-30 px-6">
                    <Lottiefile />
                </div>
            </div>
        </div>
    )
}