// 'use server'

// import { revalidatePath } from 'next/cache'
// import { createExpense } from '@/lib/expenses'

// export async function createExpenseAction(state: any, formData: FormData) {
//   const data = Object.fromEntries(formData.entries())

//   const title = data.title as string
//   if (typeof title !== 'string') {
//     throw new Error('Title must be a string')
//   }

//   const amount = parseFloat(data.amount as string)
//   if (isNaN(amount)) {
//     throw new Error('Amount must be a number')
//   }

//   await createExpense({ title, amount })
//   revalidatePath('/')
// }
'use server'

import { revalidatePath } from 'next/cache'
import { createTechRank } from '@/lib/techRanks' 
export async function createTechRankAction(state: any, formData: FormData) {
  const data = Object.fromEntries(formData.entries())

  const tech = data.tech as string
  if (typeof tech !== 'string') {
    throw new Error('Technology must be a string')
  }

  const rank = parseInt(data.rank as string, 10)
  if (isNaN(rank) || rank < 1 || rank > 10) {
    throw new Error('Rank must be a number between 1 and 10')
  }

  // Create the new tech rank in the database
  await createTechRank({ tech, rank })
  revalidatePath('/')  // Optionally revalidate the page to reflect the new data
}
