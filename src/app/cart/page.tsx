import Cart from '@/app/Components/cart/cart'

export default function CartPage() {
  return (
    <main className='max-w-4xl mx-auto mt-4'>
      <div className='text-center my-5 flex flex-col gap-4'>
        <h1 className='text-2xl font-bold'></h1>
      </div>
      <Cart />
    </main>
  )
}
