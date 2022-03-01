<template>
	<div class="login-container">
		<h1>Signin</h1>
		<div class="login-form-card">
			<text-input
				v-model:textInput="username"
				style="margin-bottom: 1rem"
				:placeholder="'Username'"
			/>
			<password-input
				v-model:passwordInput="password"
				style="margin-bottom: 1rem"
			/>
			<primary-button :text="'Login'" :block="true" @click="login()" />
			<p class="create-account-text" @click="go('signup')">
				Go to create account
			</p>
		</div>
	</div>
</template>

<script lang="ts">
import { UserPassword } from '@/app/user/core/domain/entity/properties/UserPassword';
import { UserUsername } from '@/app/user/core/domain/entity/properties/UserUsername';
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import PasswordInput from '@/components/textInputs/PasswordInput.vue';
import TextInput from '@/components/textInputs/TextInput.vue';
import { getExceptionResponse } from '@/utils/getExceptionResponse';
import { defineComponent, ref } from 'vue';
import { authStore } from '@/store/authStore';
import { useToast } from 'vue-toastification';
import { useVRouter } from '@/composables/useVRouter';

export default defineComponent({
	name: 'SigninPage',
	components: { TextInput, PasswordInput, PrimaryButton },
	setup() {
		const { signin } = authStore();
		const { go } = useVRouter();
		const toast = useToast();
		const username = ref('');
		const password = ref('');

		const login = async () => {
			try {
				await signin({
					username: new UserUsername(username.value),
					password: new UserPassword(password.value),
				});
				go('main');
			} catch (err) {
				toast.error(getExceptionResponse(err));
			}
		};

		return { login, username, password, go };
	},
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/colors';
.login-container {
	width: 100wh;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.login-form-card {
	width: 20rem;
}
.create-account-text {
	text-align: center;
	color: $text-light-color;
	cursor: pointer;
	font-size: 0.9rem;
}
.create-account-text:hover {
	color: $grey-light-2;
}
</style>
