"use client"

import { useState } from "react"
import { Edit2, Trash2, Check, X } from "lucide-react"

type HistoryListProps = {
  history: string[]
  deleteHistoryItem: (index: number) => void
  deleteSelectedItems: (selectedIndexes: number[]) => void
  deleteAllHistory: () => void
  editHistoryItem: (index: number, newContent: string) => void
}

export default function HistoryList({
  history,
  deleteHistoryItem,
  deleteSelectedItems,
  deleteAllHistory,
  editHistoryItem,
}: HistoryListProps) {
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [editIndex, setEditIndex] = useState<number | null>(null)
  const [editedContent, setEditedContent] = useState("")

  const handleSelect = (index: number) => {
    if (selectedItems.includes(index)) {
      setSelectedItems(selectedItems.filter((i) => i !== index))
    } else {
      setSelectedItems([...selectedItems, index])
    }
  }

  const handleSelectAll = () => {
    if (selectedItems.length === history.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(history.map((_, index) => index))
    }
  }

  const handleDeleteSelected = () => {
    deleteSelectedItems(selectedItems)
    setSelectedItems([])
  }

  const handleEdit = (index: number) => {
    setEditIndex(index)
    setEditedContent(history[index])
  }

  const handleSave = (index: number) => {
    editHistoryItem(index, editedContent)
    setEditIndex(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={handleSelectAll}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-700"
        >
          {selectedItems.length === history.length ? "Deselect All" : "Select All"}
        </button>
        <div className="space-x-2">
          <button
            onClick={handleDeleteSelected}
            disabled={selectedItems.length === 0}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Delete Selected
          </button>
          <button
            onClick={deleteAllHistory}
            className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete All
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {history.map((post, index) => (
          <div key={index} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex items-center space-x-4">
              <input
                type="checkbox"
                checked={selectedItems.includes(index)}
                onChange={() => handleSelect(index)}
                className="h-5 w-5 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              {editIndex === index ? (
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="flex-grow px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  rows={3}
                />
              ) : (
                <p className="flex-grow text-gray-700 dark:text-gray-300">{post}</p>
              )}
              <div className="flex space-x-2">
                {editIndex === index ? (
                  <>
                    <button
                      onClick={() => handleSave(index)}
                      className="p-2 text-green-600 hover:bg-green-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 dark:hover:bg-green-900"
                    >
                      <Check className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setEditIndex(null)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 dark:hover:bg-red-900"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEdit(index)}
                      className="p-2 text-blue-600 hover:bg-blue-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 dark:hover:bg-blue-900"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteHistoryItem(index)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500 dark:hover:bg-red-900"
                    >
                      <Trash2 className="w-5 h-5" />
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

