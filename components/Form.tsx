"use client"

import type React from "react"

import { useState } from "react"
import { generatePost } from "../utils/mockAiApi"
import { Twitter, Instagram, Linkedin } from "lucide-react"

type FormProps = {
  addPost: (post: string) => void
}

export default function Form({ addPost }: FormProps) {
  const [topic, setTopic] = useState("")
  const [keywords, setKeywords] = useState("")
  const [platform, setPlatform] = useState("Twitter")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const generatedPost = await generatePost(topic, keywords, platform)
    addPost(generatedPost)
    setIsLoading(false)
    setTopic("")
    setKeywords("")
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-3xl -z-10" />
      <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
              placeholder="Enter your topic"
            />
          </div>
          <div>
            <label htmlFor="keywords" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="w-full px-4 py-2 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
              placeholder="Enter keywords (comma-separated)"
            />
          </div>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-200">Platform</label>
          <div className="grid grid-cols-3 gap-4">
            <button
              type="button"
              onClick={() => setPlatform("Twitter")}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                platform === "Twitter"
                  ? "border-purple-500 bg-purple-50 text-purple-600 dark:bg-purple-900/20"
                  : "border-gray-200 hover:border-purple-500 dark:border-gray-600"
              }`}
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </button>
            <button
              type="button"
              onClick={() => setPlatform("Instagram")}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                platform === "Instagram"
                  ? "border-pink-500 bg-pink-50 text-pink-600 dark:bg-pink-900/20"
                  : "border-gray-200 hover:border-pink-500 dark:border-gray-600"
              }`}
            >
              <Instagram className="w-5 h-5" />
              <span>Instagram</span>
            </button>
            <button
              type="button"
              onClick={() => setPlatform("LinkedIn")}
              className={`flex items-center justify-center space-x-2 p-3 rounded-lg border transition-all duration-200 ${
                platform === "LinkedIn"
                  ? "border-blue-500 bg-blue-50 text-blue-600 dark:bg-blue-900/20"
                  : "border-gray-200 hover:border-blue-500 dark:border-gray-600"
              }`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </button>
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? "Generating..." : "Generate Post"}
        </button>
      </div>
    </form>
  )
}

