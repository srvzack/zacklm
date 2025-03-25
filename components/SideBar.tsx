'use client';

import { useState } from 'react'
import { useQuery } from 'react-query'
import { getSavedMessages } from '@/app/actions/get-saved-messages.server'

export default function SideBar() {
    const { data: savedMessages = [] } = useQuery<Array<{ id: string, content: string }>>({
        queryKey: ['saved-messages'],
        queryFn: getSavedMessages
    })

    return (
        <div className="fixed left-0 top-0 h-full w-64 bg-purple-blue-50 p-4">
            <h2 className="text-purple-blue-900 font-bold mb-4">Saved Messages</h2>
            {savedMessages?.map((msg) => (
                <div key={msg.id} className="p-2 rounded-lg hover:bg-purple-blue-100 mb-2">
                    <span className="text-purple-blue-700">{msg.content}</span>
                </div>
            ))}
        </div>
    )
}