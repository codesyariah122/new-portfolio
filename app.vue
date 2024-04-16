<style>
  h1,h2,h3,h4,h5 {
    font-family: 'Poppins';
  }
  p, blockquote{
    font-family: 'Montserrat';
  }
</style>
<template>
  <div>
    <div v-show="$pwa.needRefresh" id="toast-interactive" class="w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow" role="alert">
      <div class="flex">
        <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-blue-500 bg-blue-100 rounded-lg">
          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 1v5h-5M2 19v-5h5m10-4a8 8 0 0 1-14.947 3.97M1 10a8 8 0 0 1 14.947-3.97"/>
          </svg>
          <span class="sr-only">Refresh icon</span>
        </div>
        <div class="ms-3 text-sm font-normal">
          <span class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">Update available</span>
          <div class="mb-2 text-sm font-normal">A new software version is available for download.</div> 
          <div class="grid grid-cols-2 gap-2">
            <div>
              <a @click="$pwa.updateServiceWorker()" class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">Update</a>
            </div>
            <div>
              <a class="inline-flex justify-center w-full px-2 py-1.5 text-xs font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200">Not now</a> 
            </div>
          </div>    
        </div>
        <button type="button" class="ms-auto -mx-1.5 -my-1.5 bg-white items-center justify-center flex-shrink-0 text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8" data-dismiss-target="#toast-interactive" aria-label="Close">
          <span class="sr-only">Close</span>
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
          </svg>
        </button>
      </div>
    </div>

    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
// If you want to use it in setup, import from the nuxtApp.
  const { $pwa } = useNuxtApp()
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
        name: 'og:image', content'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/this-is-how-i-roll-cannabis-thc-cbd-stoner-mister-tee.jpg'
      }
      ],
  });

  useSeoMeta({
    title: 'PUJIERMANTO::PORTFOLIO',
    ogTitle: 'PUJIERMANTO::PORTFOLIO',
    description: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya...',
    ogDescription: 'Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya',
    ogImage: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/this-is-how-i-roll-cannabis-thc-cbd-stoner-mister-tee.jpg',
    twitterCard: 'summary_large_image',
  })

  onMounted(() => {
    if ($pwa.offlineReady)
      confirm('App ready to work offline')
  })
</script>