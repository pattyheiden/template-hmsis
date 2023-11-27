'use client'
import Lottie, { useLottie } from "lottie-react";
import LottieFile from '@/assets/lottie/7O4Nu8p4NW.json'

export function Lottiefile() {
    return(
        <div>
            <Lottie animationData={LottieFile} />
        </div>
    )
}