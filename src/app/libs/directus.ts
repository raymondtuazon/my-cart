import axios from "axios";

const DIRECTUS_ENDPOINT = process.env.DIRECTUS_ENDPOINT
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? ''
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? ''

const generateAccessToken = async (): Promise<string> => {
  try {
    const response = await axios.post(`${DIRECTUS_ENDPOINT}/auth/login`, {
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
    })

    const { data } = response.data

    return data.access_token
  } catch (error) {
    throw error
  }
}

const generateRefreshToken = async (refresh_token: string): Promise<string> => {
  try {
    const response = await axios.post(`${DIRECTUS_ENDPOINT}/auth/refresh`, {
      refresh_token,
      mode: 'refresh_mode',
    })

    const { data } = response.data

    return data.access_token
  } catch (error) {
    throw error
  }
}

export { DIRECTUS_ENDPOINT, generateAccessToken, generateRefreshToken }
