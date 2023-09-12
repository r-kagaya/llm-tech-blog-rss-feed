export const FLAG_ZENN_PUBLICATION: unique symbol = Symbol('Zenn Publication');
type FEED_INFO_FLAG = typeof FLAG_ZENN_PUBLICATION;

export type FeedInfo = {
  label: string;
  url: string;
  flags?: FEED_INFO_FLAG[];
};

const createFeedInfoList = (feedInfoTuples: [label: string, url: string, flags?: FEED_INFO_FLAG[]][]) => {
  const feedInfoList: FeedInfo[] = [];

  for (const [label, url, flags] of feedInfoTuples) {
    feedInfoList.push({ label, url, flags });
  }

  return feedInfoList;
};

// フィード情報一覧。アルファベット順
export const FEED_INFO_LIST: FeedInfo[] = createFeedInfoList([
  // ['企業名・製品名など', 'RSS/AtomフィードのURL'],
  ['OpenAI', 'https://jamesg.blog/openai.xml'],
  ['Zennのトピック「LLM」', 'https://zenn.dev/topics/llm/feed'],
  ['MLQ.ai', 'https://www.mlq.ai/rss/'],
  ['LangChain blog', 'https://blog.langchain.dev/rss/'],
  ['Chip Huyen', 'https://huyenchip.com/feed'],
  ['梶谷健人 / Kent Kajitani - Note', 'https://note.com/kajiken0630/rss'],
  ['LLM - Medium', 'https://medium.com/feed/tag/llm'],
]);
