/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        DIRECTUS_ENDPOINT: 'http://localhost:8055',
        ADMIN_EMAIL: 'admin@example.com',
        ADMIN_PASSWORD: 'password',
    },
}

export default nextConfig
