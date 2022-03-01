<template>
	<div class="rightColumn-container">
		<div class="navbar">
			<span class="title-tasklist" v-text="tasklistSelected.name?.value" />
			<text-input :placeholder="'Search'" :icon="'fas fa-search'" />
			<avatar
				:src="
					userLogged?.uriAvatar ||
					'https://somoskudasai.com/wp-content/uploads/2021/01/portada_takagi-6.jpg'
				"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import TextInput from '@/components/textInputs/TextInput.vue';
import Avatar from '@/components/Avatar.vue';
import { defineComponent } from 'vue';
import { tasklistStore } from '@/store/tasklistStore';
import { authStore } from '@/store/authStore';

export default defineComponent({
	name: 'MainNavbar',
	components: { TextInput, Avatar },
	setup() {
		const { tasklistSelected } = tasklistStore();
		const { userLogged } = authStore();
		return { tasklistSelected, userLogged };
	},
});
</script>

<style lang="scss">
@import '@/assets/styles/colors';

.navbar {
	padding: 0 1.5rem;
	width: 100%;
	height: 3rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: $primary;

	.title-tasklist {
		font-size: 1rem;
		font-weight: 500;
		color: #fff;
	}
}
</style>
