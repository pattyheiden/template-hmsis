'use client'
import dynamic from "next/dynamic";
import Lottie from "lottie-react";
import LottieFile from '@/assets/lottie/7O4Nu8p4NW.json'

export function Lottiefile() {
    const DynamicLottie = dynamic(() => import('lottie-react'), { ssr: false });
    return(
        <div>
            <DynamicLottie 
                animationData={LottieFile}
                loop
                autoplay
            />            
        </div>
    )
}