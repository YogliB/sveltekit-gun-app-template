const initWindiDevTools = () => {
	if (import.meta.env.DEV) {
		import('virtual:windi-devtools');
	}
};

export { initWindiDevTools };
