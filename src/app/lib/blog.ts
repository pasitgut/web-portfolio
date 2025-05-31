import fs from 'fs/promises'
import path from 'path'
import matter from 'gray-matter'

const postDirectory = path.join(process.cwd(), 'public/content/blog') // หรือโฟลเดอร์ Markdown ของคุณ

export async function getAllPosts() {
  const fileNames = await fs.readdir(postDirectory)

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postDirectory, fileName)
      const fileContents = await fs.readFile(fullPath, 'utf8')

      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title,
        date: data.date,
        description: data.description,
        content,
      }
    })
  )

  return posts.sort((a, b) => b.date.localeCompare(a.date))
}
