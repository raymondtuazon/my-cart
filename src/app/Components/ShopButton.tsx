'use client'

import { BiCart } from 'react-icons/bi'
import { useRouter } from 'next/navigation'

export function ShopButton() {
  const router = useRouter()
  const redirectToPage = () => {
    router.push('/products')
  }

  return (
    <button
      className='btn btn-outline btn-info w-full'
      onClick={redirectToPage}
    >
      <BiCart size='2rem' />
      Create Products
    </button>
  )
}
