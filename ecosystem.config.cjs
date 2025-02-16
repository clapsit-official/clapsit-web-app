module.exports = {
    apps: [
      {
        name: "clapsit-web-app",
        script: "pnpm",
        args: "run deploy",
        autorestart: true,
        watch: false,
        exec_mode: "fork",
        env: {
          NODE_ENV: "production",
        },
        post_update: [
          "pnpm run deploy",
        ],
      },
    ],
  };
  