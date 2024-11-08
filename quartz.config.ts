import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Blog",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "blog.n8nhub.ru",
    ignorePatterns: ["private", "templates", ".obsidian", "my_sketches"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "system", // Используем системные шрифты
      cdnCaching: true,
      typography: {
        header: "Helvetica Neue", // Заменим на Helvetica Neue, ближе всего к macOS
        body: "Helvetica Neue", // Для основного текста
        code: "Menlo", // Для кода используем Menlo
      },
      colors: {
        lightMode: {
          light: "#F9F9F9",      // Фон страницы в стиле macOS
          lightgray: "#E5E5E5",  // Светло-серый
          gray: "#535353",       // Серый цвет для текста
          darkgray: "#333333",   // Тёмно-серый для заголовков
          dark: "#000000",       // Чёрный для основного текста
          secondary: "#007AFF",  // Синий акцент в стиле macOS
          tertiary: "#FFCC00",   // Жёлтый для выделений (например, кнопок)
          highlight: "rgba(0, 122, 255, 0.15)", // Полупрозрачный синий для выделений
          textHighlight: "#FFCC00", // Жёлтый цвет для выделений текста
        },
        darkMode: {
          light: "#1E1E1E",      // Фон для тёмной темы
          lightgray: "#3A3A3A",  // Серый цвет для текста в тёмной теме
          gray: "#6C6C6C",       // Более тёмный серый
          darkgray: "#D3D3D3",   // Светлый серый для заголовков
          dark: "#FFFFFF",       // Белый для основного текста
          secondary: "#0A84FF",  // Голубой акцент для тёмной темы
          tertiary: "#FFD60A",   // Жёлтый акцент для выделений
          highlight: "rgba(10, 132, 255, 0.15)", // Полупрозрачный голубой для выделений
          textHighlight: "#FFD60A", // Жёлтый для выделений текста в тёмной теме
        },
    // theme: {
    //   fontOrigin: "googleFonts",
    //   cdnCaching: true,
    //   typography: {
    //     header: "Schibsted Grotesk",
    //     body: "Source Sans Pro",
    //     code: "IBM Plex Mono",
    //   },
    //   colors: {
    //     lightMode: {
    //       light: "#faf8f8",
    //       lightgray: "#e5e5e5",
    //       gray: "#b8b8b8",
    //       darkgray: "#4e4e4e",
    //       dark: "#2b2b2b",
    //       secondary: "#284b63",
    //       tertiary: "#84a59d",
    //       highlight: "rgba(143, 159, 169, 0.15)",
    //       textHighlight: "#fff23688",
    //     },
    //     darkMode: {
    //       light: "#161618",
    //       lightgray: "#393639",
    //       gray: "#646464",
    //       darkgray: "#d4d4d4",
    //       dark: "#ebebec",
    //       secondary: "#7b97aa",
    //       tertiary: "#84a59d",
    //       highlight: "rgba(143, 159, 169, 0.15)",
    //       textHighlight: "#b3aa0288",
    //     },
      },
    },
    sidebar: {
      showExplorer: true, // Отображение проводника
      showTags: true,     // Отображение тегов
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
