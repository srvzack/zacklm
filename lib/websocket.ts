import { WebSocketServer, createWebSocketStream } from 'ws'
import { pipeline } from 'stream/promises'
import { Transform, TransformCallback } from 'stream'
import { createClient } from 'redis'

class MessageTransformer extends Transform {
    _queue: any[];

    constructor() {
        super({ objectMode: true })
        this._queue = []
    }

    _transform(chunk: any, encoding: BufferEncoding, callback: TransformCallback) {
        this._queue.push(chunk)
        if (this._queue.length >= 10) {
            const batch = this._queue.splice(0, 10)
            callback(null, JSON.stringify(batch))
        }
        callback()
    }
    
    _flush(callback: TransformCallback) {
        if (this._queue.length > 0) {
            callback(null, JSON.stringify(this._queue))
        }
        callback()
    }
}

const wss = new WebSocketServer({ port: 8080 })
wss.on('connection', (ws) => {
    const wsStream = createWebSocketStream(ws)
const transformer = new MessageTransformer()
const redis = createClient()
redis.connect().catch(console.error)
pipeline(
    wsStream,
    transformer,
    wsStream
).catch((err) => {
    console.error('Pipeline error:', err)
})

redis.subscribe('chat', (message: string) => {
    console.log('Received message:', message)
    ws.send(message)
    })
})