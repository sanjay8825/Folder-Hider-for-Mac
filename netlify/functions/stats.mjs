// Live counters (visitors, downloads) stored in Netlify Blobs.
import { getStore } from '@netlify/blobs';
export const config = { path: '/api/stats' };
const BOT = /bot|crawl|spider|preview|curl|wget|headless/i;
const pub = s => ({ visitors: s.visitors, downloads: s.downloads });
export default async (req) => {
  const store = getStore('stats');
  const s = (await store.get('counts', { type: 'json' })) || { visitors: 0, downloads: 0, silicon: 0, intel: 0 };
  const json = (o, c = 200) => new Response(JSON.stringify(o), { status: c, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' } });
  if (req.method === 'POST' && !BOT.test(req.headers.get('user-agent') || '')) {
    const { event, product } = await req.json().catch(() => ({}));
    if (event === 'visit') s.visitors++;
    else if (event === 'download' && (product === 'silicon' || product === 'intel')) { s.downloads++; s[product]++; }
    else return json({ error: 'bad event' }, 400);
    await store.setJSON('counts', s);
  }
  // Owner view with the per-Mac breakdown: /api/stats?key=YOUR_STATS_KEY
  const key = process.env.STATS_KEY;
  return json(key && new URL(req.url).searchParams.get('key') === key ? s : pub(s));
};
