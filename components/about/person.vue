<template>
	<div class="p-2 px-4">
		<div v-for="(person, idx) in persons" :key="idx">
			<div v-if="person.name === 'Puji Ermanto'">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="col-span-1 w-full md:max-w-md max-w-full">
						<div class="container mx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white">
							<div class="relative z-10" style="clip-path: polygon(0 0, 100% 0, 100% 105%, 0 calc(100% - 5vw));">
								<img class="w-full" :src="$urlFor(person.aboutImage).url()" :alt="person.aboutImage.caption" />
								<div class="text-center absolute w-full" style="bottom: 2rem">
									<p class="text-orange-400 text-center tracking-wide uppercase text-lg font-bold">{{person.aboutImage.caption}} 🕊️🇵🇸فلسطين 🇵🇸🕊️</p>
									<p><a :href="`https://instagram.com/${person.contactInfo.instagram}`" target="_blank" class="text-emerald-400 text-md hover:text-green-500">@{{person.contactInfo.instagram}}</a></p>
								</div>
							</div>
							<div class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
								<p class="flex items-center text-gray-400"><span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>online</p>
								<button @click="downloadCV" class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none text-stone-200 hover:text-stone-400">
									<font-awesome-icon icon="fa-solid fa-download" /> My CV
								</button>
							</div>
							<div class="pt-6 text-gray-600 text-center">
								<span class="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">
									{{person.jobdesk}}
								</span>
								<blockquote v-for="text in person.bio[3].children" class="p-6 text-justify leading-loose">
									<span v-if="text.text !== 'codesyariah122 Blog'">
										{{text.text}}
									</span>
									<span v-else class="text-blue-600 hover:text-blue-700 hover:border-4">
										<a :href="person.bio[3].markDefs[0].href" target="_blank">
											<font-awesome-icon icon="px-2 fa-solid fa-globe" /> {{text.text}}
										</a>
									</span>
								</blockquote>
							</div>
						</div>
					</div>

					<div class="col-span-2 md:col-start-2 py-2">
						<div class="grid grid-cols-1 w-full min-w-xl bg-stone-200 rounded-lg shadow p-6 overflow-auto">
							<div class="bg-white dark:bg-stone-800 shadow-lg overflow-hidden sm:rounded-lg">
								<div class="px-4 sm:px-6">
									<h3 class="text-lg p-4 font-medium text-stone-900 dark:text-white">About Me 📙</h3>
								</div>
								<div class="border-t border-stone-200 dark:border-stone-700">
									<dl>
										<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Full Name
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2 font-semibold">
												{{person.name}}
											</dd>
										</div>
										<div class="bg-white dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Email
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2 font-semibold">
												<a :href="`mailto:${person.contactInfo.email}`" class="text-blue-400 hover:text-blue-500">
													{{person.contactInfo.email}}
												</a>
											</dd>
										</div>
										<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Phone
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2 font-semibold">
												<a :href="`tel:${person.contactInfo.phone}`" class="text-blue-400 hover:text-blue-500">
													{{person.contactInfo.phone}}
												</a>
											</dd>
										</div>
										<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Story
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2 text-indent-8 text-justify">
												<span v-html="person.bio[4].children[0].text"></span>
												<br>
												<span>
													{{person.bio[6].children[0].text}}
												</span>

												<ul class="list-group mb-3">
													<div v-for="item in 11">
														<li v-if="item > 7" class="list-group-item" v-html="person.bio[item].children[0].text"></li>
													</div>
												</ul>

												<br>

												<span v-html="person.bio[14].children[0].text"></span>

												<ul class="list-group mb-3">
													<div v-for="item in 24">
														<li v-if="item > 15" class="list-group-item" v-html="person.bio[item].children[0].text"></li>
													</div>
												</ul>



												<h5 class="mt-5">
													{{person.bio[27].children[0].text}}
												</h5>

												<blockquote class="blockquote-footer mt-5">
													{{person.aboutImage.alt}}
												</blockquote>
											</dd>
										</div>
									</dl>
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
		persons: Array
	});

	const downloadCV = () => {
		window.open('https://github.com/codesyariah122/codesyariah122/blob/main/pujiermanto-fresh-cv.pdf')
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