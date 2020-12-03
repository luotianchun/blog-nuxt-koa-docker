module.exports = {
  apps: [
    {
      name: 'my-blog',
      exec_mode: 'cluster',
      instances: '2', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start'
    }
  ]
}
