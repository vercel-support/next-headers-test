module.exports = {
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'x-custom-header',
              value: 'my custom header value',
            },
            {
              key: 'x-another-custom-header',
              value: 'my other custom header value',
            },
            {
              key: 'cache-control',
              value: "s-maxage=60, stale-while-revalidate"
            }
          ],
        },
      ]
    },
  }