'use client'

import { BiAddToQueue } from 'react-icons/bi'
import { useFormStatus } from 'react-dom'

export function SubmitProductButton(props: { name: string }) {
  const { pending } = useFormStatus()

  return (
    <button
      type='submit'
      className='btn btn-outline btn-success'
      disabled={pending}
    >
      <BiAddToQueue size='2rem' />
      {props.name} {pending && '...'}
    </button>
  )
}
