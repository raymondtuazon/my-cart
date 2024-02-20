'use client'

import { BiAddToQueue } from 'react-icons/bi'
import { useFormStatus } from 'react-dom'

export function SubmitButton(props: { name: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='btn btn-outline btn-success w-full'
      disabled={pending}
    >
      <BiAddToQueue size='2rem' />
      {props.name} {pending && '...'}
    </button>
  )
}
