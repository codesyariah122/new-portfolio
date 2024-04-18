<template>
	<div>
		<CCarousel :items-to-show="carouselItemsToShow" :wrap-around="true">
			<CSlide v-for="slide in galleries" :key="slide._key">
				<div class="carousel__item">
					<div class="bg-white rounded-lg shadow-md p-4 h-100">
						<img :src="`${$urlFor(slide.asset)}`" :alt="slide.alt" class="rounded-lg mb-4">
						<h3 class="text-lg font-semibold">{{ slide.caption }}</h3>
					</div>
				</div>
			</CSlide>
			<template #addons>
				<CNavigation />
				<CPagination />
			</template>
		</CCarousel>
	</div>
</template>

<script setup>
	import { ref, onMounted, onBeforeUnmount } from 'vue';

	const props = defineProps({
		galleries: Array
	});


	let carouselItemsToShow = ref(2.5);

	function prev() {
		emit('prev');
	}

	function next() {
		emit('next');
	}

	function updateCarouselItemsToShow() {
		if (window.innerWidth < 768) {
			carouselItemsToShow.value = 1;
		} else {
			carouselItemsToShow.value = 1;
		}
	}

	onMounted(() => {
		updateCarouselItemsToShow();
		window.addEventListener('resize', updateCarouselItemsToShow);
	});

	onBeforeUnmount(() => {
		window.removeEventListener('resize', updateCarouselItemsToShow); 
	});
</script>


<style>
	.carousel__item {
/*		background-color: rgb(134, 239, 172);*/
min-height: 200px;
width: 100%;
font-size: 20px;
border-radius: 8px;
display: flex;
justify-content: center;
align-items: center;
}

.carousel__slide {
	padding: 10px;
}

.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
}
</style>