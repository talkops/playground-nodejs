module.exports = {
  apps: [
    {
      cmd: 'talkops',
      name: 'client',
    },
    {
      autorestart: false,
      error_file: process.env.TALKOPS_STDERR,
      name: 'extension',
      out_file: process.env.TALKOPS_STDOUT,
      script: 'src/main.mjs',
    },
  ],
}
