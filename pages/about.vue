<template>
	<div>
		<div v-if="loading">
			<molecules-loading :loading="loading" />
		</div>
		<div v-else>
			<about-person :persons="persons"/>
			<about-project :projects="projects" :persons="persons"/>
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
		headline: 'About Me 📜',
		title: 'Puji Ermanto - New Portfolio Website',
		description: 'Hello, saya Puji Ermanto biasa dipanggil Uji , saya seorang web developer / programmer, jika kalian membutuhkan jasa webdeveloper atau web programmer untuk membuatkan system atau untuk profile bisnis kalian, kalian bisa kontak saya di website berikut ini, salaam...',
	})

	useHead({
		title: 'About::Me',
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
				name: 'og:image', content: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/this-is-how-i-roll-cannabis-thc-cbd-stoner-mister-tee.jpg'
			}
			],
	});

	useSeoMeta({
		title: 'About::Me',
		ogTitle: 'About::Me',
		description: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya...',
		ogDescription: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya',
		ogImage: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/this-is-how-i-roll-cannabis-thc-cbd-stoner-mister-tee.jpg',
		twitterCard: 'summary_large_image',
	});

	const sanity = useSanity()
	let loading = ref(true)
	const queryPerson = groq`*[_type == "person"] {
		_id,
		name,
		slug,
		jobdesk,
		contactInfo,
		image,
		aboutImage,
		excerpt,
		bio
	}[0...50]`;
	const queryProject = groq`*[_type == "sampleProject"] | order(_createdAt desc) {
		_id,
		title,
		slug,
		categories,
		members,
		startedAt,
		endedAt,
		mainImage,
		excerpt,
		body
	}[0...50]`

	const dataPerson = await useAsyncData('person', () => sanity.fetch(queryPerson))
	const dataProject = await useAsyncData('project', () => sanity.fetch(queryProject))

	setTimeout(() => {
		loading.value = false
	}, 1000)
	
	const persons = dataPerson?.data
	const projects = dataProject?.data


</script>