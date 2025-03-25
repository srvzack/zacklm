'use client';

import dynamic from 'next/dynamic'
import { useQuery } from 'react-query'
import { getMessages } from '@app/actions/get-messages.server'

const MessageList = dynamic(() => import('@/components/MessageList'), {
    loading: () => <div className="animate-pulse h-20 bg-purple-blue-100 rounded-xl" />,
    ssr: false,
})

const MessageInput = dynamic(() => import('@/components/MessageInput'))

export default function ChatPage() {
    const { data: messages } = useQuery({
        queryKey: ['messages'],
        queryFn: getMessages,
        refetchInterval: 5000 // Polling for updates
    })
    return (
        <div className="max-w-2xl mx-auto p-4 space-y-4 bg-purple-blue-50">
      <Suspense 
        fallback={
          <div className="space-y-4">
            <div className="animate-pulse h-32 bg-purple-blue-100 rounded-xl" />
            <div className="animate-pulse h-20 bg-purple-blue-100 rounded-xl" />
          </div>
        }
      >
        <MessageList messages={messages || []} />
        <MessageInput />
      </Suspense>
    </div>
    )
}