'use client'

import { BiAddToQueue } from 'react-icons/bi'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='btn btn-outline btn-success w-full'
      aria-disabled={pending}
    >
      <BiAddToQueue size='2rem' />
      Add {pending && '...'}
    </button>
  )
}
