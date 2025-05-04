module.exports = {
  apps: [
    {
      script: 'index.mjs',
      watch: true,
      ignore_watch: ['.git', 'node_modules', 'manifest.json', 'README.md'],
      autorestart: true,
    },
  ],
}
