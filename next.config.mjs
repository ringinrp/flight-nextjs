/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack : (config) => {
        config.eksternals.push("@node-rs/bcrypt")
        return config;
    }
};

export default nextConfig;
