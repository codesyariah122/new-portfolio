<template>
	<div class="p-4 px-4">
		<div class="grid grid-cols-1 mb-36">
			<div class="col-span-full">
				<div class="w-full min-w-xl bg-stone-300 border border-stone-600 rounded-lg shadow-2xl p-4 h-auto">
					<div class="grid grid-cols-1">
						<div class="col-span-full">
							<div class="bg-center bg-no-repeat bg-gray-700 bg-blend-multiply" :style="`background-image: url('${$urlFor(project.mainImage)}')`">
								<div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
									<h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white border-4 md:text-5xl lg:text-6xl">
										{{project.title}}
									</h1>
								</div>
							</div>
						</div>
					</div>

					<div class="grid grid-cols-1">
						<div class="col-span-full p-6">
							<button @click="backTo" type="button" class="max-w-md w-md text-center text-white bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-emerald-300 font-medium rounded-lg text-sm p-2">
								<font-awesome-icon icon="px-2 fa-solid fa-chevron-left" /> Kembali
							</button>
						</div>
					</div>
					<div class="grid grid-cols-1 py-2 mb-4">
						<div class="col-span-full max-w-md md:w-full w-90 p-6 indent-8 text-justify">
							<project-block :blocks="project.body"  />
						</div>
					</div>
					<div class="grid grid-cols-1">
						<div class="col-span-full py-6 p-4">
							<h3>Project Galleries :</h3>
							<blockquote class="mt-2">
								Sedikit dokumentasi hasil kerja saya sebagai : <strong class="capitalize"> {{project.title}} </strong>
							</blockquote>
						</div>
						<div>
							<project-gallery :galleries="project.imagesGallery" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>

	definePageMeta({
		layout: 'default'
	})
	let router = useRouter()
	const route = useRoute()
	const slug = route.params.slug
	const sanity = useSanity()
	const config = useRuntimeConfig()
	const apiConfig = {
		image_url: config.public.NUXT_APP_GALLERY_URL
	}

	const queryPerson = `*[_type == "person"] {
		_id,
		name,
		slug,
		jobdesk,
		contactInfo,
		image,
		aboutImage,
		excerpt,
		bio
	}[3]`

	const queryProject = `*[slug.current == $slug] {
		_id,
		title,
		slug,
		categories,
		members,
		startedAt,
		endedAt,
		mainImage,
		imagesGallery,
		excerpt,
		body,
		linksVideo
	}[0]`
	const dataPerson = await useAsyncData('person', () => sanity.fetch(queryPerson))
	const dataProject = await useAsyncData('project', () => sanity.fetch(queryProject, {slug: slug}))

	const persons = dataPerson?.data
	const project = dataProject?.data

	const backTo = () => {
		router.push('/about')
	}

	defineOgImageComponent('Nuxt', {
		headline: `Detail Project -  ${dataProject?.data?.title}`,
		title: `PujiErmanto on ${dataProject?.data?.title}`,
		description: `Hello, ini adalah pengalamanku saat bekerja di ${dataProject?.data?.title}`,
	})

	useHead({
		title: `DetailProject::${dataProject?.data?.title}`,
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
		title: `DetailProject::${dataProject?.data?.title}`,
		ogTitle: `DetailProject::${dataProject?.data?.title}`,
		description: `Hello, ini adalah pengalamanku saat bekerja di ${dataProject?.data?.title}`,
		ogDescription: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya',
		ogImage: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/this-is-how-i-roll-cannabis-thc-cbd-stoner-mister-tee.jpg',
		twitterCard: 'summary_large_image',
	});
</script>