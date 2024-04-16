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
			// Set loading menjadi true saat melakukan fetch
			loading.value = true;
			const data = await fetchData(apiConfig, configRepo);
			if (data.length > 0) {
				// Set nilai repositories jika data berhasil diambil
				repositories.value = data;
			}
		} catch (error) {
			console.error('Terjadi kesalahan saat memanggil API:', error.message);
		} finally {
			// Set loading menjadi false setelah fetch selesai
			loading.value = false;
		}
	})();

	console.log(repositories?.value)

	const sanity = useSanity()
	const queryPerson = groq`*[_type == "person"]`;
	const querySkill = groq`*[_type == "skillProgramming"]`;
	const dataPerson = await useAsyncData('person', () => sanity.fetch(queryPerson))
	const dataSkill = await useAsyncData('skillProgramming', () => sanity.fetch(querySkill))

	const persons = dataPerson?.data
	const skills = dataSkill?.data
</script>