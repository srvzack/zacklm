import { WebSocket } from 'ws'
import { generateRandomMessage } from '@/lib/test-utils'

const loadTest = async () => {
    const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!)

    ws.on('open', () => {
        setInterval(() => {
            const message = generateRandomMessage()
            ws.send(JSON.stringify(message))
        }, Math.random() * 100 + 50) // Simulate rapid messages
    })
}

export default loadTest