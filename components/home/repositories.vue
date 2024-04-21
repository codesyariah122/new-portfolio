<template>
	<div class="mt-16 p-4 px-4">
		<div class="grid grid-cols-1 mb-36">
			<div class="col-span-full">
				<div class="w-full min-w-xl bg-stone-400 border border-gray-600 rounded-lg shadow-2xl p-4 h-auto">
					<div class="grid grid-cols-1 place-content-center place-items-center mb-8">
						<div>
							<h2 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
								My Stargazers <font-awesome-icon icon="px-2 fa-brands fa-github-alt" />
							</h2>
						</div>
					</div>
					<div class="grid grid-cols-1 md:grid md:grid-cols-3 gap-4 ">
						<div v-for="repo in repositories.slice(0, visibleRepos)" :key="repo.id">
							<div class="w-full max-w-sm bg-stone-200 border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
								<div class="px-5 pb-5">
									<a :href="repo.html_url" target="_blank">
										<h5 class="text-xl font-semibold capitalize tracking-tight text-gray-900 dark:text-white">
											{{repo?.name}}
										</h5>
										<blockquote class="text-sm">
											{{repo?.description}}
										</blockquote>
									</a>
									<div class="flex items-center mt-2.5 mb-5">
										<div v-for="num in repo?.stargazers_count" :key="num" class="flex items-center space-x-1 rtl:space-x-reverse">
											<svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
												<path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
											</svg>
										</div>
										<span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
											{{repo?.stargazers_count}}
										</span>
									</div>
									<div class="flex items-center justify-between">
										<img v-if="repo.language === 'SCSS'" src="/img/logos/sass.png" class="h-6"/>

										<img v-if="repo.language === 'PHP'" src="/img/logos/php.png" class="h-6"/>
										
										<img v-if="repo.language === 'Vue'" src="/img/logos/vue.png" class="h-6"/>

										<img v-if="repo.language === 'Html'" src="/img/logos/html5.png" class="h-6"/>

										<img v-if="repo.language === 'CSS'" src="/img/logos/css3.png" class="h-6"/>

										<img v-if="repo.language === 'JavaScript'" src="/img/logos/js.png" class="h-6"/>

										<img v-if="repo.language === 'TypeScript'" src="/img/logos/typescript.png" class="h-6"/>

										<img v-if="repo.language === '' || repo.language === null || repo.language === undefined" src="/img/logos/bash.png" class="h-6"/>

										<a @click="redirectRepo(repo.html_url)" class="text-gray-700 bg-transparent border-2 border-gray-600 hover:bg-blue-800 hover:text-white hover:border-0 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer">Go To Repo <font-awesome-icon icon="px-2 fa-solid fa-arrows-turn-right" /></a>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-1 py-12">
						<div class="col-span-full place-self-center">
							<button v-if="visibleRepos < repositories.length" @click="triggerLoadMore"  class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
								<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
									Load More <font-awesome-icon icon="fa-solid fa-caret-down" /> <br>

									<small class="text-sm text-red-600">
										{{visibleRepos}} || {{repositories.length}}
									</small>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		repositories: Array,
		visibleRepos: Number
	});
	const emit = defineEmits(['load-more']);

	function redirectRepo(url) {
		window.open(url)
	}

	function triggerLoadMore() {
		emit('load-more');
	}
</script>