<template>
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="bg-white dark:bg-stone-800 shadow overflow-hidden sm:rounded-lg">
			<div class="px-4 py-5 sm:px-6">
				<h3 class="text-lg font-medium text-stone-900 dark:text-white">About Me</h3>
				<p class="mt-1 max-w-2xl text-sm text-stone-500 dark:text-stone-400">Learn more about our mission and vision.</p>
			</div>
			<div class="border-t border-stone-200 dark:border-stone-700">
				<dl>
					<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-stone-500 dark:text-stone-400">
							Full Name
						</dt>
						<dd class="mt-1 text-sm text-stone-900 dark:text-white sm:col-span-2">
							John Doe
						</dd>
					</div>
					<div class="bg-white dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-stone-500 dark:text-stone-400">
							Email
						</dt>
						<dd class="mt-1 text-sm text-stone-900 dark:text-white sm:col-span-2">
							johndoe@example.com
						</dd>
					</div>
					<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt class="text-sm font-medium text-stone-500 dark:text-stone-400">
							Phone
						</dt>
						<dd class="mt-1 text-sm text-stone-900 dark:text-white sm:col-span-2">
							+1 (123) 456-7890
						</dd>
					</div>
				</dl>
			</div>
		</div>
	</div>
</template>

<script setup>
	import {ref, onMounted} from 'vue';
	const props = defineProps({
		persons: Array,
	});

</script>