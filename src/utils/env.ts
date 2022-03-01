export const env = {
	app: {
		name: process.env.VUE_APP_APP_NAME as string,
		env: process.env.VUE_APP_APP_ENV as string,
		url: process.env.VUE_APP_APP_URL as string,
	},
	api: {
		url: process.env.VUE_APP_API_URL as string,
		server: process.env.VUE_APP_API_SERVER as string,
	},
};
