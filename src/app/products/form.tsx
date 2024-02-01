'use client'

import { addProduct } from '../actions/products'
import { useFormStatus } from 'react-dom'
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function ProductForm() {
  const ref = useRef<HTMLFormElement>(null)
  const router = useRouter()

  const { pending } = useFormStatus()

  const callAction = async (formData: FormData) => {
    ref.current?.reset()

    await addProduct(formData)
  }

  const redirectToPage = () => {
    router.push('/')
  }

  return (
    <>
      <form
        ref={ref}
        action={callAction}
        className='grid grid-cols-1 md:grid-cols-2 gap-4'
      >
        <div className='mb-4'>
          <input
            type='text'
            name='name'
            placeholder='Product name'
            className='input input-bordered w-full'
            required
          />
        </div>
        <div className='mb-4'>
          <input
            type='text'
            name='price'
            placeholder='Price'
            className='input input-bordered w-full'
            required
          />
        </div>
        <div className='mb-4 col-span-2'>
          <textarea
            name='image'
            placeholder='Image URL'
            className='textarea textarea-bordered w-full'
            required
          />
        </div>
        <div className='mb-4 col-span-2'>
          <textarea
            name='description'
            placeholder='Description'
            className='textarea textarea-bordered w-full'
            required
          />
        </div>

        <div className='mb-4 col-span-2'>
          <button
            className='btn btn-outline btn-success w-full'
            disabled={pending}
          >
            Add
          </button>
          <button
            className='btn btn-outline btn-info w-full mt-2'
            onClick={redirectToPage}
          >
            Back
          </button>
        </div>
      </form>
    </>
  )
}
