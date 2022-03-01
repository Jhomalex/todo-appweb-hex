<template>
	<div class="item-sidebar-box">
		<i />
		<p class="item-sidebar-title" v-text="title.value" />
	</div>
</template>

<script lang="ts">
import { TasklistName } from '@/app/tasklist/core/domain/entity/properties/TasklistName';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ItemSidebar',
	props: { title: { type: TasklistName, required: true } },
	setup() {
		return {};
	},
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/colors';
.item-sidebar-box {
	display: flex;
	justify-content: left;
	align-items: center;
	width: 100%;
	height: 2.5rem;
	padding-left: 1.5rem;
	box-sizing: border-box;
	cursor: pointer;
}
.item-sidebar-box:hover {
	background-color: $grey-light-3;
}
.item-sidebar-title {
	font-size: 0.8rem;
}
</style>
