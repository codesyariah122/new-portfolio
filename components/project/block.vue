<template>
	<div>
		<!-- <div v-for="(block, index) in blocks" :key="index">
			<template v-if="block._type === 'block'">
				<p v-html="renderBlock(block)"></p>			
			</template>
			<template v-else>
				<SanityBlocks :blocks="block" />
			</template>
		</div> -->
		<SanityBlocks :blocks="blocks" />
	</div>
</template>


<script setup>

	import { SanityBlocks } from "sanity-blocks-vue-component"

	const props = defineProps({
		blocks: Array
	});

	const renderBlock = (block) => {
		if (block._type === 'block') {
			return block.children.map(child => {
				console.log(child)
				if (child.marks && child.marks.find(mark => mark._type === 'link')) {
					return `<a href="${child.marks[0].href}" class="text-blue-400 hover:text-blue-600">${child.text}</a>`;
				} else {
					return child.text;
				}
			}).join('');
		}
	};
</script>
