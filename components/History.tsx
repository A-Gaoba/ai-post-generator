type HistoryProps = {
  history: string[]
}

export default function History({ history }: HistoryProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">History</h2>
      <div className="grid gap-4">
        {history.map((post, index) => (
          <div
            key={index}
            className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-gray-700"
          >
            <p className="text-gray-600 dark:text-gray-400">{post}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

