"use client"

import { useState, useEffect } from "react"
import Form from "../../components/Form"
import PostList from "../../components/PostList"
import DarkModeToggle from "../../components/DarkModeToggle"
import { ArrowLeft, Sparkles, History } from "lucide-react"
import Link from "next/link"

export default function CreatePage() {
  const [posts, setPosts] = useState<string[]>([])
  const [history, setHistory] = useState<string[]>([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedPosts = localStorage.getItem("posts")
    const savedHistory = localStorage.getItem("history")
    if (savedPosts) setPosts(JSON.parse(savedPosts))
    if (savedHistory) setHistory(JSON.parse(savedHistory))
  }, [])

  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts))
    localStorage.setItem("history", JSON.stringify(history))
  }, [posts, history])

  const addPost = (post: string) => {
    setPosts([...posts, post])
    setHistory([...history, post])
  }

  const deletePost = (index: number) => {
    const newPosts = posts.filter((_, i) => i !== index)
    setPosts(newPosts)
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 min-h-screen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob" />
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-2000" />
          <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-blob animation-delay-4000" />
        </div>

        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <Link
                href="/"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              <div className="flex items-center space-x-4">
                <Link
                  href="/history"
                  className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
                >
                  <History className="w-5 h-5 mr-2" />
                  View History
                </Link>
                <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
              </div>
            </div>

            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Create Your Post
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300">Generate engaging content for your social media</p>
            </div>

            <div className="space-y-12">
              <Form addPost={addPost} />
              <PostList posts={posts} deletePost={deletePost} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

