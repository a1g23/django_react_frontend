// Base URL

const URL = import.meta.env.VITE_BASE_URL 

// Index Loader
export const indexLoader = async () => {
    const response = await fetch(`${URL}`)
    const allPets = await response.json()
    return allPets
}

// Show Loader
export const showLoader = async ({ params }) => {
    const response = await fetch(`${URL}${params.id}/`)
    const pet = await response.json()
    return pet
}

