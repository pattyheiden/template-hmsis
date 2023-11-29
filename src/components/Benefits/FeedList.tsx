import React, { ElementType } from "react"

interface FeedListProps {
    icon: ElementType
    title: string,
    text: string
    className?: string
}

export function FeedList({ icon: Icon, title, text, className }: FeedListProps) {
    return (
        <div className="lg:flex-row flex flex-col mb-10 items-center">
            <div className="lg:w-auto lg:px-6 lg:mr-3 lg:mb-0 mb-6 flex items-center justify-center bg-blue rounded-full h-75 w-20">
                <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="lg:text-start flex flex-col text-center">
                <div className="text-zinc-950 font-semibold text-xl">{title}</div>
                <div className="text-zinc-700 font-normal text-lg">{text}</div>
            </div>
        </div>
    )
}