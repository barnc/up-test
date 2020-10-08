import qs from 'qs'

// @TODO: Set up dotenv and pull api url from a .env file
const apiBase = 'http://localhost:4000'


export async function getCost(order) {
    const parameters = qs.stringify(order)
    return await fetch(`${apiBase}/calculate?${parameters}`).then(res => res.json())
}