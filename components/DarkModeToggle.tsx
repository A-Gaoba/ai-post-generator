import { MoonIcon, SunIcon } from "lucide-react"

type DarkModeToggleProps = {
  darkMode: boolean
  toggleDarkMode: () => void
}

export default function DarkModeToggle({ darkMode, toggleDarkMode }: DarkModeToggleProps) {
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-200"
    >
      {darkMode ? <SunIcon className="w-6 h-6 text-yellow-400" /> : <MoonIcon className="w-6 h-6 text-gray-800" />}
    </button>
  )
}

