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
    <NuxtPwaManifest />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<script setup>
// If you want to use it in setup, import from the nuxtApp.
  const { $pwa } = useNuxtApp();

  console.log($pwa)

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
        name: 'og:image', content: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/this-is-how-i-roll-cannabis-thc-cbd-stoner-mister-tee.jpg'
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
  });

  onMounted(() => {
    if ($pwa.offlineReady)
      confirm('App ready to work offline')
  });
</script>