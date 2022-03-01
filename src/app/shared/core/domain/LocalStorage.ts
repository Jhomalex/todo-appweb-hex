import { env } from '@/utils/env';

export default class LocalStorage {
	private prefix = `${env.app.name}-${env.app.env}-`;

	private encodeValue(val: unknown): string {
		if (typeof val === 'string') {
			return val;
		}
		return JSON.stringify(val);
	}

	private decodeValue(val: unknown): unknown {
		if (typeof val === 'string') {
			try {
				return JSON.parse(val);
			} catch (_) {}
		}
		return val;
	}

	setItem(key: string, value: string) {
		if (typeof value !== 'undefined') {
			const _key = this.prefix + key;
			localStorage.setItem(_key, this.encodeValue(value));
		}
	}

	getItem(key: string) {
		const _key = this.prefix + key;
		const val = localStorage.getItem(_key);
		return this.decodeValue(val);
	}

	removeItem(key: string) {
		const _key = this.prefix + key;
		localStorage.removeItem(_key);
	}
}
