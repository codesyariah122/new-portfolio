// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  nitro: {
    externals: {
      inline: ['unenv']
    }
  },

  ssr: true,
  target: 'server',

  runtimeConfig: {
    public: {
      NUXT_APP_GITHUB_API_URL: process.env.NUXT_APP_GITHUB_API_URL,
      NUXT_APP_GITHUB_USER: process.env.NUXT_APP_GITHUB_USER,
      NUXT_APP_ACCESS_TOKEN: process.env.NUXT_APP_ACCESS_TOKEN,
      NUXT_APP_GALLERY_URL: process.env.NUXT_APP_GALLERY_URL,
      NUXT_APP_GITHUB_GRAPHQL_URL: process.env.NUXT_APP_GITHUB_GRAPHQL_URL,
    },
    private: {
      NUXT_APP_ACCESS_TOKEN: process.env.NUXT_APP_ACCESS_TOKEN
    }
  },

  alias: {
    // "@": resolve(__dirname, "/")
    assets: "/<rootDir>/assets"
  },

  body: true,
  components: true,

  head: {
    title: "PujiErmanto::Portfolio",
  },

  css: [
    "@/assets/css/main.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  modules: [
    'nuxt-og-image',
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    'vue3-carousel-nuxt',
    '@vite-pwa/nuxt',
    '@stefanobartoletti/nuxt-social-share',
    ['@nuxtjs/google-fonts', {
      families: {
        Poppins: true,
        Montserrat: true,
        Roboto: true,
        // Inter: [400, 700],
        'Josefin+Sans': true,
        Lato: [100, 300],
        Raleway: {
          wght: [100, 400],
          ital: [100]
        },
        Inter: '200..700',
        'Crimson Pro': {
          wght: '200..900',
          ital: '200..700',
        }
      }
    }],
    "@nuxt/image"
  ],

  carousel: {
    prefix: 'C'
  },

  sanity: {
    projectId: process.env.NUXT_APP_PROJECTID,
    apiVersion: '2022-05-08'
  },

  device: {
    refreshOnResize: true
  },

  pwa: {
    meta: {
      title: "PUJIERMANTO::PORTFOLIO",
      author: "Puji Ermanto",
      icon: true,
      canonical: "https://pujiermanto-portfolio.vercel.app/",
      description: "",
      keywords: "PUJI ERMANTO-My PORTFOLIO",
      ogUrl: "https://pujiermanto-portfolio.vercel.app/",
      ogType: "website",
      ogSiteName: "PUJIERMANTO::PORTFOLIO",
      ogTitle: "PUJIERMANTO::PORTFOLIO",
      ogImage: "https://pujiermanto-portfolio.vercel.app/icon.png",
      ogImageWidth: "600",
      ogImageHeight: "400",
    },
    manifest: {
      lang: "en",
      name: "PUJIERMANTO::PORTFOLIO",
      short_name: "PUJIERMANTO::PORTFOLIO",
      description: "Halo, Saya Puji Ermanto biasa di panggil Uji / Puji Saya seorang professional web developer jika kalian ingin dibuatkan web silahkan hubungi saya",
      start_url: "https://pujiermanto-portfolio.vercel.app/",
      lang: "en",
      display: "standalone",
      theme_color: "#000",
      background_color: "#000",
      icons: [
        {
          src: "/img/icons/android-launchericon-48-48.png",
          sizes: "48x48",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/img/icons/android-launchericon-72-72.png",
          sizes: "72x72",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/img/icons/android-launchericon-96-96.png",
          sizes: "96x96",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/img/icons/android-icon-144x144.png",
          sizes: "144x144",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/img/icons/152.png",
          sizes: "152x152",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/img/icons/android-launchericon-192-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "maskable any",
        },
        {
          src: "/img/icons/android-launchericon-512-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "maskable any",
        },
      ],
    },
  },

  buildModules: [
    '@nuxtjs/dotenv'
  ],

  plugins: [
    '~/plugins/fontawesome',
    '~/plugins/sanity-image-url',
  ],

  compatibilityDate: "2025-03-17"
})