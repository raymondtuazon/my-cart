import axios from 'axios'
import { DIRECTUS_ENDPOINT, generateAccessToken } from '../libs/directus'

export type IProduct = {
  id: number
  image: string
  name: string
  description: string
  price: number
  status: string
  date_created: string
  date_updated: string
}

type ProductListingResponse = {
  data: IProduct[]
}

type ProductCreateRequest = {
  name: string
  image: string
  description: string
  price: number
}

type ProductCreateResponse = {
  data: IProduct
}

const getProducts = async (): Promise<ProductListingResponse> => {
  try {
    const token = await generateAccessToken()

    const response = await axios.get(`${DIRECTUS_ENDPOINT}/items/products`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    const { data } = response.data

    return data
  } catch (e) {
    throw e
  }
}

const createProduct = async (
  request: ProductCreateRequest
): Promise<ProductCreateResponse> => {
  try {
    const token = await generateAccessToken()

    const response = await axios.post(
      `${DIRECTUS_ENDPOINT}/items/products`,
      {
        name: request.name,
        price: request.price,
        image: request.image,
        description: request.description,
        status: 'published',
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )

    const { data } = response.data

    return data
  } catch (e) {
    throw e
  }
}

export { getProducts, createProduct }
