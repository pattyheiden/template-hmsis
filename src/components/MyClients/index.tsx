'use client'
import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export class MyClients extends Component {
    render() {
        return (
            <div className="container w-[1130px] mx-auto">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    <CarouselProvider
                        naturalSlideHeight={125}
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={5}
                        visibleSlides={3}
                        step={1}
                        infinite={true}
                        isPlaying={true}
                        className="lg:block hidden" >
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="z-30 left-0 cursor-pointer" id="prev">
                                <FaAngleLeft className="text-zinc-900 h-6 w-6" />
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://dulcidora.com.br/' target="_blank">
                                                    <img src="http://localhost:3000/dulcidora.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://atonsolucoes.com.br/' target="_blank">
                                                    <img src="http://localhost:3000/aton.png" alt="sitting area" className="object-cover object-center w-full" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='' target="_blank">
                                                    <img src="http://localhost:3000/blufusos.png" alt="sitting area" className="object-cover object-center w-full" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://merboleletrica.com.br/' target="_blank">
                                                    <img src="http://localhost:3000/merbol.png" alt="sitting area" className="object-cover object-center w-full" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://mosermateriaiseletricos.com.br/' target="_blank">
                                                    <img src="http://localhost:3000/moser.png" alt="black chair and white table" className="object-cover object-center w-full" />
                                                </Link>
                                            </div>
                                        </Slide>

                                    </div>
                                </Slider>
                            </div>
                            <ButtonNext role="button" aria-label="slide forward" className="z-30 right-0 cursor-pointer" id="next">
                                <FaAngleRight className="text-zinc-900 h-6 w-6" />
                            </ButtonNext>
                        </div>
                    </CarouselProvider>
                </div>
            </div>
        )
    }
}