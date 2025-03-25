'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { DocumentIcon, MicrophoneIcon, CogIcon } from '@heroicons/react/24/outline';

export default function MessageInput() {
    const [input, setInput] = useState('')
    const [model, setModel] = useState('deepseek-r1')
    const [isRecording, setIsRecording] = useState(false)

    const handleSubmit = () => {
        // WebSocket message handling
    }

    return (
        <div className="fixed bottom-0 w-full bg-purple-blue-50 p-4">
            <div className="flex gap-2 items-center">
                <Button variant="ghost" className="p-2">
                    <DocumentIcon className="h-5 w-5 text-purple-blue-500" />
                </Button>
                <Button variant="ghost" className="p-2">
                    <MicrophoneIcon className="h-5 w-5 text-purple-blue-500" />
                </Button>
                <div className="flex-1">
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full rounded-lg border border-purple-blue-200 p-2 focus:outline-none focus:ring-purple-blue-500"
                    />
                </div>
                <Button variant="ghost" className="p-2">
                    <CogIcon className="h-5 w-5 text-purple-blue-500" />
                </Button>
                <Button variant="default" className="bg-purple-blue-500 text-purple-blue-50 hover:bg-purple-blue-600">
                    Send
                </Button>
            </div>
        </div>
    )
}