<template>
	<div class="p-2 px-4">
		<div v-for="(person, idx) in persons" :key="idx">
			<div v-if="person.name === 'Puji Ermanto'">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="col-span-1 w-full max-w-md">
						<div class="container mx-auto rounded-lg overflow-hidden shadow-lg my-2 bg-white">
							<div class="relative z-10" style="clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));">
								<img class="w-full" :src="$urlFor(person.aboutImage).url()" :alt="person.aboutImage.caption" />
								<div class="text-center absolute w-full" style="bottom: 4rem">
									<p class="text-yellow-100 tracking-wide uppercase text-lg font-bold">{{person.aboutImage.caption}}</p>
									<p><a :href="`https://instagram.com/${person.contactInfo.instagram}`" target="_blank" class="text-green-100 text-md hover:text-green-400">@{{person.contactInfo.instagram}}</a></p>
								</div>
							</div>
							<div class="relative flex justify-between items-center flex-row px-6 z-50 -mt-10">
								<p class="flex items-center text-gray-400"><span class="inline-block w-3 h-3 bg-green-500 rounded-full mr-2"></span>online</p>
								<button class="p-4 bg-red-600 rounded-full hover:bg-red-500 focus:bg-red-700 transition ease-in duration-200 focus:outline-none">
									<svg viewBox="0 0 20 20" enable-background="new 0 0 20 20" class="w-6 h-6">
										<path fill="#FFFFFF" d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
										C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
										C15.952,9,16,9.447,16,10z" />
									</svg>
								</button>
							</div>
							<div class="pt-6	 text-gray-600 text-center">
								<p>{{person.jobdesk}}</p>
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
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2">
												{{person.name}}
											</dd>
										</div>
										<div class="bg-white dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Email
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2">
												{{person.contactInfo.email}}
											</dd>
										</div>
										<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Phone
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2">
												{{person.contactInfo.phone}}
											</dd>
										</div>
										<div class="bg-stone-50 dark:bg-stone-800 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
											<dt class="text-md font-medium text-stone-500 dark:text-stone-400">
												Story
											</dt>
											<dd class="mt-1 text-md text-stone-900 dark:text-white sm:col-span-2">
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