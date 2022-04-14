const initSentryBrowser = async ({ dsn }) => {
	const init = (await import('@sentry/browser')).init;

	init({
		dsn,
		integrations: [new (await import('@sentry/tracing')).BrowserTracing()],
		tracesSampleRate: 1.0,
	});
};

export { initSentryBrowser };
