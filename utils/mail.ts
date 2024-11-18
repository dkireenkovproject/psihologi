import type { $Fetch, NitroFetchRequest } from 'nitropack'


interface ContactForm {
	name: string;
	mail: string;
	message: string;
  phone: string;
  }

export const repositoryApi = <T>(fetch: $Fetch<T, NitroFetchRequest>) => ({

	async sendContactForm(body: { name: string; mail: string; message: string, phone: string }): Promise<ContactForm> {
    return fetch<ContactForm>('', {
      method: 'POST',
      body,
		});
	  },
})