<template>
	<div class="navbar-container">
		<div class="title-box">
			<p class="title-navbar">todo-appweb</p>
		</div>
		<div class="input-createList">
			<text-input
				v-model:text="tasklistName"
				:placeholder="'Nueva lista'"
				:icon="'fas fa-plus'"
				@keyup-enter="createTasklist()"
			/>
		</div>
		<div class="scrollable">
			<div class="tasklist-box">
				<item
					v-for="tasklist in tasklistList"
					:key="tasklist.id.value"
					:title="tasklist.self().name"
					@click="setTasklistSelected(tasklist.self())"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { tasklistStore } from '@/store/tasklistStore';
import { getExceptionResponse } from '@/utils/getExceptionResponse';
import { defineComponent, onMounted, ref } from 'vue';
import { useToast } from 'vue-toastification';
import Item from './components/Item.vue';
import TextInput from '@/components/textInputs/TextInput.vue';
import { TasklistName } from '@/app/tasklist/core/domain/entity/properties/TasklistName';
import { createClient as createWSClient } from 'graphql-ws';
import { pipe, subscribe } from 'wonka';
import {
	createClient,
	defaultExchanges,
	subscriptionExchange,
} from '@urql/core';
import { env } from '@/utils/env';
import { createTasklistSubscription } from '@/app/tasklist/dataSources/operations/createTasklistSubscription';
import LocalStorage from '@/app/shared/core/domain/LocalStorage';

export default defineComponent({
	name: 'MainSidebar',
	components: { Item, TextInput },
	setup() {
		const { list, tasklistList, setTasklistSelected, create } = tasklistStore();
		const toast = useToast();

		const tasklistName = ref('');

		onMounted(() => {
			listTasklist();
			holi();
		});

		async function listTasklist() {
			try {
				await list();
				setTasklistSelected(tasklistList.value[0].self());
			} catch (err) {
				toast.error(getExceptionResponse(err));
			}
		}

		async function createTasklist() {
			try {
				await create(new TasklistName(tasklistName.value));
				setTasklistSelected(
					tasklistList.value[tasklistList.value.length - 1].self()
				);
				tasklistName.value = '';
			} catch (err) {
				toast.error(getExceptionResponse(err));
			}
		}

		async function holi() {
			const localStorage = new LocalStorage();

			const wsClient = createWSClient({
				url: `ws://localhost:3000/graphql?token=${localStorage.getItem(
					'token'
				)}`,
				connectionParams: {
					Authorization: `Bearer 1234567`,
				},
			});
			const urqlClient = createClient({
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
			pipe(
				await urqlClient.subscription(createTasklistSubscription, {
					token: 'my token frontend',
				}),
				subscribe(r => console.log(r.data))
			);
			console.log(11);
		}

		return { tasklistList, setTasklistSelected, tasklistName, createTasklist };
	},
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/colors';

.navbar-container {
	background: $grey-light-5;
	position: sticky;
	max-height: 100vh;
	width: 18rem;
}
.title-box {
	min-height: 3rem;
	max-height: 3rem;
	display: flex;
	align-items: center;
	padding: 0rem 1rem;
	box-sizing: border-box;

	.title-navbar {
		font-weight: 600;
		color: $text-color;
	}
}
.scrollable {
	overflow-y: auto;
}
.tasklist-box {
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.input-createList {
	width: 100%;
	padding-right: 1rem;
	padding-left: 1rem;
	box-sizing: border-box;
	margin-bottom: 0.5rem;
	margin-top: 0.5rem;
}
</style>
