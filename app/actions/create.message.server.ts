'use server'
import { prisma } from '@/lib/db'

export async function createMessage(data) {
  await prisma.message.create({
    data: {
      content: data.content,
      userId: 'current-user-id' // Replace with auth
    }
  })
}
