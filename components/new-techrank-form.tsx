// 'use client'

// import { useActionState } from 'react'
// import { createExpenseAction } from '@/lib/actions'

// export default function NewExpenseForm() {
//   const [state, action] = useActionState(createExpenseAction, null)

//   return (
//     <div className='w-1/3'>
//       <form className='mt-3 flex flex-col gap-4' action={action}>
//         <input
//           type='text'
//           name='title'
//           placeholder='Title'
//           className='border border-zinc-300 p-2'
//         />
//         <input
//           type='number'
//           name='amount'
//           placeholder='Amount'
//           className='border border-zinc-300 p-2'
//         />
//         <button type='submit' className='bg-purple-600 p-2 text-white'>
//           Add
//         </button>
//       </form>
//     </div>
//   )
// }
'use client'

import { useActionState } from 'react'
import { createTechRankAction } from '@/lib/actions'  // Updated for tech rank creation

export default function NewTechRankForm() {
  const [state, action] = useActionState(createTechRankAction, null)

  return (
    <div className='w-1/2'>
      <form className='mt-3 flex flex-col gap-4' action={action}>
        {/* Input for technology name */}
        <input
          type='text'
          name='tech'
          placeholder='Technology (e.g., React, Node.js)'
          className='border border-zinc-300 p-2'
        />

        {/* Input for rank value */}
        <input
          type='number'
          name='rank'
          min={1}
          max={10}
          placeholder='Rank (1-10)'
          className='border border-zinc-300 p-2'
        />

        {/* Submit button */}
        <button type='submit' className='bg-fuchsia-500 p-2 text-white rounded-xl'>
          Add
        </button>
      </form>
    </div>
  )
}
