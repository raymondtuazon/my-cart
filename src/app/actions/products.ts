'use server'

import { createProduct } from '../repositories/ProductRepository'

export const addProduct = async (formData: FormData) => {
  const image = formData.get('image')
  const name = formData.get('name')
  const description = formData.get('description')
  const price = parseFloat(formData.get('price'))

  try {
    await createProduct({
      name,
      image,
      description,
      price,
    })
  } catch (e) {}
}
