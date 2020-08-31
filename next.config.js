
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.js$/,
      use: [
        {
          loader: 'astroturf/loader',
          options: {
            extension: '.module.css'
          }
        }
      ]
    })

    return config
  },
}
