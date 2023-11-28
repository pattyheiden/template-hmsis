import React, { ElementType } from "react"

interface FeedListProps {
    icon: ElementType
    title: string,
    text: string
    className?: string
}

export function FeedList({ icon: Icon, title, text, className }: FeedListProps) {
    return (
        <div className="flex mb-10">
            <div className="flex items-center justify-center bg-blue rounded-full h-75 px-6 mr-3 ">
                <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col ">
                <div className="text-zinc-950 font-semibold text-xl">{title}</div>
                <div className="text-zinc-700 font-normal text-lg">{text}</div>
            </div>
        </div>
    )
}