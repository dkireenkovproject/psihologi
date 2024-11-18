export default defineNuxtPlugin({
	setup() {
		const config = useRuntimeConfig()
		const api = $fetch.create({
			baseURL: '/mail.php',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		})

		return {
			provide: {
				api,
			},
		}
	},
})
