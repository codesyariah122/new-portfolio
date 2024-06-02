<template>
	<div>
		<div v-if="loading">
			<molecules-loading :loading="loading" />
		</div>
		<div v-else>
			<home-person :persons="persons" :skills="skills" :visibleRepos="visibleRepos" :repositories="repositories" @load-more="loadMore" :loadingMore="loadingMore"/>
			<!-- <div v-if="loading" class="grid grid-cols-1 py-12">
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
			<home-repositories v-else :visibleRepos="visibleRepos" :repositories="repositories" @load-more="loadMore" :loadingMore="loadingMore"/> -->

			<home-banner />
		</div>
	</div>
</template>

<script setup>
	import {ref} from 'vue';
	import {fetchData} from '~/hooks';

	definePageMeta({
		layout: 'default'
	})

	defineOgImageComponent('Nuxt', {
		headline: 'Greetings 👋',
		title: 'Selamat Datang di Portfolio Puji Ermanto',
		description: 'Hello, saya Puji Ermanto biasa dipanggil Uji , saya seorang web developer / programmer, jika kalian membutuhkan jasa webdeveloper atau web programmer untuk membuatkan system atau untuk profile bisnis kalian, kalian bisa kontak saya di website berikut ini, salaam...',
	})

	useHead({
		title: 'PujiErmanto::Portfolio',
		meta: [
			{ name: 'description', content: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya' },
			{
				name: 'og:title', content: 'PUJIERMANTO::PORTFOLIO'
			},
			{
				name: 'description', content: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya...'
			},
			{
				name: 'og:description', content: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya'
			},
			{
				name: 'og:image', content: 'https://i.pinimg.com/736x/6d/c4/a3/6dc4a3d89d4b809acb88f44e47a4ffb9.jpg'
			}
			],
	});

	useSeoMeta({
		title: 'PUJIERMANTO::PORTFOLIO',
		ogTitle: 'PUJIERMANTO::PORTFOLIO',
		description: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya...',
		ogDescription: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya',
		ogImage: 'https://i.pinimg.com/736x/6d/c4/a3/6dc4a3d89d4b809acb88f44e47a4ffb9.jpg',
		twitterCard: 'summary_large_image',
	});

	const config = useRuntimeConfig()
	const apiConfig = {
		github_url: config.public.NUXT_APP_GITHUB_API_URL,
		github_user: config.public.NUXT_APP_GITHUB_USER,
		github_token: config.public.NUXT_APP_ACCESS_TOKEN
	}
	const configRepo = {
		page: 1,
		sort: 'created',
		per_page: 37
	};
	let repositories = ref([]);
	let loading = ref(false);
	let loadingMore = ref(false);
	const visibleRepos = ref(15);

	(async () => {
		try {
			loading.value = true;
			const data = await fetchData(apiConfig, configRepo);
			if (data.length > 0) {
				repositories.value = data;
			}
		} catch (error) {
			console.error('Terjadi kesalahan saat memanggil API:', error.message);
		} finally {
			loading.value = false;
		}
	})();

	const sanity = useSanity()
	const queryPerson = groq`*[_type == "person"]`;
	const querySkill = groq`*[_type == "skillProgramming"]`;
	const dataPerson = await useAsyncData('person', () => sanity.fetch(queryPerson))
	const dataSkill = await useAsyncData('skillProgramming', () => sanity.fetch(querySkill))

	const persons = dataPerson?.data
	const skills = dataSkill?.data

	function loadMore() {
		loadingMore.value = true;
		setTimeout(() => {
			visibleRepos.value += 15;
			loadingMore.value = false;
		}, 1000)
	}
</script>