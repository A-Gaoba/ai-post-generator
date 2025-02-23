import Link from "next/link"
import { Clock, DollarSign, Target, Plus, Sparkles, History } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-32 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      <div className="relative flex flex-col items-center justify-center min-h-screen px-4">
        <div className="max-w-4xl w-full space-y-16 py-20">
          {/* Header */}
          <div className="space-y-6 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-purple-500" />
              <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                AI Post Generator
              </h1>
            </div>

            {/* Tagline with animated circles */}
            <div className="relative inline-block">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-600 max-w-2xl mx-auto">
                Create engaging social media posts in minutes
              </h2>
              <div className="absolute -right-12 -top-2 flex items-center space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-purple-500 animate-pulse"></div>
                <div className="w-6 h-6 rounded-full bg-pink-500 animate-pulse animation-delay-200"></div>
                <div className="w-6 h-6 rounded-full bg-yellow-500 animate-pulse animation-delay-400"></div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-6 bg-white rounded-lg space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-xl">Smart AI Generation</h3>
                <p className="text-gray-600">Generate creative and engaging posts tailored for each platform</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-6 bg-white rounded-lg space-y-4">
                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-semibold text-xl">Multiple Platforms</h3>
                <p className="text-gray-600">Optimize your content for different social media platforms</p>
              </div>
            </div>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
              <div className="relative p-6 bg-white rounded-lg space-y-4">
                <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-semibold text-xl">Post History</h3>
                <p className="text-gray-600">Keep track of all your generated posts in one place</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 pt-8">
            <Link
              href="/create"
              className="group relative inline-flex items-center space-x-4 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm">
                <Plus className="w-5 h-5 text-white" />
              </div>
              <div className="flex flex-col pr-4">
                <span className="text-lg">Create post</span>
                <span className="text-sm text-purple-200">for your social media</span>
              </div>
            </Link>
            <Link
              href="/history"
              className="group relative inline-flex items-center space-x-4 px-8 py-4 bg-white border border-purple-200 rounded-full text-purple-600 font-medium shadow-lg shadow-purple-500/10 hover:shadow-xl hover:shadow-purple-500/20 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100">
                <History className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex flex-col pr-4">
                <span className="text-lg">View history</span>
                <span className="text-sm text-purple-400">manage your posts</span>
              </div>
            </Link>
          </div>

          {/* Example Posts Preview */}
          <div className="relative mt-20 px-4">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50 to-transparent -z-10" />
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-800">Example Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500" />
                  <div>
                    <p className="font-medium">Twitter Post</p>
                    <p className="text-sm text-gray-500">Generated just now</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  ✨ Exciting news! Just launched our new product line. Can't wait to share more details with you all!
                  #Innovation #Launch
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-xl shadow-purple-500/5 hover:shadow-purple-500/10 transition-shadow duration-300">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500" />
                  <div>
                    <p className="font-medium">LinkedIn Post</p>
                    <p className="text-sm text-gray-500">Generated just now</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  🚀 Thrilled to announce our latest achievement in AI technology. Read more about how we're
                  revolutionizing the industry...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

