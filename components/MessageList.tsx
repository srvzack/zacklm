'use client';

import { Message } from '@/types'
import  MessageItem  from './MessageItem'

export default function MessageList({ messages }: { messages: Message[] }) {
    return (
        <div className="space-y-2">
            {messages.map((msg) => (
                <MessageItem key={msg.id} message={msg} />
            ))}
        </div>
    )
}