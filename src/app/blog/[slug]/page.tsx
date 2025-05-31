import { markdownToHtml } from '../../lib/markdownToHtml'
import { getAllPosts } from '../../lib/blog'
import { notFound } from 'next/navigation'

export default async function BlogPostPage({ params}: { params: { slug: string }}) {
    params = await params;
    const posts = await getAllPosts();
    const post = posts.find(p => p.slug === params.slug);
  
    if (!post) return notFound();
  
  const contentHtml = await markdownToHtml(post.content)

  return (
    <div className="max-w-3xl mx-auto px-4 py-8 prose prose-lg">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  )
}
