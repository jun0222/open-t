module.exports = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // サーバーサイドではトレーサーを設定する
      require("./tracing");
    }

    return config;
  },
};
