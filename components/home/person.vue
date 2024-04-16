<template>
	<div class="p-2 px-4">
		<div v-for="(person, idx) in persons" :key="idx">
			<div v-if="person.name === 'Puji Ermanto'">
				<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
					<div class="col-span-1 w-full max-w-sm bg-stone-200 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-2 mb-6 md:h-[85vh] h-auto">
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
								<a href="/about" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">See More About &nbsp;&nbsp; <font-awesome-icon icon="px-2 fa-solid fa-arrow-right-from-bracket" /></a>
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
						<div class="grid grid-cols-1 w-full min-w-xl bg-stone-200 rounded-lg shadow dark:bg-gray-800 p-6 md:h-40 h-48">
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
							<div class="flex justify-start space-x-6 rounded-lg">
								<div class="shrink-0 w-full">
									<h2 class="mb-2 text-3xl font-bold capitalize text-gray-900 dark:text-white">tech stack 🧑🏻‍💻</h2>
								</div>
							</div>
							<div class="grid grid-cols-3 gap-4 py-6">
								<div v-for="skill in skills" :key="Math.random()" class="mb-8">
									<div class="flex justify-between mb-2">
										<span class="text-base font-medium text-blue-700 dark:text-white">
											<img class="h-6" :src="$urlFor(skill.mainImage).url()" :alt="skill.title"/>
										</span>
										<span class="text-sm font-medium text-blue-700 dark:text-white">{{skill.percentage}}%</span>
									</div>
									<div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 -mt-2">
										<div class="bg-blue-600 h-2.5 rounded-full" :style="`width: ${skill.percentage}%`"></div>
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
		skills: Array
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