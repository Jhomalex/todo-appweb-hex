<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		style="
			margin: 10px;
			background: none;
			display: block;
			shape-rendering: auto;
		"
		:width="size + 10"
		:height="size + 10"
		viewBox="0 0 100 100"
		preserveAspectRatio="xMidYMid"
	>
		<circle
			cx="50"
			cy="50"
			:r="size + 10"
			stroke-width="8"
			stroke="#ffffff"
			stroke-dasharray="50.26548245743669 50.26548245743669"
			fill="none"
			stroke-linecap="round"
		>
			<animateTransform
				attributeName="transform"
				type="rotate"
				dur="1s"
				repeatCount="indefinite"
				keyTimes="0;1"
				values="0 50 50;360 50 50"
			/>
		</circle>
		<circle
			cx="50"
			cy="50"
			:r="size"
			stroke-width="8"
			stroke="#ffffff"
			stroke-dasharray="36.12831551628262 36.12831551628262"
			stroke-dashoffset="36.12831551628262"
			fill="none"
			stroke-linecap="round"
		>
			<animateTransform
				attributeName="transform"
				type="rotate"
				dur="1s"
				repeatCount="indefinite"
				keyTimes="0;1"
				values="0 50 50;-360 50 50"
			/>
		</circle>
	</svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Spinner',
	props: { size: { type: Number, default: 16 } },
});
</script>

<style scoped></style>
