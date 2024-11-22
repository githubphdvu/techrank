// import { getExpenses } from '@/lib/expenses'
// import NewExpenseForm from '@/components/new-expense-form'
// import { formatCurrency } from '@/lib/utils'

// export default async function Home() {
//   const expenses = await getExpenses()
//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <h1 className='text-3xl font-bold'>Expense Tracker</h1>
//         <h2 className='text-zinc-500'>Using Neon: Serverless Postgres</h2>
//         <div className='mt-8 flex items-center justify-between gap-10'>
//           <div className='grow'>
//             <h3 className='text-xl font-bold'>Items</h3>
//             <ul className='mt-4 flex flex-col gap-1'>
//               {expenses.map(expense => (
//                 <li key={expense.id} className='flex justify-between'>
//                   <span>{expense.title}</span>
//                   <span>{formatCurrency(expense.amount)}</span>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <NewExpenseForm />
//         </div>
//       </div>
//     </section>
//   )
// }
import { getTechRanks } from '@/lib/techRanks' 
import NewTechRankForm from '@/components/new-techrank-form'
import { formatRank } from '@/lib/utils' 
export default async function Home() {
  const techRanks = await getTechRanks()  
  return (
      <div className='flex flex-col items-center justify-center p-8'>
        <h1 className='text-3xl font-bold'>TechRanker</h1>
        <h2 className='text-zinc-500'>Rank Technologies, programming languages, frameworks, libraries, packages,and more.</h2>  
        <NewTechRankForm/>  
        <div className='mt-8 flex items-center justify-between gap-10 w-1/2'>
          <div className='grow'>
            <h3 className='text-xl font-bold'>Technologies</h3>
            <ul className='mt-4 flex flex-col gap-1'>
              {techRanks.map(techRank => (
                <li key={techRank.id} className='flex justify-between'>
                  <span>{techRank.tech}</span>
                  <span>{formatRank(techRank.rank)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
  )
}
