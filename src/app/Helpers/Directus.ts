import axios from 'axios'

const DIRECTUS_ENDPOINT = process.env.DIRECTUS_ENDPOINT
const DIRECTUS_USER_EMAIL = process.env.DIRECTUS_USER_EMAIL ?? ''
const DIRECTUS_USER_PASSWORD = process.env.DIRECTUS_USER_PASSWORD ?? ''

const generateAccessToken = async (): Promise<string> => {
  try {
    const response = await axios.post(`${DIRECTUS_ENDPOINT}/auth/login`, {
      email: DIRECTUS_USER_EMAIL,
      password: DIRECTUS_USER_PASSWORD,
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
