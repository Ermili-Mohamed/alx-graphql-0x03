import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.SENTRY_DSN || "YOUR_SENTRY_DSN_HERE",

  // Performance Monitoring
  tracesSampleRate: 1.0,

  // Environment
  environment: process.env.NODE_ENV || "development",

  // Enable debug mode in development
  debug: process.env.NODE_ENV === "development",
});
