<template>
	<div class="login-container">
		<h1>Signup</h1>
		<div class="login-form-card">
			<text-input
				v-model:textInput="username"
				:label="'Username'"
				style="margin-bottom: 1rem"
			/>
			<text-input
				v-model:textInput="name"
				:label="'Name'"
				style="margin-bottom: 1rem"
			/>
			<password-input
				v-model:passwordInput="password"
				:label="'Password'"
				style="margin-bottom: 1rem"
			/>
			<primary-button :text="'Register'" :block="true" @click="signup()" />
			<p class="login-text" @click="go('signin')">Go to signin</p>
		</div>
	</div>
</template>

<script lang="ts">
import PrimaryButton from '@/components/buttons/PrimaryButton.vue';
import TextInput from '@/components/textInputs/TextInput.vue';
import PasswordInput from '@/components/textInputs/PasswordInput.vue';
import { defineComponent, ref } from 'vue';
import { useToast } from 'vue-toastification';
import { useVRouter } from '@/composables/useVRouter';
import { signupInteractor } from '@/app/user/core/usesCases';
import { UserUsername } from '@/app/user/core/domain/entity/properties/UserUsername';
import { UserPassword } from '@/app/user/core/domain/entity/properties/UserPassword';
import { UserName } from '@/app/user/core/domain/entity/properties/UserName';
import { getExceptionResponse } from '@/utils/getExceptionResponse';

export default defineComponent({
	name: 'SignupPage',
	components: { TextInput, PrimaryButton, PasswordInput },
	setup() {
		const toast = useToast();
		const { go } = useVRouter();
		const username = ref('');
		const name = ref('');
		const password = ref('');

		const signup = async () => {
			try {
				await signupInteractor.run({
					username: new UserUsername(username.value),
					password: new UserPassword(password.value),
					name: new UserName(name.value),
				});
				toast.success('User registered succesfully');
			} catch (err) {
				toast.error(getExceptionResponse(err));
			}
		};

		return { username, name, password, signup, go };
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
.login-text {
	text-align: center;
	color: $text-light-color;
	cursor: pointer;
	font-size: 0.9rem;
}
.login-text:hover {
	color: $grey-light-2;
}
</style>
