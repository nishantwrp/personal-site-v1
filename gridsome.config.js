// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Nishant Mittal',
  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-114654874-2'
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
        title: 'Nishant Mittal',
        icon: 'src/favicon.png'
      }
    }
  ]
}
