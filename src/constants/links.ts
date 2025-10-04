export const DEFAULT_LINKS = [
  {
    id: 'today-action',
    title: 'Today',
    url: 'https://www.notion.so/258a0fbd0e048046819ac807d970937b?v=258a0fbd0e048086b149000c195f9c5d',
    category: 'Productivity',
    createdAt: Date.now()
  },
  {
    id: '1',
    title: 'Extensions',
    url: 'chrome://extensions/',
    category: 'Productivity',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 7
  },
  {
    id: '2',
    title: 'Notes Manager',
    url: 'https://www.notion.so/258a0fbd0e048046819ac807d970937b',
    category: 'Productivity',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 6
  },
  {
    id: '3',
    title: 'DevSNC',
    url: 'https://code.devsnc.com/',
    category: 'Development',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 5
  },
  {
    id: '5',
    title: 'ChatGPT',
    url: 'https://chatgpt.com/',
    category: 'AI',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 3
  },
  {
    id: '6',
    title: 'Codeforces',
    url: 'https://codeforces.com/',
    category: 'Coding',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 2
  },
  {
    id: '7',
    title: 'Discord',
    url: 'https://discord.com/channels/1346677905970692146/1347243291862892544',
    category: 'Communication',
    createdAt: Date.now() - 1000 * 60 * 60 * 24 * 1
  },
  {
    id: '8',
    title: 'Notion Learning',
    url: 'https://www.notion.so/Learning-notion-27fa0fbd0e0480fc847fc81c1df713b1?source=copy_link',
    category: 'Productivity',
    createdAt: Date.now()
  },
  {
    id: '10',
    title: 'Chrome Store',
    url: 'https://chromewebstore.google.com/',
    category: 'Productivity',
    createdAt: Date.now()
  },
  {
    id: '11',
    title: 'Aura',
    url: 'http://thepowerofaura.com/',
    category: 'Personal',
    createdAt: Date.now()
  },
  {
    id: '14',
    title: 'Finance AY',
    url: 'https://www.youtube.com/@AssetYogi/playlists',
    category: 'Finance',
    createdAt: Date.now()
  },
  {
    id: '15',
    title: 'AURA Notion',
    url: 'https://www.notion.so/Aadi-AURA-1f5a0fbd0e0480f0b9a7f3bd28670004',
    category: 'Productivity',
    createdAt: Date.now()
  },
  {
    id: '16',
    title: 'Timeline',
    url: 'https://www.notion.so/native/Timeline-Brain-dump-27ba0fbd0e048069a578cb7eda7d138a',
    category: 'Productivity',
    createdAt: Date.now()
  },
  {
    id: '17',
    title: 'Outlook',
    url: 'https://outlook.office.com/mail/inbox/id/AAQkADhjZjVjMTdjLWUyZWItNGQ3NC05ZWEyLTdiYWIxOTE5ODZkZgAQAM94M1iuoXxKu4vh8e9jsnk%3D',
    category: 'Email',
    createdAt: Date.now()
  },
  {
    id: '18',
    title: 'Agentic AI',
    url: 'https://servicenow.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49739779#overview',
    category: 'AI',
    createdAt: Date.now()
  }
] as const;
