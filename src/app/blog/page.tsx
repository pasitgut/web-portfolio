import { getAllPosts } from "../lib/blog";
import Link from "next/link";

export default function Page() {
    const posts = getAllPosts();

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 border rounded hover:bg-gray-50">
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-sm text-gray-500">{post.date}</p>
              <p className="mt-2 text-gray-700">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    )
}