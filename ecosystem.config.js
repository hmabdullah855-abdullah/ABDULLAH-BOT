module.exports = {
  apps : [{
    name: "ABDULLAH-MD-bot",
    script: "./server.js",
    watch: false,
    autorestart: true,
    max_memory_restart: '2G',
    env: {
      NODE_ENV: "production",
    }
  }]
};
