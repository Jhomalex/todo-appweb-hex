<template>
	<div class="main-container">
		<sidebar class="leftColumn-container" />
		<navbar class="rightColumn-container" />
	</div>
</template>

<script lang="ts">
import Sidebar from '@/components/bars/Sidebar/Sidebar.vue';
import Navbar from '@/components/bars/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'MainPage',
	components: { Sidebar, Navbar },
	setup() {
		return {};
	},
});
</script>

<style scoped lang="scss">
.main-container {
	display: flex;
	flex: 1 1 0px;

	.leftColumn-container {
		display: flex;
		flex-direction: column;
		width: 18rem;
	}
	.rightColumn-container {
		display: flex;
		flex: 1 1 0px;
		overflow: hidden;
	}
}
</style>
