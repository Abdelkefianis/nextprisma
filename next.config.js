/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ["res.cloudinary.com", "res-console.cloudinary.com", "firebasestorage.googleapis.com"]
    },
    env: {
        URL: "http://localhost:3000"
    }

}

module.exports = nextConfig