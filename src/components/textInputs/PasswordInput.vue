<template>
	<div>
		<div class="box-input">
			<input
				:id="id ? id : generateUuid('PasswordInput')"
				v-model="text"
				:type="show ? 'text' : 'password'"
				class="textInput"
				:placeholder="placeholder"
				@input="onWrite"
			/>
			<div class="box-eye-button">
				<icon-button
					:icon="show ? 'fas fa-eye-slash' : 'fas fa-eye'"
					@click="show = !show"
				/>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { generateUuid } from '@/utils/generateUuid';
import IconButton from '@/components/buttons/IconButton.vue';

export default defineComponent({
	name: 'PasswordInput',
	components: { IconButton },
	props: {
		placeholder: { type: String, default: 'Password' },
		id: { type: String, default: '' },
	},
	emits: ['update:passwordInput'],
	setup(props, { emit }) {
		const text = ref('');
		const show = ref(false);

		const onWrite = () => {
			emit('update:passwordInput', text.value);
		};

		return { onWrite, text, show, generateUuid };
	},
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/colors';
@import 'styles.scss/';
.box-eye-button {
	position: absolute;
	top: 50%;
	left: 97%;
	transform: translate(-100%, -50%);
}
.eye-button {
	border: 0px;
	outline: none;
	cursor: pointer;
	color: $grey-light-1;
	background: transparent;
}
.eye-icon {
	font-size: 1.1rem;
}
.eye-button:focus {
	outline: none;
}
</style>
