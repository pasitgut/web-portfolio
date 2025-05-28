import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html"

const postDirectory = path.join(process.cwd(), 'public/content/blog')

export function getAllPosts() {
    const fileNames = fs.readdirSync(postDirectory);

    return fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const { data, content } = matter(fileContents);

        return {
            slug, 
            title: data.title, 
            date: data.date,
            description: data.description,
            content,
        }
    }).sort((a,b) => b.date.localeCompare(a.date))
}
