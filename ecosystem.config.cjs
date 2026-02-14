module.exports = {
  apps: [
    {
      name: "sobat-payment",
      script: "bun",
      args: "run dist/index.js",
      interpreter: "none",
      watch: false
    }
  ]
};
