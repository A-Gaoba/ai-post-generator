"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Sparkles } from "lucide-react"
import HistoryList from "../../components/HistoryList"
import DarkModeToggle from "../../components/DarkModeToggle"

export default function HistoryPage() {
  const [history, setHistory] = useState<string[]>([])
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedHistory = localStorage.getItem("history")
    if (savedHistory) setHistory(JSON.parse(savedHistory))
  }, [])

  useEffect(() => {
    localStorage.setItem("history", JSON.stringify(history))
  }, [history])

  const deleteHistoryItem = (index: number) => {
    const newHistory = history.filter((_, i) => i !== index)
    setHistory(newHistory)
  }

  const deleteSelectedItems = (selectedIndexes: number[]) => {
    const newHistory = history.filter((_, i) => !selectedIndexes.includes(i))
    setHistory(newHistory)
  }

  const deleteAllHistory = () => {
    setHistory([])
  }

  const editHistoryItem = (index: number, newContent: string) => {
    const newHistory = [...history]
    newHistory[index] = newContent
    setHistory(newHistory)
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
                href="/create"
                className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Create
              </Link>
              <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            <div className="text-center mb-12">
              <div className="flex items-center justify-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-purple-500" />
                <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Post History
                </h1>
              </div>
              <p className="text-gray-600 dark:text-gray-300">View and manage your generated posts</p>
            </div>

            <HistoryList
              history={history}
              deleteHistoryItem={deleteHistoryItem}
              deleteSelectedItems={deleteSelectedItems}
              deleteAllHistory={deleteAllHistory}
              editHistoryItem={editHistoryItem}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

