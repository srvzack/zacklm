'use client'

import { useState } from 'react'
import { Button } from "./ui/button"



export default function ModelSwitcher() {
    const [model, setModel] = useState('deepseek-r1')

    return (
        <div className="space-x-2">
            <Button variant="ghost" onClick={() => setModel('deepseek-r1')}>
                Deepseek R1
            </Button>
            <Button variant="ghost" onClick={() => setModel('llama')}>
                Llama
            </Button>
        </div>
    )
}