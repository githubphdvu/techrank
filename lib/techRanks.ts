// import prisma from '@/lib/prisma'
// export async function getExpenses() {
//   return await prisma.expense.findMany()
// }
// export async function createExpense(data: { amount: number; title: string }) {
//   return await prisma.expense.create({data})
// }
import prisma from '@/lib/prisma'

// Function to fetch all tech ranks
export async function getTechRanks() {
  return await prisma.techRank.findMany()
}

// Function to create a new tech rank
export async function createTechRank(data: { tech: string; rank: number }) {
  return await prisma.techRank.create({ data })
}
