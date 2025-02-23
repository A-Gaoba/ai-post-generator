"use client"

import { useState } from "react"
import { Edit2, Copy, Trash2, Check } from "lucide-react"

type PostListProps = {
  posts: string[]
  deletePost: (index: number) => void
}

export default function PostList({ posts, deletePost }: PostListProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [editedPost, setEditedPost] = useState("")
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleEdit = (index: number) => {
    setEditIndex(index)
    setEditedPost(posts[index])
  }

  const handleSave = (index: number) => {
    const newPosts = [...posts]
    newPosts[index] = editedPost
    deletePost(index)
    setEditIndex(null)
  }

  const handleCopy = async (post: string, index: number) => {
    await navigator.clipboard.writeText(post)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Generated Posts</h2>
      <div className="grid gap-4">
        {posts.map((post, index) => (
          <div key={index} className="group relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              {editIndex === index ? (
                <textarea
                  value={editedPost}
                  onChange={(e) => setEditedPost(e.target.value)}
                  className="w-full px-4 py-2 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 mb-4"
                  rows={4}
                />
              ) : (
                <p className="text-gray-700 dark:text-gray-300 mb-4">{post}</p>
              )}
              <div className="flex justify-end space-x-2">
                {editIndex === index ? (
                  <button
                    onClick={() => handleSave(index)}
                    className="flex items-center space-x-1 px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    <Check className="w-4 h-4" />
                    <span>Save</span>
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(index)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleCopy(post, index)}
                      className="flex items-center space-x-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check className="w-4 h-4 text-green-500" />
                          <span className="text-green-500">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                    <button
                      onClick={() => deletePost(index)}
                      className="flex items-center space-x-1 px-4 py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors duration-200"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

