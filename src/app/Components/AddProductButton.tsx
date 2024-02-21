'use client'

import { BiCart } from 'react-icons/bi'

export function AddProductButton(props: { name: string }) {
  return (
    <button className='btn btn-outline btn-info'>
      <BiCart size='2rem' />
      {props.name}
    </button>
  )
}
