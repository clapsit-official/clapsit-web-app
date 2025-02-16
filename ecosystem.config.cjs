module.exports = {
  apps: [
    {
      name: "clapsit-web-app",
      script: "npm",
      args: "run deploy",
      autorestart: true,
      watch: false,
      exec_mode: "fork",
      env: {
        NODE_ENV: "production",
      },
    },
  ],
};
