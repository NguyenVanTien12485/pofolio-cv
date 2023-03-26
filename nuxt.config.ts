// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        link: [
            {
                rel: "stylesheet",
                href: "https://fonts.cdnfonts.com/css/monument-extended",
            },
        ]
    },
    modules: [
        '@nuxtjs/tailwindcss'
    ]
})
