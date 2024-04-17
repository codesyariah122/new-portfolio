<template>
	<div>
		<div v-if="loading">
			<molecules-loading :loading="loading" />
		</div>
		<div v-else>
			<home-person :persons="persons" :skills="skills"/>
			<home-repositories :repositories="repositories" />
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
		headline: 'Greetings',
		title: 'Hello OG Image 👋',
		description: 'Look what at me using the Nuxt template',
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
		per_page: 25
	};
	let repositories = ref([]);
	let loading = ref(false);

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
</script>