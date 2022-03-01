<template>
	<div>
		<div class="box-input">
			<input
				:id="id ? id : generateUuid('TextInput')"
				v-model="localValue"
				type="text"
				class="textInput"
				:placeholder="placeholder"
				@keyup.enter="$emit('keyupEnter')"
			/>
			<div v-if="icon !== 'none'" class="box-eye-button">
				<icon-button :icon="icon" />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { generateUuid } from '@/utils/generateUuid';
import IconButton from '@/components/buttons/IconButton.vue';

export default defineComponent({
	name: 'TextInput',
	components: { IconButton },
	props: {
		id: { type: String, default: '' },
		label: { type: String, default: '' },
		placeholder: { type: String, default: '' },
		text: { type: String, default: '' },
		icon: { type: String, default: 'none' },
	},
	emits: ['update:text', 'keyupEnter'],
	setup(props, { emit }) {
		const localValue = ref(props.text);

		watch(localValue, text => emit('update:text', text));
		watch(
			() => props.text,
			() => (localValue.value = props.text)
		);

		return { localValue, generateUuid };
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
