<template>
	<div>
		<div v-if="loading">
			<molecules-loading :loading="loading" />
		</div>
		<div v-else>
			<about-person :persons="persons"/>
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

	// console.log(pending.value)

	// if(!pending.value) {
	// 	setTimeout(() => {
	// 		loading.value = false
	// 	}, 1000)
	// }
	
	console.log(dataPerson)
	
	const persons = dataPerson?.data
	const projects = dataPerson?.data


</script>