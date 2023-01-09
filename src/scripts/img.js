/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-var-requires */
const activemembers = require("../data/activemembers")
const blogs = require("../data/blog.js")
const projects = require("../data/projects.json")
const staff = require("../data/staff")

const { azelf } = require("azelf")
const path = require("path")
const { rm } = require("fs/promises")
const trevenant = new (require("trevenant")).Trevenant()

// a function that makes sentences become url friendly endpoints

function urlify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text
}

async function megaAzelf(url, name, type) {
  trevenant.info(`Processing ${name}`)

  await azelf(url, name, {
    directory: path.join(__dirname, "..", "assets", "sources", type),
    webp: true,
    quality: 60,
  })

  trevenant.success(`Finished processing ${name}`)
}

async function main() {
  trevenant.info("Cleaning up old images")

  await rm(path.join(__dirname, "..", "assets", "sources"), {
    recursive: true,
    force: true,
  })

  for await (const member of activemembers.base) {
    megaAzelf(
      `https://github.com/${member.github}.png`,
      `${member.github}.webp`,
      "activemembers",
    )
  }

  for await (const member of staff) {
    megaAzelf(
      `https://github.com/${member.github}.png`,
      `${member.github}.webp`,
      "staff",
    )
  }

  for await (const post of blogs) {
    trevenant.info(`Processing ${post.title}`)

    if (post.screenshot === "") return trevenant.warn(`No screenshot for ${post.title}`)

    await azelf(post.screenshot, `${urlify(post.title)}.webp`, {
      directory: path.join(__dirname, "..", "assets", "sources", "blog"),
      webp: true,
      quality: 60,
    })
  }

  for await (const project of projects.projects) {
    trevenant.info(`Processing ${project.titles}`)
    if (project.screenshot === "") return trevenant.warn(`No screenshot for ${project.titles}`)
    await azelf(project.screenshot, `${urlify(project.title)}.webp`, {
      directory: path.join(__dirname, "..", "assets", "sources", "projects"),
      webp: true,
      quality: 60,
    })
  }
}

main()
