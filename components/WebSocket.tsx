'use client'

import { useEffect, useState } from 'react'

export default function WebSocket() {
    const [ws, setWs] = useState<WebSocket | null>(null)

    useEffect(() => {
        const socket = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!)
        setWs(socket)

        socket.onmessage = (event) => {
            // Handle incoming messages
        }

        return () => socket.close()
    }, [])

    return null
}