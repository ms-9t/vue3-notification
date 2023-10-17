import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'en-US',
  title: 'Vue.js Notification',
  theme: defaultTheme({
    repo: "https://github.com/kyvg/vue3-notification",
    editLink: false,
    colorMode: "light",
    colorModeSwitch: false,
    navbar: [
      {
        text: "Demo",
        link: '/'
      },
      {
        text: "Get started",
        link: "/guide",
      },
      {
        text: "API Reference",
        link: "/api",
      },
    ]
  }),
})