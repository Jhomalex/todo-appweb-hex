<template>
	<div>
		<img :src="src" class="avatar-image" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Avatar',
	props: { src: { type: String, required: true } },
	setup() {
		return {};
	},
});
</script>

<style scoped>
.avatar-image {
	width: 1.8rem;
	height: 1.8rem;
	object-fit: cover;
	border-radius: 2rem;
}
</style>
