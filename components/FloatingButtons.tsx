'use client';

import { Button } from '@/components/ui/button'
import { PlusIcon, UserIcon } from '@heroicons/react/24/outline'

export default function FloatingButtons() {
    return (
        <div className="fixed top-4 right-4 space-y-2">
            <Button
                variant="default"
                className="w-12 h-12 rounded-xl bg-purple-blue-500 hover:bg-purple-blue-600 text-purple-blue-50">
                    <PlusIcon className="h-6 w-6" />
            </Button>
            <Button
                variant="default"
                className="w-12 h-12 rounded-xl bg-purple-blue-500 hover:bg-purple-blue-600 text-purple-blue-50">
                    <UserIcon className="h-6 w-6" />
                </Button>
        </div>
    )
}