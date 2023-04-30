// OpenTelemetryのインポート
const opentelemetry = require("@opentelemetry/api");
const { NodeTracerProvider } = require("@opentelemetry/sdk-trace-node");
const {
  CollectorTraceExporter,
} = require("@opentelemetry/exporter-collector-proto");
const { SimpleSpanProcessor } = require("@opentelemetry/sdk-trace-base");
const { HttpInstrumentation } = require("@opentelemetry/instrumentation-http");
const {
  ExpressInstrumentation,
} = require("@opentelemetry/instrumentation-express");

// OpenTelemetryの初期化
const initOpenTelemetry = () => {
  const provider = new NodeTracerProvider();
  const exporter = new CollectorTraceExporter({
    serviceName: "nextjs-jaeger-example",
    url: "http://localhost:14250", // JaegerのgRPCエンドポイント
  });

  provider.addSpanProcessor(new SimpleSpanProcessor(exporter));
  provider.register();

  // HTTPとExpressのインストゥルメンテーションを有効化
  const httpInstrumentation = new HttpInstrumentation();
  const expressInstrumentation = new ExpressInstrumentation();
  httpInstrumentation.setTracerProvider(provider);
  expressInstrumentation.setTracerProvider(provider);
};

initOpenTelemetry();
