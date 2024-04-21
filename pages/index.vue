<template>
	<div>
		<div v-if="loading">
			<molecules-loading :loading="loading" />
		</div>
		<div v-else>
			<home-person :persons="persons" :skills="skills"/>
			<home-repositories :visibleRepos="visibleRepos" :repositories="repositories" @load-more="loadMore"/>
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
	const visibleRepos = ref(15);

	(async () => {
		try {
			loading.value = true;
			const data = await fetchData(apiConfig, configRepo);
			if (data.length > 0) {
				console.log(data.length)
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
		visibleRepos.value += 15;
	}
</script>