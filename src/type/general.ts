export type Metadata = {
  title: string;
  publishedAt: string;
  author: string;
  summary: string;
  image?: string;
};

export type Blog = {
  metadata: Metadata;
  slug: string;
  tweetIds: any;
  content: string;
};
