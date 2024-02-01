# Next.js Project with Directus Integration

This Next.js project is initialized using [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and includes integration with [Directus](https://directus.io/), a headless CMS. Follow the steps below to set up and run the project.

## Getting Started

1. Run the development server:

    ```bash
    npm run local
    # or
    yarn local
    ```

2. After running the `docker-compose.yml` and the Next.js project, you can access the following links:

    - **Directus Project:** [http://localhost:8055](http://localhost:8055)
        - Login to Directus using your admin credentials.

    - **Next.js Project:** [http://localhost:3000](http://localhost:3000)

## Setting Up Directus

1. In the Directus admin panel:
    - Log in using your admin credentials.

2. Create a "products" collection in Directus:
    - Configure the collection with the following fields:
        - String: Image, Name, Description
        - Float: Price

Now, you have set up the integration between Next.js and Directus, and you can start building your project.
