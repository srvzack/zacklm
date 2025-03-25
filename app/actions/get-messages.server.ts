'use server'
import { prisma } from '@/lib/db'

export async function getMessages() {
  return prisma.message.findMany({
    orderBy: { createdAt: 'desc' },
    take: 100
  })
}
