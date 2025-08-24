# Sentry Setup Guide

## Configuration Files Created

- `sentry.client.config.ts` - Browser-side error reporting
- `sentry.server.config.ts` - Server-side error reporting
- `sentry.edge.config.ts` - Edge runtime error reporting

## Environment Variables

Create a `.env.local` file in your project root with:

```bash
# Sentry Configuration
NEXT_PUBLIC_SENTRY_DSN=https://your-sentry-dsn-here@sentry.io/your-project-id
SENTRY_DSN=https://your-sentry-dsn-here@sentry.io/your-project-id
```

## Getting Your Sentry DSN

1. Go to [sentry.io](https://sentry.io) and sign in
2. Create a new project or select existing one
3. Go to Project Settings > Client Keys (DSN)
4. Copy the DSN and replace `YOUR_SENTRY_DSN_HERE` in the config files

## Testing ErrorBoundary

1. Start your development server: `npm run dev`
2. Navigate to the homepage
3. The ErrorProneComponent will throw an error
4. Check your Sentry dashboard for the logged error
5. The ErrorBoundary will display the fallback UI

## ErrorBoundary Features

- ✅ Catches JavaScript errors in component tree
- ✅ Reports errors to Sentry with component stack trace
- ✅ Provides fallback UI with "Try again?" button
- ✅ Prevents entire app from crashing
