export const generatePost = async (topic: string, keywords: string, platform: string): Promise<string> => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const keywordList = keywords.split(",").map((k) => k.trim())
  const randomKeyword = keywordList[Math.floor(Math.random() * keywordList.length)]

  const templates = [
    `Check out this amazing ${topic}! #${randomKeyword}`,
    `Just learned something new about ${topic}. Did you know? #${randomKeyword}`,
    `Excited to share my thoughts on ${topic}. What do you think? #${randomKeyword}`,
    `${platform} is buzzing about ${topic}. Here's my take: #${randomKeyword}`,
    `Dive into the world of ${topic} with me. #${randomKeyword}`,
  ]

  return templates[Math.floor(Math.random() * templates.length)]
}

