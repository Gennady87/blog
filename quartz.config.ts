import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "✓ Blog",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ru-RU",
    baseUrl: "blog.n8nhub.ru",
    ignorePatterns: ["private", "templates", ".obsidian", "my_sketches", "Drafts", "Community"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#eceff4",      // nord6
          lightgray: "#e5e9f0",  // nord5
          gray: "#4c566a",       // nord3
          darkgray: "#3b4252",   // nord1
          dark: "#2e3440",       // nord0
          secondary: "#88c0d0",  // nord8
          tertiary: "#81a1c1",   // nord9
          highlight: "rgba(136, 192, 208, 0.15)", // nord8 with alpha
        },
        darkMode: {
          light: "#2e3440",      // nord0
          lightgray: "#3b4252",  // nord1
          gray: "#4c566a",       // nord3
          darkgray: "#d8dee9",   // nord4
          dark: "#eceff4",       // nord6
          secondary: "#88c0d0",  // nord8
          tertiary: "#81a1c1",   // nord9
          highlight: "rgba(136, 192, 208, 0.15)", // nord8 with alpha
        },
      },
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
