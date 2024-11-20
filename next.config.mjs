/** @type {import('next').NextConfig} */
const nextConfig = {
    poweredByHeader: false,
    headers: async () => {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-DNS-Prefetch-Control',
                        value: 'on'
                    },
                    {
                        key: 'Strict-Transport-Security',
                        value: 'max-age=63072000; includeSubDomains; preload'
                    }
                ]
            }
        ];
    },
    experimental: {
        // optimizeCss: true,
        scrollRestoration: true
    }
};

export default nextConfig;
