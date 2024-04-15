<template>
	<div>
		<home-person :persons="persons" :skills="skills"/>

		<home-repositories :repositories="repositories" />
	</div>
</template>

<script setup>
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
		per_page: 15
	};

	const { data: repos, error: repoError } = useAsyncData('github-repo', async () => {
		try {
			const endPoint = `${apiConfig.github_url}${apiConfig.github_user}/repos?page=${configRepo.page}&sort=${configRepo.sort}&per_page=${configRepo.per_page}`;

			const response = await fetch(endPoint, {
				headers: {
					Authorization: `Bearer ${apiConfig.github_token}`
				}
			});

			if (!response.ok) {
				throw new Error('Gagal mendapatkan data dari API');
			}

			const data = await response.json();

			return data;
		} catch (error) {
			console.error('Terjadi kesalahan saat memanggil API:', error.message);
			throw error;
		}
	});

	console.log(repos.value)

	const sanity = useSanity()
	const queryPerson = groq`*[_type == "person"]`;
	const querySkill = groq`*[_type == "skillProgramming"]`;
	const dataPerson = await useAsyncData('person', () => sanity.fetch(queryPerson))
	const dataSkill = await useAsyncData('skillProgramming', () => sanity.fetch(querySkill))

	const persons = dataPerson?.data
	const skills = dataSkill?.data
	const repositories = repos && repos?.value
</script>