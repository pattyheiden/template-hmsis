import Image from "next/image";
import bg from '@/assets/bg.png'
import { Lottiefile } from "../Lottiefile";

export function Slide() {

    return (
        <div>
            <div className="absolute">
                <Image src={bg} alt="background" />
            </div>
            <div className="grid grid-cols-3 w-[1130px] mx-auto mt-0 py-10 items-center">
                <div className="col-span-1">
                    <h1 className="text-zinc-950 text-3xl font-bold">Crie sua loja virtual <br />e aumente seu negócio.</h1>
                    <span className="text-zinc-950 text-lg font-medium">Leve sua marca para o mundo digital.</span>
                </div>
                <div className="col-span-2 -mt-10">
                    <Lottiefile />
                </div>
            </div>
        </div>
    )
}