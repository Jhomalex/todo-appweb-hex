<template>
	<button class="icon-button" type="button" @click="$emit('click')">
		<i :class="[icon, size]" />
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'IconButton',
	props: {
		size: { type: String, default: 'md' },
		icon: { type: String, required: true },
	},
	emits: ['click'],
	setup() {
		return {};
	},
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors';
.icon-button {
	border: 0px;
	outline: none;
	cursor: pointer;
	color: $grey-light-1;
	background: transparent;
}
.md {
	font-size: 1rem;
}
.icon-button:focus {
	outline: none;
}
</style>
