module.exports = {
  apps: [
    {
      cmd: 'talkops',
      name: 'client',
    },
    {
      autorestart: true,
      error_file: process.env.TALKOPS_STDERR,
      name: 'extension',
      out_file: process.env.TALKOPS_STDOUT,
      script: 'src/main.mjs',
    },
  ],
}
