'use client'

import { useEffect, useState } from 'react'

interface Message {
    userId: string
    content: string
}
import { useSpeechSynthesis } from 'react-speech-kit'
import { VolumeUpIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'

export default function MessageItem({ message }: { message: Message }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const { speak, cancel } = useSpeechSynthesis()

    useEffect(() => {
        return () => cancel()
    }, [cancel])

    const handlePlay = () => {
        speak({
            text: message.content,
            voice: 'Google Us English',
            rate: 1.2,
            pitch: 1
        })

        setIsPlaying(true)
    }

    return (
        <div className="flex gap-2">
            <Button
                onClick={handlePlay}
                className="p-2 rounded-lg hover:bg-purple-blue-100"
            >
                <VolumeUpIcon className="h5 w-5 text-purple-blue-500" />
            </Button>
            <div className="space-y-1">
                <span className="text-purple-blue-500">
                    {message.userId}
                </span>
                <p className="text-purple-900">
                    {message.content}
                </p>
            </div>
        </div>
    )
}