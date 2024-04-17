<template>
	<div class="mt-16 p-4 px-4">
		<div class="grid grid-cols-1 mb-36">
			<div class="col-span-full">
				<div class="w-full min-w-xl bg-stone-300 border border-stone-600 rounded-lg shadow-2xl p-4 h-auto">
					<div class="grid grid-cols-1 place-content-center place-items-center mb-8">
						<div>
							<h2 class="mb-2 text-4xl font-bold tracking-tight text-white dark:text-white">
								My Projects <font-awesome-icon icon="px-2 fa-solid fa-briefcase" />
							</h2>
						</div>
					</div>

					<div class="grid grid-cols-1 md:grid md:grid-cols-2 gap-4">
						<div v-for="project in projects" :key="project._id">
							<div class="grid grid-cols-1 bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
								<div class="grid grid-cols-1">
									<div class="col-span-full">
										<img class="object-cover w-full rounded-t-sm h-96" :src="$urlFor(project.mainImage).url()" :alt="project.mainImage.alt">
									</div>
								</div>
								<div class="grid grid-cols-1">
									<div class="col-span-full">
										<div class="col-span-full md:shrink-0">
											<div class="grid grid-cols-1 p-2 leading-normal">
												<div class="col-span-full">	
													<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">
														{{project.title}}
													</h5>
												</div>
											</div>
											<div class="grid grid-cols-1">
												<div class="col-span-full">
													<p class="mb-3 text-md font-normal text-gray-700 truncate  text-nowrap">
														{{project.excerpt[0].children[0].text}}
													</p>
												</div>
											</div>

											<div class="grid grid-cols-1">
												<div class="place-self-start">
													<h5 class="text-stone-400 font-semibold text-sm">Team Member : </h5>
													<div class="flex justify-start space-x-2 p-2" v-if="project.members !== null">
														<div v-for="person in persons" :key="person._id">
															<div v-for="member in project.members">
																<img v-if="member.person._ref === person._id" class="w-6 h-6 mb-3 rounded-full shadow-lg" :src="$urlFor(person.image).url()" :alt="person.image.alt"/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div class="grid grid-cols-1 p-6 mb-2">
									<div class="col-span-full">
										<a :href="`/project/${project?.slug?.current}`" type="button" class="max-w-lg w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2">
											<font-awesome-icon icon="px-2 fa-solid fa-circle-info" /> Detail Project
										</a>
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
		projects: Array,
		persons: Array
	});
	const router = useRouter()

	const detailProject = (slug) => {
		router.push({path: `/project/${slug}`})
	}
</script>