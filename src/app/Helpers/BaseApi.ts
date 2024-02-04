import axios from 'axios'
import { DIRECTUS_ENDPOINT } from '@/app/Helpers/Directus'

const baseApi = axios.create({
  baseURL: DIRECTUS_ENDPOINT,
})

export default baseApi
