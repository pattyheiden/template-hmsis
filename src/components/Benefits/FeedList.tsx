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
            <div className="flex items-center justify-center bg-blue rounded-full h-24 px-7 mr-3 ">
                <Icon className="h-10 w-10 text-white" />
            </div>
            <div className="flex flex-col ">
                <div className="text-zinc-950 font-semibold text-lg">{title}</div>
                <div className="text-zinc-700 font-normal text-base">{text}</div>
            </div>
        </div>
    )
}