# open telemetry

# next アプリ

```sh
# 起動コマンド
npm run dev
```

[http://localhost:3000/](http://localhost:3000/)で見られる

# jaeger

```sh
# 起動コマンド
docker run --rm -it --name jaeger -p 6831:6831/udp -p 16686:16686 jaegertracing/all-in-one:latest
```

[http://localhost:16686/](http://localhost:16686/) で jaeger のコンソールを見られる

# 負荷テスト

```sh
# テスト用ツールautocannonをグローバルインストール
npm install -g autocannon

# テスト用コマンド
# -c: 同時接続数
# -d: テストの実行時間（秒）
autocannon -c 100 -d 10 http://localhost:3000
```
