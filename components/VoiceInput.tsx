'use client';

import { useEffect, useState } from 'react'
// No need to import MediaRecorder as it is a built-in browser API
import { Button } from './ui/button';
import { StopIcon } from '@heroicons/react/24/outline';

export default function VoiceInput() {
    const [isRecording, setIsRecording] = useState(false)
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null)

    const handleStart = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
        const mediaRecorder = new MediaRecorder(stream, {
            mimeType: 'audio/webm'
        })

        mediaRecorder.ondataavailable = (e) => {
            setAudioBlob(e.data)
        }

        mediaRecorder.start(100)
        setIsRecording(true)
    }

    const handleStop = async () => {
        setIsRecording(false)
        await fetch('/api/upload-voice', {
            method: 'post',
            body: audioBlob
        })
    }

    return (
        <div className="fixed bottom-4 right-4">
            <Button
                onClick={isRecording ? handleStop : handleStart}
                className="w-12 h-12 rounded-xl bg-purple-500 hover:bg-purple-blue-600 text-purple-blue-50"
            >
                {isRecording ? (
                    <StopIcon className="h-6 w-6" />
                ) : null}
            </Button>
        </div>
    )
}