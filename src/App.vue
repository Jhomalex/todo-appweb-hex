<template>
	<router-view />
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({ name: 'App' });
</script>

<style lang="scss">
@import '@/assets/styles/colors';
@import '@/assets/styles/toast';
@import '@/assets/fontawesome/css/all.min.css';
#app {
	font-family: 'Poppins', sans-serif !important;
	margin: 0px;
}
body {
	margin: 0px;
}
div {
	display: block;
}
p {
	color: $text-color;
	margin: 0px;
}
span {
	color: $text-color;
}
label {
	color: $text-color;
}
h1 {
	color: $text-color;
}
h2 {
	color: $text-color;
}
h3 {
	color: $text-color;
}
h4 {
	color: $text-color;
}
</style>
