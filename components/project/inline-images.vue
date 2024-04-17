<template>
	<div>
		<img :src="$urlFor(asset._ref).url()" class="w-12">
	</div>
</template>

<script setup>
	const props = defineProps({
		asset: Object
	});
</script>