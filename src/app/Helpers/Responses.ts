export interface StandardResponse {
  success?: boolean
  errors?: {
    [key: string]: string | string[]
  }
}
