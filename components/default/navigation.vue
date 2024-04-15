<template>
	<nav :class="`${isSticky ? 'sticky shadow-lg' : ''} top-0 z-50 border-stone-200 bg-stone-200 dark:bg-stone-800 dark:border-stone-700 navbar`" :style="{ opacity: isSticky ? 1 : 0.7 }">		
		<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
			<a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
				<img src="~/public/img/logo.png" :class="`${isSticky ? 'h-14' : 'h-10'}`" alt="Flowbite Logo" />
			</a>
			<button @click="toggleMenu" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-stone-900 rounded-lg md:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:focus:ring-stone-600" aria-controls="navbar-solid-bg" aria-expanded="false">
				<span class="sr-only">Open main menu</span>
				<svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
				</svg>
			</button>
			<div :class="`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`" id="navbar-solid-bg">
				<ul class="flex flex-col font-medium mt-4 rounded-lg bg-stone-200 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-stone-800 md:dark:bg-transparent dark:border-stone-700">
					<li>
						<a href="#" class="block py-2 px-3 md:p-0 text-stone-800 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
					</li>
					<li>
						<a href="#" class="block py-2 px-3 md:p-0 text-stone-800 rounded hover:bg-stone-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-stone-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>

<script setup>
	import { ref, onMounted, onUnmounted } from 'vue';

	const isSticky = ref(false);
	const isMenuOpen = ref(false);

	const handleScroll = () => {
		isSticky.value = window.pageYOffset > 0;
	};

	onMounted(() => {
		window.addEventListener('scroll', handleScroll);
	});

	onUnmounted(() => {
		window.removeEventListener('scroll', handleScroll);
	});

	function toggleMenu() {
		console.log("clicked")
		isMenuOpen.value = !isMenuOpen.value;
	}
</script>