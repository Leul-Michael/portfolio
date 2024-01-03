export default async function sitemap(): Promise<
  {
    url: string
    lastModified?: string | Date | undefined
    changeFrequency?: string
    priority?: number | undefined
  }[]
> {
  return [
    {
      url: "https://leul-michael.vercel.app/",
      priority: 1,
    },
    {
      url: "https://leul-michael.vercel.app/",
      priority: 1,
    },
  ]
}
