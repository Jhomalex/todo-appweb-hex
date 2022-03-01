<script setup lang="ts">
import { directive as vClickAway } from 'vue3-click-away';

const cont = val => {
	console.log(1);
};
</script>
<template>
	<div v-click-away="cont">Hola</div>
</template>

<style scoped></style>
