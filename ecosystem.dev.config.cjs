module.exports = {
  apps: [
    {
      cmd: 'talkops',
      name: 'client',
    },
    {
      autorestart: true,
      error_file: process.env.TALKOPS_STDERR,
      ignore_watch: [
        '.git',
        '.github',
        'node_modules',
        '.gitignore',
        'Dockerfile',
        'ecosystem.dev.config.cjs',
        'ecosystem.prod.config.cjs',
        'LICENSE',
        'manifest.json',
        'package.json',
        'README.md',
      ],
      name: 'extension',
      out_file: process.env.TALKOPS_STDOUT,
      script: 'src/main.mjs',
      watch: true,
    },
  ],
}
