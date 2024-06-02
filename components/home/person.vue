<template>
	<div class="p-4 px-4">
		<div v-for="(person, idx) in persons" :key="idx">
			<div v-if="person.name === 'Puji Ermanto'">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="col-span-1 w-full max-w-md bg-stone-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mb-6 md:h-[75vh] h-auto">
						<div class="flex flex-col items-center pb-10">
							<img class="w-48 h-48 mb-3 rounded-full shadow-lg" :src="$urlFor(person.image).url()" :alt="person.image.caption"/>
							<span class="bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500">
								{{person.image.caption}} 🙋🏻‍
							</span>
							<blockquote class="text-left py-4 p-6 overflow-hidden text-dark-700">
								<span class="font-semibold">{{person.bio[0].children[0].text}} 🙏</span> <br>
								<span>{{person.bio[2].children[0].text}} ...</span>
							</blockquote>
							<div class="flex mt-4 md:mt-6">
								<NuxtLink to="/about" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
									See More About &nbsp;&nbsp; <font-awesome-icon icon="px-2 fa-solid fa-arrow-right-from-bracket" />
								</NuxtLink>
								<a @click="whatsappRedirect" class="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><font-awesome-icon icon="px-2 fa-brands fa-whatsapp" /> Chat Me</a>
							</div>
						</div>
						<div class="flex justify-center space-x-2 items-center pb-10">
							<a :href="`https://www.linkedin.com/in/${person.contactInfo.linkedin}`" class="py-2 px-4 ms-2 md:text-sm text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><font-awesome-icon icon="px-2 fa-brands fa-linkedin" /> <span class="md:block hidden">Linkedin</span></a>
							<a :href="`https://instagram.com/${person.contactInfo.instagram}`" class="py-2 px-4 ms-2 md:text-sm text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><font-awesome-icon icon="px-2 fa-brands fa-instagram" /> <span class="md:block hidden">Instgram</span> </a>
							<a :href="`https://github.com/${person.contactInfo.github}`" class="py-2 px-4 ms-2 md:text-sm text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"><font-awesome-icon icon="px-2 fa-brands fa-github" /> <span class="md:block hidden">Github</span></a>
						</div>
					</div>

					<div class="col-span-2 md:col-start-2">
						<div class="grid grid-cols-1 w-full min-w-xl bg-stone-200 rounded-lg shadow p-6 md:h-40 h-48 overflow-auto">
							<div class="flex justify-between flex-col space-x-6 rounded-lg md:flex-row md:max-w-xl">
								<div class="shrink-0 w-80">
									<h2 class="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{{person.name}}</h2>
									<a href="https://dksindo.com" class="md:hidden block bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
										{{person.jobdesk}} 💻
									</a>
								</div>
								<div class="md:mt-0 mt-4">
									<div class="md:hidden block grid grid-cols-1">
										<div>
											<h2 class="font-semibold">Share To : </h2>
										</div>
									</div>
									<div class="flex justify-start space-x-2">
										<div class="md:block hidden">
											<SocialShare network="email" :styled="true" :label="true"/>
										</div>
										<div class="md:hidden block">
											<SocialShare network="email" :styled="true" :label="false"/>
										</div>
										<div class="md:block hidden">
											<SocialShare network="facebook" :styled="true" :label="true"/>
										</div>
										<div class="md:hidden block">
											<SocialShare network="facebook" :styled="true" :label="false"/>
										</div>
										<div class="md:block hidden">
											<SocialShare network="linkedin" :styled="true" :label="true"/>
										</div>
										<div class="md:hidden block">
											<SocialShare network="linkedin" :styled="true" :label="false"/>
										</div>
										<div class="md:block hidden">
											<SocialShare network="whatsapp" :styled="true" :label="true"/>
										</div>
										<div class="md:hidden block">
											<SocialShare network="whatsapp" :styled="true" :label="false"/>
										</div>
									</div>
								</div>
							</div>
							<div class="md:block hidden grid grid-cols-1 md:-mt-8 mt-6">
								<div class="col-span-full">
									<a href="https://dksindo.com" class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
										{{person.jobdesk}} 💻
									</a>
								</div>
							</div>
						</div>

						<div class="grid grid-cols-1 w-full min-w-xl bg-stone-200 rounded-lg shadow dark:bg-gray-800 p-6 mt-6 h-auto">
							<!-- <div class="flex justify-start space-x-6 rounded-lg">
								<div class="shrink-0 w-full">
									<h2 class="mb-2 text-3xl font-bold capitalize text-gray-900 dark:text-white">tech stack 🧑🏻‍💻</h2>
								</div>
							</div>
							<div class="grid grid-cols-3 gap-4 py-6">
								<div v-for="skill in skills" :key="Math.random()" class="skills-grid-item mb-8 relative">
									<div class="flex justify-between mb-2.5">
										<span class="text-base font-medium text-blue-700 dark:text-white">
											<img class="h-6" :src="$urlFor(skill.mainImage).url()" :alt="skill.title"/>
										</span>
										<span class="text-sm font-medium text-blue-700 dark:text-white">{{skill.percentage}}%</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 -mt-2">
										<div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${skill.percentage}%`"></div>
									</div>
									<div class="absolute right-0 top-0 bottom-0 border-l border-gray-300 dark:border-gray-600"></div>

								</div>
							</div> -->
							<div class="grid grid-cols-1">
								<div class="col-span-full">
									<div class="w-full min-w-xl border border-gray-100 rounded-lg p-4">
										<div class="grid grid-cols-1 place-content-center place-items-center mb-8">
											<div>
												<h2 class="mb-2 text-4xl font-bold tracking-tight text-gray-700 dark:text-white">
													My Stargazers <font-awesome-icon icon="px-2 fa-brands fa-github-alt" />
												</h2>
											</div>
										</div>
										<div class="grid grid-cols-1 md:grid md:grid-cols-3 gap-4 ">
											<div v-for="repo in repositories.slice(0, visibleRepos)" :key="repo.id">
												<div class="w-full max-w-sm bg-stone-300 border border-gray-100 rounded-lg shadow-xl">
													<div class="px-5 pb-5 p-4">
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

										<div v-if="loadingMore" class="grid grid-cols-1 py-12">
											<div class="col-span-full place-self-center">
												<div class="text-center text-xl">
													<div role="status">
														<svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
															<path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
														</svg>
														<span class="sr-only">Loading...</span>
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
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
	const props = defineProps({
		persons: Array,
		skills: Array,
		repositories: Array,
		visibleRepos: Number,
		loadingMore: Boolean
	});

	const emit = defineEmits(['load-more']);

	function redirectRepo(url) {
		window.open(url)
	}

	function triggerLoadMore() {
		emit('load-more');
	}

	function whatsappRedirect() {
		const whatsappNumber = '6288222668778';
		const name = 'Puji'

		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=`;
		const text = `Halo, ${name} saya ingin berkonsultasi seputar IT dan Website...`;
		const encodeText = encodeURIComponent(text);
		window.open(`${whatsappUrl}${encodeText}`)
	}
</script>

<style scoped lang="css">
	.skills-grid-item {
		padding-right: 5px;
	}

	.skills-grid-item:last-child {
		padding-right: 5px;
	}

	.skills-grid-item .absolute {
		width: 5px;
	}
</style>