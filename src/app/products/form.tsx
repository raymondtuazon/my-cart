'use client'

import { useFormState } from 'react-dom'
import { StandardResponse } from '@/app/Helpers/Responses'
import { useEffect, useRef } from 'react'
import addProduct from '@/app/actions/products'
import { SubmitButton } from '@/app/products/submit-button'
import { HomeButton } from '@/app/Components/HomeButton'

const initialState: StandardResponse = {
  success: false,
}

export default function ProductForm() {
  const ref = useRef(null)
  const [state, formAction] = useFormState(addProduct, initialState)

  useEffect(() => {
    if (state.success) ref.current?.reset()
  })

  return (
    <form
      ref={ref}
      action={formAction}
      className='grid grid-cols-1 md:grid-cols-2 gap-4'
    >
      <div className='mb-4 col-span-2'>
        {state.success && (
          <div className='badge badge-success gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              className='inline-block w-4 h-4 stroke-current'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              ></path>
            </svg>
            success
          </div>
        )}
      </div>

      <div className='mb-4'>
        <input
          type='text'
          name='name'
          placeholder='Product name'
          className='input input-bordered w-full'
          required
        />
        {state?.errors?.name && (
          <p className='text-red-500 text-sm mt-1'>*{state.errors.name}</p>
        )}
      </div>
      <div className='mb-4'>
        <input
          type='text'
          name='price'
          placeholder='Price'
          className='input input-bordered w-full'
          required
        />
        {state?.errors?.price && (
          <p className='text-red-500 text-sm mt-1'>*{state.errors.price}</p>
        )}
      </div>
      <div className='mb-4 col-span-2'>
        <textarea
          name='image'
          placeholder='Image URL'
          className='textarea textarea-bordered w-full'
          required
        />
        {state?.errors?.image && (
          <p className='text-red-500 text-sm mt-1'>*{state.errors.image}</p>
        )}
      </div>
      <div className='mb-4 col-span-2'>
        <textarea
          name='description'
          placeholder='Description'
          className='textarea textarea-bordered w-full'
          required
        />
        {state?.errors?.description && (
          <p className='text-red-500 text-sm mt-1'>
            *{state.errors.description}
          </p>
        )}
      </div>

      <div className='mb-4 col-span-2'>
        <SubmitButton />
        <HomeButton />
      </div>
    </form>
  )
}