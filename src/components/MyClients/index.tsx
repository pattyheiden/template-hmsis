'use client'
import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Link from "next/link";

export class MyClients extends Component {
    slide = (param:number) => {
        return(
            <CarouselProvider
                        naturalSlideHeight={125}
                        naturalSlideWidth={100}
                        isIntrinsicHeight={true}
                        totalSlides={5}
                        visibleSlides={param}
                        step={1}
                        infinite={true}
                        isPlaying={true}                        
                        className="lg:block" >
                        <div className="w-full relative flex items-center justify-center">
                            <ButtonBack role="button" aria-label="slide backward" className="z-30 left-0 cursor-pointer" id="prev">
                                <FaAngleLeft className="text-zinc-900 h-6 w-6" />
                            </ButtonBack>
                            <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                                <Slider>
                                    <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">                                        
                                        <Slide index={1}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://atonsolucoes.com.br/' target="_blank">
                                                    <img src="/aton.webp" alt="aton" width={800} height={800} className="object-cover object-center h-auto w-auto" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={2}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://www.blufusos.com.br/' target="_blank">
                                                    <img src="/blufusos.webp" alt="blufusos" width={800} height={800} className="object-cover object-center h-auto w-auto" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={3}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='https://eletricamerbol.com.br/' target="_blank">
                                                    <img src="/merbol.webp" alt="merbol" width={800} height={800} className="object-cover object-center h-auto w-auto" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={4}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='#' style={{ pointerEvents: 'none' }}>
                                                    <img src="/moser.webp" alt="moser" width={800} height={800} className="object-cover object-center h-auto w-auto" />
                                                </Link>
                                            </div>
                                        </Slide>
                                        <Slide index={0}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <Link href='#' style={{ pointerEvents: 'none' }}>
                                                    <img src="/dulcidora.webp" alt="dulcidora" width={800} height={800} className="object-cover object-center h-auto w-auto" />
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
        )
    }
    render() {
        
        return (
            <div id="clients" className="container lg:w-[1130px] w-screen mx-auto">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    <div className="lg:hidden block">
                    {this.slide(1)}
                    </div>
                    <div className="lg:block hidden">
                    {this.slide(3)}
                    </div>
                </div>
            </div>
        )
    }
}