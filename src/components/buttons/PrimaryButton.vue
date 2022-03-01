<template>
	<button
		:class="{ 'primary-button': true, 'block-button': block }"
		type="button"
		@click="$emit('click')"
	>
		<p v-if="!loading" class="text-primary-button" v-text="text" />
		<spinner v-else style="margin: auto" :size="18" />
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Spinner from '@/components/spinners/Spinner.vue';

export default defineComponent({
	name: 'PrimaryButton',
	components: { Spinner },
	props: {
		text: { type: String, required: true },
		block: { type: Boolean, default: false },
		loading: { type: Boolean, default: false },
	},
	emits: ['click'],
	setup() {
		return {};
	},
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/vars';
@import '@/assets/styles/colors';
.primary-button {
	border: 0px;
	box-sizing: border-box;
	height: 2.5rem;
	width: 10rem;
	border-radius: $corner;
	cursor: pointer;
	font-size: 0.9rem;
	color: #fff;
	background: $primary;
	background: linear-gradient(90deg, $primary 0%, #3cdd84 100%);

	.text-primary-button {
		color: #fff;
		line-height: 0px;
	}
}
.primary-button:hover {
	background: linear-gradient(90deg, $primary 10%, #47d587 100%);
}
.block-button {
	width: 100%;
}
</style>
