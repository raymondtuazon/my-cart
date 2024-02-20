'use client'

import { BiCart } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

export function AddProductButton(props: { name: string }) {
  const router = useRouter()
  const redirectToPage = () => {
    router.push('/products')
  }

  return (
    <button className='btn btn-outline btn-info' onClick={redirectToPage}>
      <BiCart size='2rem' />
      {props.name}
    </button>
  )
}
