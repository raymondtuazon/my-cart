import ProductList from "@/app/components/ProductList";
import GoToShop from "@/app/components/GoToShop";

export default function Home() {
  return (
      <main className='max-w-4xl mx-auto mt-4'>
        <div className='text-center my-5 flex flex-col gap-4'>
          <h1 className='text-2xl font-bold'>Lazapee</h1>
        </div>

        <div>
          <ProductList />
        </div>

        <div className='mt-10'>
          <GoToShop />
        </div>
      </main>
  )
}
