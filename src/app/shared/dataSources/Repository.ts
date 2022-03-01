import { env } from '@/utils/env';
import {
	createClient,
	defaultExchanges,
	subscriptionExchange,
} from '@urql/core';
import { GraphQLClient } from 'graphql-request';
import { createClient as createWSClient } from 'graphql-ws';
import LocalStorage from '../core/domain/LocalStorage';

export class Repository {
	protected gqlClient;
	protected urqlClient;
	constructor() {
		const localStorage = new LocalStorage();
		this.gqlClient = new GraphQLClient(env.api.url);
		const wsClient = createWSClient({
			url: 'ws://localhost:3000/graphql',
		});
		this.urqlClient = createClient({
			url: env.api.url,
			fetchOptions: () => ({
				headers: { authorization: localStorage.getItem('token') as string },
			}),
			exchanges: [
				...defaultExchanges,
				subscriptionExchange({
					forwardSubscription: operation => ({
						subscribe: sink => ({
							unsubscribe: wsClient.subscribe(operation, sink),
						}),
					}),
				}),
			],
		});
	}
}
